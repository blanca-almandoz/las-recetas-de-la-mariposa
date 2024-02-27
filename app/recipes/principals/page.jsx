
import { Card } from '../../ui/card/Card'
import { data } from '../../lib/data'

export default function Principals() {
    return (
        <>
            {data.map((recipe)=>{
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