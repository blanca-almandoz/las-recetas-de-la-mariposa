import { DetailsPage } from '@/app/ui/details-page/DetailsPage';
import { getRecipesList } from '../../../lib/sheet'


export default async function Page ({params}: {params: {id: string}}) {
    const recipes = await getRecipesList();
    const id = params.id;
    const recipe = recipes.filter((recipe)=> recipe.id === id)

    return (
        <DetailsPage recipe={recipe} />
    )
}