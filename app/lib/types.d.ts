import React from 'react'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any
    }
  }
}

export interface TopLevelWrapperType {
  children: ReactNode
}

export interface CardType {
  id: string
  title: string
  time: string
  image: string
  difficulty: string
  category: CategoryKeys
  pathname: string
}

export interface IconType {
  icon: string
  level?: string
}

export interface ListedItemsType {
  title: string
  items: Array<string>
}

export interface Recipe {
  id: string
  title: string
  ingredients: string
  steps: string
  time: string
  difficulty: string
  image: string
  category: CategoryKeys
  author: string
  portions: number
  imageComment: string
}
export interface DetailsPageType {
  recipe: Recipe[]
}

export type CategoryKeys = 'starters' | 'main' | 'siders' | 'desserts'
