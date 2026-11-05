// Construye el JSON-LD schema.org/Recipe para la página de detalle.
// Esto es lo que habilita los "rich results" de Google (foto, tiempo, etc.).
import { SITE_URL } from './site.js'

// Minutos -> duración ISO 8601 (p. ej. 90 -> "PT1H30M"). Devuelve undefined
// si no hay un número válido.
export function minutesToISO(min) {
  const n = Number(min)
  if (!n || Number.isNaN(n)) return undefined
  const h = Math.floor(n / 60)
  const m = n % 60
  return `PT${h ? `${h}H` : ''}${m ? `${m}M` : ''}` || 'PT0M'
}

export function buildRecipeJsonLd(recipe) {
  const ingredients = Object.values(recipe.ingredients || {}).flat()
  const steps = Object.values(recipe.steps || {}).flat()
  const totalTime = minutesToISO(recipe.time)

  return {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: recipe.title,
    ...(recipe.image
      ? { image: [SITE_URL ? `${SITE_URL}${recipe.image}` : recipe.image] }
      : {}),
    ...(recipe.author
      ? { author: { '@type': 'Person', name: recipe.author } }
      : {}),
    ...(recipe.category ? { recipeCategory: recipe.category } : {}),
    ...(totalTime ? { totalTime } : {}),
    ...(recipe.portions ? { recipeYield: String(recipe.portions) } : {}),
    ...(ingredients.length ? { recipeIngredient: ingredients } : {}),
    ...(steps.length
      ? {
          recipeInstructions: steps.map((text) => ({
            '@type': 'HowToStep',
            text,
          })),
        }
      : {}),
  }
}
