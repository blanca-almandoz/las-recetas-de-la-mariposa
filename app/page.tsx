import { Card } from './ui/card/Card'
import { getRecipesList } from './lib/sheet'
import { TopLevelWrapper } from './ui/topLevelWrapper/TopLevelWrapper'
import { Recipe } from './lib/types'
import { IntroContainer } from './(overview)/IntroContainer'

export default async function Home({
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
    <>
      <IntroContainer />
      <TopLevelWrapper>
        {searchedRecipes
          .sort((a: any, b: any) => {
            const [dayA, monthA, yearA] = a.date.split('/').map(Number)
            const [dayB, monthB, yearB] = b.date.split('/').map(Number)

            const dateA = new Date(yearA, monthA - 1, dayA) as any
            const dateB = new Date(yearB, monthB - 1, dayB) as any

            return dateB - dateA
          })
          .map((recipe) => (
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
    </>
  )
}
