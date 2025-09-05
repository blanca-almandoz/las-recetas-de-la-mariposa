'use client'
import recipes from '../../../public/data/recipes.json'
import { usePathname } from 'next/navigation'
import { fetchRecipesByCategory, searchRecipes } from '../../../lib/utils'
import { TopLevelWrapper } from '@/app/ui/topLevelWrapper/TopLevelWrapper'
import { Card } from '../../ui/card/Card'
import { Recipe } from '@/lib/types'

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
    <TopLevelWrapper>
      {searchedRecipes.map((recipe: Recipe) => {
        return (
          <Card
            key={recipe.id}
            id={recipe.id}
            title={recipe.title}
            time={recipe.time}
            image={recipe.image}
            category={recipe.category}
            difficulty={recipe.difficulty}
            pathname={`${recipe.category}/${recipe.id}`}
          />
        )
      })}
    </TopLevelWrapper>
  )
}
