"use client"
import { ArrowBack, CookHat, Basket, Portions, Timer, Difficulty} from '../SVG'
import { RecipeWrapper, 
         RecipeTitle, 
         RecipeActions, 
         RecipeContent, 
         ListedSteps, 
         ListedStepsTitle, 
         RecipeContentContainer,
         RecipeContentText,
         RecipeContentImage,
         IconAndLabelWrapper,
         RecipeContentTextHeaders
        } from './styles'

const steps = ['Picar la cebolla y los pimientos ', 'A rehogar en una sartén',
'Mientras se hace, hervir los 2 huevos duros', 'Cuando el sofrito esté hecho, añadir en la sartén los 2 huecos bien picados, las 3 latas de atún (escurrir aceite) y tomate frito. Remover.',
'Probarlo.', 'Todo lo de la sartén ponerlo en un colador para escurrir el líquido',
'Papel mirando abajo de la masa de abajo y extender. Poner la Segunda masa encima y quitar papel. Cerrar hacia arriba los bordes y pinchar con un tenedor varías veces por el centro',
'Del huevo, Separar clara de la yema. Nos interesa la yema. Ponerla en un cuenco y remover con los dedos. Poner con los dedos a modo pincel.',
'Horno (mirar paquete) creo que 180-200grafos 20 minutos. Lo que ponga en el paquete. Modo ventilador.']

const ingredientes = [
    '2 Pasta buitoni de hojaldre rectangular',
    '1 huevo para pintarlo',
    '2 cebollas',
    '2 pimientos verdes',
    '1/2 pimiento rojo',
    '2 huevos para cocerlos',
    '3 latas de atún',
    'Tomate frito'
];

const headers = [
    {icon: 'timer', label: '1h'},
    {icon: 'portions', label: '4'},
    {icon: 'difficulty', label: 'easy'}
]

const Icons = ({icon}: any) => {
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

const IconAndLabel = ({icon, label}: any) => (
    <IconAndLabelWrapper> <Icons icon={icon} /> {label}</IconAndLabelWrapper>
)

const ListedItems = ({icon, title, items}: any) => {
    return ( 
    <ListedSteps> 
        <IconAndLabel label={title} icon={icon} />
        <div style={{marginLeft:'8px'}}>{items.map((item: any)=> <li key={item}>{item}</li>)}</div>
    </ListedSteps>)
}

const DetailsPage = () => { 
    return (
        <RecipeWrapper>
        <RecipeActions>
            <div><ArrowBack /></div>
            <RecipeTitle>Atrás</RecipeTitle>
        </RecipeActions>
        <RecipeContent>
            <div style={{fontSize:'28px'}}>Empanada de atún</div>
            <RecipeContentContainer> 
                <RecipeContentText>
                    <RecipeContentTextHeaders>
                        {headers.map((item)=>(
                            <IconAndLabel key={item.label} label={item.label} icon={item.icon}/>
                        ))}
                    </RecipeContentTextHeaders>
                    <ListedItems title='Ingredientes:' items={ingredientes} icon='basket' />
                </RecipeContentText>
                <RecipeContentImage/>
            </RecipeContentContainer>
            <ListedItems title='Preparación:' items={steps} icon='hat' />
        </RecipeContent>
        </RecipeWrapper>
    )
}

export { DetailsPage }