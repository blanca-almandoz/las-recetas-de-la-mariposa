
import { Card } from "../../src/components/card/Card";
import { NavBar } from "../../src/components/navBar";
import * as data from '../../data.json'
import { TopLevelWrapper } from "../../src/components/TolLevelWrapper";

export default function Principals () {
    return (
    <>
    <NavBar />
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
    </>
    )
}