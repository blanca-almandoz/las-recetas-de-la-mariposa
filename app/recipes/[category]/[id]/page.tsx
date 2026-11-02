import { DetailsPage } from '@/app/ui/details-page/DetailsPage'
import { fetchRecipesById } from '../../../../lib/utils'
import { TopLevelWrapper } from '@/app/ui/topLevelWrapper/TopLevelWrapper'
import recipes from '../../../../public/data/recipes.json'


export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id
  const recipe = fetchRecipesById(recipes, id)

  return (
    <TopLevelWrapper>
      <DetailsPage recipe={recipe} />
    </TopLevelWrapper>
  )
}
