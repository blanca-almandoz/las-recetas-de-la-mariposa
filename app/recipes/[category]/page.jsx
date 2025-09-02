import { Pathname } from '../../ui/Pathname'
import recipes from '../../../public/data/recipes.json'
import { TopLevelWrapper } from '@/app/ui/topLevelWrapper/TopLevelWrapper'

export default async function Page() {

  return (
    <TopLevelWrapper>
      <Pathname recipes={recipes} />
    </TopLevelWrapper>
  )
}
