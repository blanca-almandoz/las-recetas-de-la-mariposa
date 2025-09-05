import recipes from '../../public/data/recipes.json'
import { Recipe } from '../../lib/types'
import { Card } from '../ui/card/Card'
import { TopLevelWrapper } from '../ui/topLevelWrapper/TopLevelWrapper'
import { searchRecipes } from '@/lib/utils'

export default async function Page({
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
        </div>
      ))}
    </TopLevelWrapper>
  )
}
