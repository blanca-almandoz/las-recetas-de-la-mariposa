import { DetailsPage } from '@/app/ui/details-page/DetailsPage';
import { fetchFilteredRecipes } from '../../../lib/utils'


export default function Page ({params}: {params: {id: string}}) {
    const id = params.id;
    const recipe = fetchFilteredRecipes('id', id);

    return (
        <DetailsPage recipe={recipe} />
    )
}