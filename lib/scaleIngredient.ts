/**
 * Escalado de porciones para las listas de ingredientes.
 *
 * - Solo se escala la cantidad que aparece al principio de la línea
 *   ("2 zanahorias", "1/2 limón", "1 1/2 kg de harina", "2-3 alcachofas").
 *   Las cantidades dentro de paréntesis o más adelante en el texto no se tocan.
 * - Todas las cantidades se redondean SIEMPRE hacia arriba:
 *   · cantidades de contar (cebollas, huevos…): múltiplos de ½ (1 ½, 2, 2 ½…)
 *   · gramos y mililitros, y cualquier cantidad de 10 o más: número entero
 * - Los huevos van siempre en unidades enteras, redondeados hacia arriba (mínimo 1).
 *   El resto de ingredientes escala por la proporción real de comensales.
 * - El sustantivo (y el adjetivo que va detrás) concuerda en singular/plural.
 */

// Palabras que siguen a la cantidad pero no son el sustantivo contado.
const NOT_NOUNS = new Set([
  'g', 'gr', 'grs', 'kg', 'ml', 'cl', 'dl', 'l', 'lt', 'tsp', 'tbsp', 'uds', 'ud', 'aprox',
  'de', 'del', 'a', 'al', 'o', 'y', 'e', 'en', 'con', 'sin', 'para', 'por',
  'un', 'una', 'unos', 'unas', 'el', 'la', 'los', 'las',
])

// Unidades que se redondean siempre a entero.
const WHOLE_UNIT_RE = /^\s*(g|gr|grs|ml|cl|dl)\b/i

// Una cantidad: "1 1/2", "1/2", "2,5", "2.5", "2", "½"
const TOKEN = String.raw`\d+\s+\d+\/\d+|\d+\/\d+|\d+(?:[.,]\d+)?|[½¼¾⅓⅔]`
// Cantidad al inicio, opcionalmente un rango: "2-3"
const LEADING_RE = new RegExp(`^(${TOKEN})(?:\\s*[-–]\\s*(${TOKEN}))?(.*)$`)
// Línea que empieza por cantidad y el ingrediente "huevo"/"huevos"
const EGG_RE = new RegExp(`^[\\s\\u2060]*(${TOKEN})(?:\\s*[-–]\\s*(?:${TOKEN}))?\\s+huevos?\\b`, 'i')

const parseToken = (token: string): number => {
  const t = token.trim()

  if (t === '½') return 1 / 2
  if (t === '¼') return 1 / 4
  if (t === '¾') return 3 / 4
  if (t === '⅓') return 1 / 3
  if (t === '⅔') return 2 / 3

  const mixed = t.match(/^(\d+)\s+(\d+)\/(\d+)$/)
  if (mixed) {
    const denominator = Number(mixed[3])
    return denominator === 0 ? NaN : Number(mixed[1]) + Number(mixed[2]) / denominator
  }

  const fraction = t.match(/^(\d+)\/(\d+)$/)
  if (fraction) {
    const denominator = Number(fraction[2])
    return denominator === 0 ? NaN : Number(fraction[1]) / denominator
  }

  return parseFloat(t.replace(',', '.'))
}

// Redondeo hacia arriba. El margen evita que 275,0000000001 pase a 276.
const ceilHalf = (value: number): number => Math.ceil(value * 2 - 1e-9) / 2
const ceilInt = (value: number): number => Math.ceil(value - 1e-9)

/** Formatea un múltiplo de ½ en español: 2, 2 ½, ½. */
const formatHalves = (value: number): string => {
  const whole = Math.floor(value)
  const half = value - whole > 0 ? '½' : ''
  if (whole === 0) return half || '0'
  return half ? `${whole} ${half}` : String(whole)
}

/* ---- Singular / plural ---- */

const ACCENTED_TO_PLAIN: Record<string, string> = {
  á: 'a', é: 'e', í: 'i', ó: 'o', ú: 'u',
  Á: 'A', É: 'E', Í: 'I', Ó: 'O', Ú: 'U',
}

/** "cebolla" → "cebollas", "limón" → "limones", "lápiz" → "lápices". */
export const pluralize = (word: string): string => {
  if (/z$/i.test(word)) return word.slice(0, -1) + 'ces'
  if (/[aeiouáéíóú]$/i.test(word)) return word + 's'
  // Préstamos acabados en -t (yogurt): plural en -s.
  if (/t$/i.test(word)) return word + 's'
  // Terminaciones en consonante: se quita la tilde de la última sílaba y se añade "es".
  const unaccented = word.replace(/[áéíóúÁÉÍÓÚ](?=[^aeiouáéíóúAEIOUÁÉÍÓÚ]*$)/, (c) => ACCENTED_TO_PLAIN[c])
  return unaccented + 'es'
}

/** "cebollas" → "cebolla", "limones" → "limón", "dientes" → "diente". */
export const singularize = (word: string): string => {
  if (/ces$/i.test(word)) return word.slice(0, -3) + 'z'
  if (/es$/i.test(word)) {
    const stem = word.slice(0, -2)
    // Plurales en consonante (limones, panes, mujeres) frente a vocal + s (tomates, dientes).
    if (/[nrldj]$/i.test(stem)) {
      return /on$/i.test(stem) ? stem.slice(0, -2) + 'ón' : stem
    }
  }
  if (/s$/i.test(word)) return word.slice(0, -1)
  return word
}

const isPlural = (word: string): boolean => /s$/i.test(word)

