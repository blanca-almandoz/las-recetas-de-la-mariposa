import { DetailsPage } from '@/app/ui/details-page/DetailsPage'
import { getRecipesList } from '../../../lib/sheet'
import { fetchRecipesById } from '../../../lib/utils'
import { TopLevelWrapper } from '@/app/ui/topLevelWrapper/TopLevelWrapper'

export default async function Page({ params }: { params: { id: string } }) {
  const recipes = await getRecipesList()
  const id = params.id
  const recipe = fetchRecipesById(recipes, id)

  return (
    <TopLevelWrapper>
      <DetailsPage recipe={recipe} />
    </TopLevelWrapper>
  )
}
