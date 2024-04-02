export function fetchRecipesById(recipes, id) {
  return recipes.filter((recipe) => recipe.id === id);
}

export function fetchRecipesByCategory(recipes, category) {
  const json = recipes.filter((recipe) => recipe.category === category);
  const res = json.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });
  return res;
}
