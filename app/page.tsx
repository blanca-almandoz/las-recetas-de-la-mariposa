import { Card } from './ui/card/Card'
import { TopLevelWrapper } from './ui/topLevelWrapper/TopLevelWrapper'
import { Recipe } from '../lib/types'
import recipes from '../public/data/recipes.json'
import { IntroContainer } from './(overview)/IntroContainer'
import { searchRecipes } from '@/lib/utils'

interface DateItem {
  date: string
}

export default async function Home({
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
    <>
      <IntroContainer />
      <TopLevelWrapper>
        {searchedRecipes
          .sort((a: DateItem, b: DateItem) => {
            const [dayA, monthA, yearA] = a.date.split('/').map(Number)
            const [dayB, monthB, yearB] = b.date.split('/').map(Number)

            const dateA = new Date(yearA, monthA - 1, dayA)
            const dateB = new Date(yearB, monthB - 1, dayB)

            return dateB.getTime() - dateA.getTime()
          })
          .map((recipe: Recipe) => (
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
