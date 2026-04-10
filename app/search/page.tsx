'use client'
import recipes from '../../public/data/recipes.json'
import { searchRecipes } from '@/lib/utils'
import { CardContainer } from '../ui/card/CardContainer'
import { Search } from '../ui/search/Search'
import { Footer } from '../ui/footer/Footer'

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
      <Search />
      <CardContainer recipes={searchedRecipes} />
      <Footer />
    </div>
  )
}
