export interface TopLevelWrapperType {
  children: ReactNode
}

export interface CardType {
  id: string
  title: string
  time: string
  image: string
  difficulty: string
  category: string
  pathname: string
}

export interface IconType {
  icon: string
  level?: string
}

export interface ListedItemsType {
  items: Record<string, string[]>
}

export interface Recipe {
  id: string
  title: string
  ingredients: Record<string, string[]>
  steps: Record<string, string[]>
  time: string
  difficulty: string
  image: string
  category: string
  author: string
  portions: number
  imageComment: string
}
export interface DetailsPageType {
  recipe: Recipe[]
}

export type CategoryKeys = 'starters' | 'main' | 'siders' | 'desserts'
