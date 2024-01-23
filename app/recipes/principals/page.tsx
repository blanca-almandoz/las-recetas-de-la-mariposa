
import { Card } from '../../ui/card/Card'
import { TopLevelWrapper } from '../../ui/TopLevelWrapper'
import * as data from '../../lib/data.json'

export default function Principals() {
    return (
        <TopLevelWrapper>
            {data.recipes.map((recipe)=>{
                return( 
                    <Card key={recipe.title} 
                        title={recipe.title} 
                        time ={recipe.time} 
                        category={recipe.category} 
                        difficulty={recipe.difficulty} 
                    />)
            })} 
        </TopLevelWrapper>
        )
  }