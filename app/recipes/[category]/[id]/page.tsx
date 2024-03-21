import { DetailsPage } from '@/app/ui/details-page/DetailsPage';
import { getRecipesList } from '../../../lib/sheet'
import { fetchRecipesById } from '../../../lib/utils'


export default async function Page ({params}: {params: {id: string}}) {
    const recipes = await getRecipesList();
    const id = params.id;
    const recipe = fetchRecipesById(recipes, id)

    return (
        <DetailsPage recipe={recipe} />
    )
}