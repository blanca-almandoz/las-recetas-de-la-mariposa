import { Pathname } from '../../ui/Pathname'
import { getRecipesList } from '../../lib/sheet'
import { TopLevelWrapper } from '@/app/ui/topLevelWrapper/TopLevelWrapper'

export default async function Page() {
  const recipes = await getRecipesList()

  return (
    <TopLevelWrapper>
      <Pathname recipes={recipes} />
    </TopLevelWrapper>
  )
}
