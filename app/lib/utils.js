import { data} from './data'

export function fetchRecipeById (id) {
    return data.filter((recipe)=> recipe.id === id)
}