export function fetchRecipesById(recipes, id) {
  return recipes.filter((recipe) => recipe.id === id)
}

export function fetchRecipesByName(recipes, name) {
  return recipes.filter((recipe) => recipe.title === name)
}

export function fetchRecipesByCategory(recipes, category) {
  const json = recipes.filter((recipe) => recipe.category === category)
  const res = json.sort((a, b) => {
    if (a.title < b.title) {
      return -1
    }
    if (a.title > b.title) {
      return 1
    }
    return 0
  })
  return res
}

export function searchRecipes(query, recipes) {
  const searchRecipes = recipes.filter((recipe) => {
    const recipesList = recipe.title
      ?.toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
    const recipeSearched = query
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
    return recipesList.includes(recipeSearched)
  })
  return searchRecipes
}

export function timeConvert(n) {
  const num = n
  const hours = num / 60
  const rhours = Math.floor(hours)
  const minutes = (hours - rhours) * 60
  const rminutes = Math.round(minutes)
  if (rhours === 0) {
    return rminutes + 'min'
  }
  if (minutes === 0) {
    return rhours + 'h'
  } else {
    return rhours + 'h ' + rminutes + 'min'
  }
}
