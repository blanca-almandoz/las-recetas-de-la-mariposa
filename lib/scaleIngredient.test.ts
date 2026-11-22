import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import {
  parsePortions,
  PORTION_OPTIONS,
  scaleIngredient,
  scaleIngredients,
  supportsPortionScaling,
} from './scaleIngredient'

describe('scaleIngredient', () => {
  it('no cambia la línea si el factor es 1', () => {
    assert.equal(scaleIngredient('2 zanahorias', 1), '2 zanahorias')
  })

  it('escala la cantidad inicial', () => {
    assert.equal(scaleIngredient('2 zanahorias', 1.5), '3 zanahorias')
    assert.equal(scaleIngredient('50 g aceite', 0.5), '25 g aceite')
    assert.equal(scaleIngredient('300 ml leche', 1 / 3), '100 ml leche')
  })

  it('redondea siempre hacia arriba a medios', () => {
    assert.equal(scaleIngredient('1 cebolla', 0.5), '½ cebolla')
    assert.equal(scaleIngredient('1 cebolla', 0.83), '1 cebolla')
    assert.equal(scaleIngredient('2 cucharadas de harina', 0.4), '1 cucharada de harina')
    assert.equal(scaleIngredient('1 cucharada de harina', 0.5), '½ cucharada de harina')
    assert.equal(scaleIngredient('1 cebolla', 1.2), '1 ½ cebollas')
    assert.equal(scaleIngredient('¼ de taza de caldo', 0.5), '½ de taza de caldo')
  })

  it('gramos y mililitros siempre en enteros hacia arriba', () => {
    assert.equal(scaleIngredient('10 g sal', 1.1), '11 g sal')
    assert.equal(scaleIngredient('125 g jamón serrano', 1.5), '188 g jamón serrano')
    assert.equal(scaleIngredient('250 ml de nata líquida', 1.1), '275 ml de nata líquida')
    assert.equal(scaleIngredient('100g de queso rallado', 0.83), '83g de queso rallado')
  })

  it('cantidades de 10 o más se redondean a entero', () => {
    assert.equal(scaleIngredient('12 langostinos', 1.5), '18 langostinos')
    assert.equal(scaleIngredient('12 langostinos', 1.1), '14 langostinos')
  })

  it('escala números mixtos', () => {
    assert.equal(scaleIngredient('1 1/2 kg de harina', 2), '3 kg de harina')
    assert.equal(scaleIngredient('2 vasos de vino', 0.75), '1 ½ vasos de vino')
  })

  it('escala fracciones de entrada', () => {
    assert.equal(scaleIngredient('1/2 limón', 2), '1 limón')
    assert.equal(scaleIngredient('½ cordero (pedir al carnicero)', 2), '1 cordero (pedir al carnicero)')
    assert.equal(scaleIngredient('1/4 cucharadita de sal', 1.5), '½ cucharadita de sal')
  })

  it('escala rangos en ambos extremos', () => {
    assert.equal(scaleIngredient('2-3 alcachofas por persona', 2), '4-6 alcachofas por persona')
  })

  it('quita el carácter invisible U+2060 al escalar', () => {
    assert.equal(scaleIngredient('⁠2 dientes de ajo', 2), '4 dientes de ajo')
  })

  it('no toca cantidades que no van al inicio ni líneas sin cantidad', () => {
    assert.equal(scaleIngredient('Sal (1/2 cucharada sopera)', 2), 'Sal (1/2 cucharada sopera)')
    assert.equal(scaleIngredient('Aceite', 2), 'Aceite')
    assert.equal(scaleIngredient('3 cebollas (350g)', 2), '6 cebollas (350g)')
  })

  it('devuelve la línea original si el factor no es válido', () => {
    assert.equal(scaleIngredient('2 huevos', 0), '2 huevos')
    assert.equal(scaleIngredient('2 huevos', -1), '2 huevos')
    assert.equal(scaleIngredient('2 huevos', NaN), '2 huevos')
  })

  it('no rompe con denominador cero', () => {
    assert.equal(scaleIngredient('1/0 taza de algo', 2), '1/0 taza de algo')
  })

  it('concuerda el sustantivo en singular y plural', () => {
    assert.equal(scaleIngredient('1 cebolla', 2), '2 cebollas')
    assert.equal(scaleIngredient('2 cebollas', 0.5), '1 cebolla')
    assert.equal(scaleIngredient('1 limón', 2), '2 limones')
    assert.equal(scaleIngredient('1 diente de ajo', 4), '4 dientes de ajo')
    assert.equal(scaleIngredient('2 cucharadas de harina', 0.5), '1 cucharada de harina')
    assert.equal(scaleIngredient('1 lápiz', 2), '2 lápices')
    assert.equal(scaleIngredient('1 bote de tomate frito', 2.5), '2 ½ botes de tomate frito')
    assert.equal(scaleIngredient('1 yogurt natural', 2), '2 yogurts natural')
  })

  it('concuerda también el adjetivo que va detrás del sustantivo', () => {
    assert.equal(scaleIngredient('2 pimientos verdes', 0.5), '1 pimiento verde')
    assert.equal(scaleIngredient('1 cebolla picada', 2), '2 cebollas picadas')
    assert.equal(scaleIngredient('1 bote pequeño de tomate', 2), '2 botes pequeños de tomate')
  })

  it('no cambia palabras que no son sustantivos contados', () => {
    assert.equal(scaleIngredient('1 kg de cebollas', 2), '2 kg de cebollas')
    assert.equal(scaleIngredient('1 cebolla en polvo', 2), '2 cebollas en polvo')
  })
})

