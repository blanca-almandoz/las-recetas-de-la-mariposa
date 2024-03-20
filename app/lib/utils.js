
export function fetchFilteredRecipes (type, item, data) {
    return (data?.filter((recipe)=> recipe[type] === item))
}
