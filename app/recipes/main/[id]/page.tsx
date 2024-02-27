import { DetailsPage } from '@/app/ui/details-page/DetailsPage';
import { fetchRecipeById } from '../../../lib/utils'


export default function Page ( { params }: { params: { id: string } }) {
    const id = params.id;
    const recipe = fetchRecipeById(id);

    return (
        <DetailsPage recipe={recipe} />
    )
}