import { getRecipesList } from '../lib/sheet'
import { Recipe } from '../lib/types'
import { Card } from '../ui/card/Card'
import { TopLevelWrapper } from '../ui/topLevelWrapper/TopLevelWrapper'

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string
    page?: string
  }
}) {
  const recipes = await getRecipesList()
  const query = searchParams?.query || ''
  const searchedRecipes = recipes.filter((recipe) => {
    const recipesList = recipe.title
      ?.toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
    const recipeSearched = query
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
    return recipesList.includes(recipeSearched)
  })
  return (
    <TopLevelWrapper>
      {searchedRecipes.map((recipe) => (
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
