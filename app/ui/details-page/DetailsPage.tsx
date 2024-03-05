"use client"
import { ArrowBack, CookHat, Basket, Portions, Timer, Difficulty} from '../SVG'
import { recipeWrapper, 
         recipeActions, 
         recipeTitle, 
         recipeContent, 
         recipeContentContainer,
         recipeContentText,
         recipeContentImage,
         recipeContentTextHeaders,
         listedSteps,
         iconAndLabelWrapper
        } from './styles.css'


interface Icon {
    icon: string
}

interface IconAndLabel extends Icon {
    label: any
}

interface ListedItems extends Icon {
    title: string,
    items: Array<string>
}

interface DetailsPage {
    recipe: any
}

const Icons = ({icon}: Icon) => {
    switch (icon) {
        case 'hat':
            return <CookHat/>;
        case 'basket':
            return <Basket />;
        case 'timer': 
            return <Timer />;
        case 'difficulty':
            return <Difficulty />;
        case 'portions':
            return <Portions />
        default:
            break;
    }
}

const IconAndLabel = ({icon, label}: IconAndLabel) => (
    <div className={iconAndLabelWrapper}> <Icons icon={icon} /> {label}</div>
)

const ListedItems = ({icon, title, items}: ListedItems) => {
    return ( 
    <div className={listedSteps}> 
        <IconAndLabel label={title} icon={icon} />
        <div style={{marginLeft:'8px'}}>{items.map((item)=> <li key={item}>{item}</li>)}</div>
    </div>)
}

const DetailsPage = ({recipe}: DetailsPage) => { 
    const { title, ingredients, steps, time, difficulty } = recipe[0]
    const headers = [
        {icon: 'timer', label: time},
        {icon: 'portions', label: '4'},
        {icon: 'difficulty', label: difficulty}
    ]
    return (
        <div className={recipeWrapper}>
        <div className={recipeActions}>
            <div><ArrowBack /></div>
            <div className={recipeTitle}>Atrás</div>
        </div>
        <div className={recipeContent}>
            <div style={{fontSize:'28px'}}>{title}</div>
            <div className={recipeContentContainer}> 
                <div className={recipeContentText}>
                    <div className={recipeContentTextHeaders}>
                        {headers.map((item)=>(
                            <IconAndLabel key={item.icon} label={item.label} icon={item.icon}/>
                        ))}
                    </div>
                    <ListedItems title='Ingredientes:' items={ingredients} icon='basket' />
                </div>
                <div className={recipeContentImage}/>
            </div>
            <ListedItems title='Preparación:' items={steps} icon='hat' />
        </div>
        </div>
    )
}

export { DetailsPage }