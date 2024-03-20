import { ArrowBack, CookHat, Basket, Portions, Timer, Difficulty} from '../SVG'
import Image from 'next/image';

import { recipeWrapper, 
         recipeActions, 
         recipeGoBackAction,
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
    const { title, ingredients, steps, time, difficulty, image } = recipe[0]
    const headers = [
        {icon: 'timer', label: time},
        {icon: 'portions', label: '4'},
        {icon: 'difficulty', label: difficulty}
    ]

    const arraySteps = steps.split('\n').filter((item: any) => item.trim() !== '');
    const arrayIngredients = ingredients.split('\n').filter((item: any) => item.trim() !== '');

    return (
        <div className={recipeWrapper}>
       {/*  <div className={recipeActions}>
            <div><ArrowBack /></div>
            <div className={recipeGoBackAction}>Atrás</div>
        </div> */}
        <div className={recipeContent}>
            <div className={recipeTitle}>{title}</div>
            <div className={recipeContentContainer}> 
                <div className={recipeContentText}>
                    <div className={recipeContentTextHeaders}>
                        {headers.map((item)=>(
                            <IconAndLabel key={item.icon} label={item.label} icon={item.icon}/>
                        ))}
                    </div>
                    <ListedItems title='Ingredientes:' items={arrayIngredients} icon='basket' />
                </div>
                <div className={recipeContentImage}> 
                {/* <Image 
                    src={image} 
                    width={0}
                    height={0}
                    sizes='100vm'
                    style={{width: '100%', height:'100%', borderRadius: 4, objectFit: "cover"}}
                    alt={title}/> */}
                </div>
            </div>
            <ListedItems title='Preparación:' items={arraySteps} icon='hat' />
        </div>
        </div>
    )
}

export { DetailsPage }