'use client'
import recipes from '../../../public/data/recipes.json'
import { usePathname } from 'next/navigation'
import { fetchRecipesByCategory, searchRecipes } from '../../../lib/utils'
import { CardContainer } from '@/app/ui/card/CardContainer'

interface PageProps {
  searchParams: Record<string, string | string[] | undefined>
}

export default function Page({ searchParams }: PageProps) {
  const pathname = usePathname()
  const categoryName = pathname.slice(9)
  const result = fetchRecipesByCategory(recipes, categoryName)

  const query = searchParams?.query || ''
  const searchedRecipes = searchRecipes(query, result)

  return (
    <div style={{ paddingTop: 24 }}>
      <CardContainer recipes={searchedRecipes} hasCategory />
    </div>
  )
}
