import { Search } from './ui/search/Search'
import { Card } from './ui/card/Card'
import { getRecipesList } from './lib/sheet'

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const recipes = await getRecipesList();
  const cleanRecipes = recipes.filter((item)=>item.title !== 'Nombre')
  const query = searchParams?.query || '';
  const searchedRecipes = cleanRecipes.filter((recipe)=>recipe.title?.toLowerCase().includes(query)) 

  return (
    <div style={{width:'100%'}}> 
      <Search />
       <div style={{width:'100%', display:'flex', flexWrap: 'wrap', justifyContent:'space-between'}}> {searchedRecipes.map((recipe)=>{
            return( 
              <div>
              <Card 
                    key={recipe.id}
                    id={recipe.id} 
                    title={recipe.title} 
                    time ={recipe.time} 
                    image={recipe.image}
                    category={recipe.category} 
                    difficulty={recipe.difficulty} 
                    pathname={`recipes/${recipe.category}/${recipe.id}`} 
                />
                </div>
                )
        })}</div>
    </div>
  )
}

