
import { Card } from '../../ui/card/Card'
import { data } from '../../lib/data'

export default function Page() {
    return (
        <>
            {data.map((recipe)=>{
                return( 
                    <Card 
                        key={recipe.id}
                        id={recipe.id} 
                        title={recipe.title} 
                        time ={recipe.time} 
                        category={recipe.category} 
                        difficulty={recipe.difficulty} 
                    />)
            })} 
        </>
        )
  }