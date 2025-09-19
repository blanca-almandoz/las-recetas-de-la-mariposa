'use client'
import { Card } from './ui/card/Card'
import { TopLevelWrapper } from './ui/topLevelWrapper/TopLevelWrapper'
import { Recipe } from '../lib/types'
import recipes from '../public/data/recipes.json'
import { IntroContainer } from './(overview)/IntroContainer'
import { searchRecipes } from '@/lib/utils'
import { CardAnimations } from './ui/animations/CardAnimations'
import { CardContainer } from './ui/card/CardContainer'

interface DateItem {
  date: string
}

export default function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string
    page?: string
  }
}) {
  const query = searchParams?.query || ''
  const searchedRecipes = searchRecipes(query, recipes)
  const sortedRecipes = searchedRecipes.sort((a: DateItem, b: DateItem) => {
    const [dayA, monthA, yearA] = a.date.split('/').map(Number)
    const [dayB, monthB, yearB] = b.date.split('/').map(Number)

    const dateA = new Date(yearA, monthA - 1, dayA)
    const dateB = new Date(yearB, monthB - 1, dayB)

    return dateB.getTime() - dateA.getTime()
  })

  return (
    <>
      <IntroContainer />
      <CardContainer recipes={sortedRecipes} />
    </>
  )
}
