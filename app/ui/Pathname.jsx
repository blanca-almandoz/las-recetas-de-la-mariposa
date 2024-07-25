'use client'
import { Card } from '../ui/card/Card'
import { usePathname } from 'next/navigation'
import { fetchRecipesByCategory } from '../lib/utils'

const Pathname = ({ recipes }) => {
  const pathname = usePathname()
  const categoryName = pathname.slice(9)
  const result = fetchRecipesByCategory(recipes, categoryName)

  return (
    <>
      {result.map((recipe) => {
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