/** "verdes" → "verde", "azules" → "azul", "pequeños" → "pequeño". */
const singularizeAdjective = (word: string): string => {
  if (/[nrl]es$/i.test(word)) return word.slice(0, -2)
  if (/s$/i.test(word)) return word.slice(0, -1)
  return word
}

const WORD_RE = /^(\s+)([A-Za-zÁÉÍÓÚáéíóúÑñÜü]+)/

const agreeWord = (word: string, plural: boolean, adjective = false): string => {
  if (plural && !isPlural(word)) return pluralize(word)
  if (!plural && isPlural(word)) return adjective ? singularizeAdjective(word) : singularize(word)
  return word
}

/**
 * Ajusta el sustantivo que sigue a la cantidad (y el adjetivo que va justo detrás)
 * a singular o plural según la cantidad nueva.
 */
const agreeNoun = (rest: string, plural: boolean): string => {
  const noun = rest.match(WORD_RE)
  if (!noun || noun[2].length <= 1 || NOT_NOUNS.has(noun[2].toLowerCase())) return rest

  let out = noun[1] + agreeWord(noun[2], plural)
  let after = rest.slice(noun[0].length)

  // Adjetivo en minúscula acabado en -o/-a/-e (o su plural): "pimientos verdes", "cebolla picada".
  const adjective = after.match(WORD_RE)
  if (
    adjective &&
    adjective[2].length > 2 &&
    /^[a-záéíóúñü]/.test(adjective[2]) &&
    !NOT_NOUNS.has(adjective[2].toLowerCase()) &&
    /[oae]s?$/i.test(adjective[2])
  ) {
    out += adjective[1] + agreeWord(adjective[2], plural, true)
    after = after.slice(adjective[0].length)
  }

  return out + after
}

/* ---- Escalado ---- */

type ScaleOptions = {
  /** Redondea a entero hacia arriba (mínimo 1). Se usa para los huevos. */
  wholeUnits?: boolean
}

/**
 * Escala una línea de ingrediente por `factor` (comensales nuevos / comensales base).
 * Si no hay cantidad al inicio, o el factor no es válido, devuelve la línea tal cual.
 */
export const scaleIngredient = (line: string, factor: number, options: ScaleOptions = {}): string => {
  if (!Number.isFinite(factor) || factor <= 0 || factor === 1) return line

  // Quita el carácter invisible U+2060 (word joiner) que aparece en algunas líneas.
  const stripped = line.replace(/^[\s⁠]+/, '')
  const match = stripped.match(LEADING_RE)
  if (!match) return line

  const first = parseToken(match[1])
  if (!Number.isFinite(first)) return line

  const hasRange = match[2] !== undefined
  const second = hasRange ? parseToken(match[2]) : NaN
  if (hasRange && !Number.isFinite(second)) return line

  const rest = match[3]
  // Enteros para huevos, gramos/mililitros y cantidades de 10 o más; medio punto en el resto.
  const integer = options.wholeUnits || WHOLE_UNIT_RE.test(rest)
  const round = (n: number) => {
    if (integer) return Math.max(1, ceilInt(n))
    return n >= 10 ? ceilInt(n) : Math.max(0.5, ceilHalf(n))
  }
  const format = (n: number) => (integer || n >= 10 ? String(n) : formatHalves(n))

  const scaledFirst = round(first * factor)
  const scaledSecond = hasRange ? round(second * factor) : NaN

  const quantity = hasRange
    ? `${format(scaledFirst)}-${format(scaledSecond)}`
    : format(scaledFirst)

  // "1" es singular; cualquier cantidad mayor de 1 (y los rangos) va en plural.
  const plural = hasRange ? scaledSecond > 1 : scaledFirst > 1

  return quantity + agreeNoun(rest, plural)
}

/**
 * Número de huevos que indica la línea ("2 huevos", "1 huevo cocido"), o null si no es una línea de huevos.
 */
const eggCount = (line: string): number | null => {
  const match = line.match(EGG_RE)
  if (!match) return null
  const n = parseToken(match[1])
  return Number.isFinite(n) ? n : null
}

/**
 * Escala todos los grupos de ingredientes (misma estructura que `recipe.ingredients`).
 *
 * `ratio` = comensales nuevos / comensales base.
 *
 * Todas las líneas escalan por el mismo ratio. Las líneas de huevos se redondean
 * hacia arriba a unidades enteras (mínimo 1), así que nunca aparecen medios huevos.
 */
export const scaleIngredients = (
  groups: Record<string, string[]>,
  ratio: number
): Record<string, string[]> =>
  Object.fromEntries(
    Object.entries(groups).map(([title, groupLines]) => [
      title,
      groupLines.map((line) =>
        eggCount(line) !== null
          ? scaleIngredient(line, ratio, { wholeUnits: true })
          : scaleIngredient(line, ratio)
      ),
    ])
  )

/**
 * Convierte el campo `portions` de la hoja (texto, a veces vacío o "20 uds")
 * en un número. Si no es válido, usa `fallback`.
 */
export const parsePortions = (raw: string | undefined, fallback = 4): number => {
  const n = parseInt(raw ?? '', 10)
  return Number.isFinite(n) && n > 0 ? n : fallback
}

/** Comensales que se pueden elegir en el detalle de receta. */
export const PORTION_OPTIONS = [2, 4, 6, 8] as const

/**
 * Indica si una receta muestra el selector de comensales:
 * no en postres, y solo si su número base de comensales está entre las opciones.
 */
export const supportsPortionScaling = (category: string, basePortions: number): boolean =>
  category !== 'desserts' && (PORTION_OPTIONS as readonly number[]).includes(basePortions)
