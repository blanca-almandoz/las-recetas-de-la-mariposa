import { Recipe } from '@/lib/types'
import { wrapperContent } from '../topLevelWrapper/styles.css'
import { TopLevelWrapper } from '../topLevelWrapper/TopLevelWrapper'
import { DetailsPageAnimations } from '../animations/DetailsPageAnimations'
import { Card } from './Card'

interface CardContainerType {
  recipes: Recipe[]
  hasCategory?: boolean
}

const CardContainer = ({ recipes, hasCategory = false }: CardContainerType) => {
  return (
    <TopLevelWrapper>
      <div className={wrapperContent}>
        {recipes.map((recipe: Recipe) => (
          <div key={recipe.id}>
            <DetailsPageAnimations>
              <Card
                key={recipe.id}
                id={recipe.id}
                title={recipe.title}
                time={recipe.time}
                image={recipe.image}
                category={recipe.category}
                difficulty={recipe.difficulty}
                pathname={
                  hasCategory
                    ? `${recipe.category}/${recipe.id}`
                    : `recipes/${recipe.category}/${recipe.id}`
                }
              />
            </DetailsPageAnimations>
          </div>
        ))}
      </div>
    </TopLevelWrapper>
  )
}

export { CardContainer }
