
import { Card } from '../../ui/card/Card'
import * as data from '../../lib/data.json'

export default function Principals() {
    return (
        <>
            {data.recipes.map((recipe)=>{
                return( 
                    <Card key={recipe.title} 
                        title={recipe.title} 
                        time ={recipe.time} 
                        category={recipe.category} 
                        difficulty={recipe.difficulty} 
                    />)
            })} 
        </>
        )
  }