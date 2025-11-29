import { Recipe } from '@/lib/types'
import { wrapperContent } from '../topLevelWrapper/styles.css'
import { TopLevelWrapper } from '../topLevelWrapper/TopLevelWrapper'
import { DetailsPageAnimations } from '../animations/DetailsPageAnimations'
import { Card } from './Card'
import { cardWithTitle } from './styles.css'

interface CardContainerType {
  recipes: Recipe[]
  hasCategory?: boolean
  hasTitle?: boolean
}

const CardContainer = ({
  recipes,
  hasCategory = false,
  hasTitle = false,
}: CardContainerType) => {
  return (
    <TopLevelWrapper>
      {hasTitle && <div className={cardWithTitle}>Las últimas recetas</div>}
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
