'use client'
import recipes from '../../public/data/recipes.json'
import { searchRecipes } from '@/lib/utils'
import { CardContainer } from '../ui/card/CardContainer'

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
    <div style={{ paddingTop: 24 }}>
      <CardContainer recipes={searchedRecipes} />
    </div>
  )
}
