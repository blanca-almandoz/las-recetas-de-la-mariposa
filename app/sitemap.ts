import type { MetadataRoute } from 'next'
import recipes from '../public/data/recipes.json'
import sections from '../public/data/sections.json'
import { CATEGORIES } from '@/lib/categories'
import { SITE_URL } from '@/lib/site'

// Convierte "dd/mm/yyyy" en Date; si no es válida, devuelve undefined.
function parseDate(d?: string): Date | undefined {
  if (!d) return undefined
  const [day, month, year] = d.split('/').map(Number)
  if (!day || !month || !year) return undefined
  const date = new Date(year, month - 1, day)
  return Number.isNaN(date.getTime()) ? undefined : date
}

export default function sitemap(): MetadataRoute.Sitemap {
  const home = { url: `${SITE_URL}/`, changeFrequency: 'weekly' as const }

  const categoryUrls = CATEGORIES.map((c) => ({
    url: `${SITE_URL}/recipes/${c.path}`,
    changeFrequency: 'weekly' as const,
  }))

  const sectionUrls = (sections as { path: string }[]).map((s) => ({
    url: `${SITE_URL}/${s.path}`,
  }))

  const recipeUrls = recipes.map((r) => ({
    url: `${SITE_URL}/recipes/${r.category}/${r.id}`,
    lastModified: parseDate(r.date),
  }))

  return [home, ...categoryUrls, ...sectionUrls, ...recipeUrls]
}
