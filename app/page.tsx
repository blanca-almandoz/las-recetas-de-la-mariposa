import Image from "next/image"
import { Search } from './ui/Search'
import { Card } from './ui/card/Card'
import { container } from "./styles.css"
import { fetchRecipesByName } from "./lib/utils";
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
  const query = searchParams?.query || '';
  //const test = fetchRecipesByName(recipes, query)
  const test = recipes.filter((recipe)=>recipe.title?.toLowerCase().includes(query)) 
  console.log('test', test)
  return (
    <div > 
      <Search />
       <>{test.map((recipe)=>{
            return( 
                <Card 
                    key={recipe.id}
                    id={recipe.id} 
                    title={recipe.title} 
                    time ={recipe.time} 
                    
                    category={recipe.category} 
                    difficulty={recipe.difficulty} 
                />)
        })} </>
    </div>
  )
}

