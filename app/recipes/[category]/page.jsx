'use client'
import { Card } from '../../ui/card/Card'
import { usePathname } from 'next/navigation';
import { fetchFilteredRecipes } from '../../lib/utils'

export default function Page() {
const pathname = usePathname()
const categoryName = pathname.slice(9)

const result = fetchFilteredRecipes('category', categoryName);
    
    return (
        <>
            {result.map((recipe)=>{
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