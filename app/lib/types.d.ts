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
  category: TagKeys
  pathname: string
}

export interface IconType {
  icon: string
  level?: string
}

export interface IconAndLabelType extends IconType {
  label: any
}

export interface ListedItemsType extends IconType {
  title: string
  items: Array<string>
}

export interface DetailsPageType {
  recipe: any
}

export type TagKeys = 'starters' | 'main' | 'siders' | 'desserts'

export interface TagType {
  text: TagKeys
}
