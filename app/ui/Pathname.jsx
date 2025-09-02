'use client'
import { Card } from '../ui/card/Card'
import { usePathname } from 'next/navigation'
import { fetchRecipesByCategory } from '../../lib/utils'

const Pathname = ({ recipes, searchParams }) => {
  const query = searchParams?.query || ''
  const pathname = usePathname()
  const categoryName = pathname.slice(9)
  const result = fetchRecipesByCategory(recipes, categoryName)
  const searchedRecipes = result.filter((recipe) => {
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
      {searchedRecipes.map((recipe) => {
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
    </>
  )
}

export { Pathname }
