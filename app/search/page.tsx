'use client'
import recipes from '../../public/data/recipes.json'
import { Recipe } from '../../lib/types'
import { Card } from '../ui/card/Card'
import { TopLevelWrapper } from '../ui/topLevelWrapper/TopLevelWrapper'
import { searchRecipes } from '@/lib/utils'
import { CardAnimations } from '../ui/animations/CardAnimations'

export default function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string
    page?: string
  }
}) {
  const query = searchParams?.query || ''
  const searchedRecipes = searchRecipes(query, recipes)

  return (
    <TopLevelWrapper>
      {searchedRecipes.map((recipe: Recipe) => (
        <div key={recipe.id}>
          <CardAnimations>
            <Card
              key={recipe.id}
              id={recipe.id}
              title={recipe.title}
              time={recipe.time}
              image={recipe.image}
              category={recipe.category}
              difficulty={recipe.difficulty}
              pathname={`recipes/${recipe.category}/${recipe.id}`}
            />
          </CardAnimations>
        </div>
      ))}
    </TopLevelWrapper>
  )
}
