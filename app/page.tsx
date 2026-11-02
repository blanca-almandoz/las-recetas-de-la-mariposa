'use client'
import recipes from '../public/data/recipes.json'
import { CategoriesWrapper } from './ui/categories/CategoriesWrapper'
import { SectionsWrapper } from './ui/sections/SectionsWrapper'
import { CardContainer } from './ui/card/CardContainer'
import { IntroContainer } from './(overview)/IntroContainer'

interface DateItem {
  date: string
}

export default function Home() {
  const recent = [...recipes]
    .sort((a: DateItem, b: DateItem) => {
      const [dayA, monthA, yearA] = a.date.split('/').map(Number)
      const [dayB, monthB, yearB] = b.date.split('/').map(Number)
      return (
        new Date(yearB, monthB - 1, dayB).getTime() -
        new Date(yearA, monthA - 1, dayA).getTime()
      )
    })
    .slice(0, 8)

  return (
    <>
      <CategoriesWrapper />
      <SectionsWrapper />
      <CardContainer recipes={recent} hasTitle hasHorizontalScroll />
      <IntroContainer />
    </>
  )
}