describe('scaleIngredients', () => {
  it('mantiene los grupos y escala cada línea', () => {
    const result = scaleIngredients(
      { Masa: ['2 huevos', 'Sal'], Relleno: ['1 kg de cebollas'] },
      2
    )
    assert.deepEqual(result, {
      Masa: ['4 huevos', 'Sal'],
      Relleno: ['2 kg de cebollas'],
    })
  })

  it('los huevos salen en unidades enteras, redondeadas hacia arriba', () => {
    // 2 huevos x 1,25 = 2,5 → 3 huevos; el resto usa la proporción real (1,25)
    const result = scaleIngredients(
      { Masa: ['2 huevos', '200 ml de leche', 'Sal (1/2 cucharada)'] },
      1.25
    )
    assert.deepEqual(result, {
      Masa: ['3 huevos', '250 ml de leche', 'Sal (1/2 cucharada)'],
    })
  })

  it('nunca escribe fracciones de huevo', () => {
    // 3 huevos x 0,5 = 1,5 → 2 huevos; la harina sí baja a la mitad
    const result = scaleIngredients({ Masa: ['3 huevos', '300 g de harina'] }, 0.5)
    assert.deepEqual(result, { Masa: ['2 huevos', '150 g de harina'] })
  })

  it('con un solo huevo no baja de 1, pero el resto sí escala', () => {
    assert.deepEqual(scaleIngredients({ A: ['1 huevo'] }, 2), { A: ['2 huevos'] })
    assert.deepEqual(scaleIngredients({ A: ['1 huevo'] }, 0.25), { A: ['1 huevo'] })
    assert.deepEqual(
      scaleIngredients({ Albóndigas: ['700 g de carne picada', '1 huevo'] }, 0.25),
      { Albóndigas: ['175 g de carne picada', '1 huevo'] }
    )
  })

  it('las recetas sin huevos escalan con el factor normal', () => {
    assert.deepEqual(scaleIngredients({ A: ['1 cebolla', '100 g de arroz'] }, 1.5), {
      A: ['1 ½ cebollas', '150 g de arroz'],
    })
  })
})

describe('parsePortions', () => {
  it('lee el número de la hoja', () => {
    assert.equal(parsePortions('6'), 6)
    assert.equal(parsePortions('20 uds'), 20)
  })

  it('usa el valor por defecto si está vacío o no es válido', () => {
    assert.equal(parsePortions(''), 4)
    assert.equal(parsePortions(undefined), 4)
    assert.equal(parsePortions('0'), 4)
    assert.equal(parsePortions('abc'), 4)
    assert.equal(parsePortions('', 2), 2)
  })
})

describe('supportsPortionScaling', () => {
  it('solo ofrece 2, 4, 6 y 8 comensales', () => {
    assert.deepEqual([...PORTION_OPTIONS], [2, 4, 6, 8])
  })

  it('no aparece en postres', () => {
    assert.equal(supportsPortionScaling('desserts', 4), false)
  })

  it('aparece en el resto de categorías si la base es 2, 4, 6 u 8', () => {
    assert.equal(supportsPortionScaling('main', 6), true)
    assert.equal(supportsPortionScaling('starters', 10), false)
    assert.equal(supportsPortionScaling('siders', 1), false)
  })
})
