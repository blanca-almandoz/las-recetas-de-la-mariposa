

export function fetchRecipesById (recipes, id){
    return recipes.filter((recipe)=> recipe.id === id)
}

export function fetchRecipesByCategory (recipes, category) {
    return recipes.filter((recipe)=> recipe.category === category)
}
