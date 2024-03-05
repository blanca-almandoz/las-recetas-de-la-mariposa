import { data } from './data'


export function fetchFilteredRecipes (type, item) {
    return (data.filter((recipe)=> recipe[type] === item))
}
