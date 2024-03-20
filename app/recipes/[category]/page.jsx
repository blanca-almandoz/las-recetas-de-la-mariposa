import { Pathname } from '../../ui/Pathname'
import { getRecipesList } from '../../lib/sheet'

export default async function Page() {
const recipes = await getRecipesList();
    
    return (<Pathname recipes={recipes}/>)
  }