import { Card } from '../app/ui/card/Card'
import { getRecipesList } from '../app/lib/sheet';


export default async function Home() {
  const recipes = await getRecipesList();
  console.log('recupes', recipes)
  return (
    <> 
      {recipes.map((recipe)=> { return( 
        <Card 
          key={recipe.id}
          id={recipe.id} 
          title={recipe.title} 
          time ={recipe.time} 
          category={recipe.category} 
          difficulty={recipe.difficulty} 
        />)})}
     </>
  )
}

