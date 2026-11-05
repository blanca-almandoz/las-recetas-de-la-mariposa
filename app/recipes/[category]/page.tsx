import recipes from '../../../public/data/recipes.json'
import { fetchRecipesByCategory, searchRecipes } from '../../../lib/utils'
import { CardContainer } from '@/app/ui/card/CardContainer'
import { CATEGORIES, CATEGORY_LABELS } from '@/lib/categories'

interface PageProps {
  params: { category: string }
  searchParams: Record<string, string | string[] | undefined>
}

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ category: c.path }))
}

export function generateMetadata({ params }: PageProps) {
  return { title: CATEGORY_LABELS[params.category] || 'Recetas' }
}

export default function Page({ params, searchParams }: PageProps) {
  const categoryName = params.category
  const result = fetchRecipesByCategory(recipes, categoryName)

  const query =
    typeof searchParams?.query === 'string' ? searchParams.query : ''
  const searchedRecipes = searchRecipes(query, result)

  return (
    <div style={{ paddingTop: 24, padding: 8 }}>
      <CardContainer recipes={searchedRecipes} hasCategory />
    </div>
  )
}
