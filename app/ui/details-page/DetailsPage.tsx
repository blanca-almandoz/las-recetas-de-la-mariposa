import { ArrowBack, CookHat, Basket, Portions, Timer, Difficulty } from '../SVG'
import Image from 'next/image'
import {
  recipeWrapper,
  recipeActions,
  recipeGoBackAction,
  recipeTitle,
  recipeContent,
  recipeContentContainer,
  recipeContentText,
  recipeContentImage,
  recipeContentTextHeaders,
  listedSteps,
  iconAndLabelWrapper,
} from './styles.css'
import { timeConvert } from '@/app/lib/utils'
import {
  DetailsPageType,
  IconType,
  IconAndLabelType,
  ListedItemsType,
} from '@/app/lib/types'
import { vars } from '@/theme.css'

const Icons = ({ icon, level }: IconType) => {
  switch (icon) {
    case 'hat':
      return <CookHat />
    case 'basket':
      return <Basket />
    case 'timer':
      return <Timer />
    case 'difficulty':
      return <Difficulty level={level} />
    case 'portions':
      return <Portions />
    default:
      break
  }
}

const IconAndLabel = ({ icon, label, level }: IconAndLabelType) => (
  <div className={iconAndLabelWrapper}>
    <Icons icon={icon} level={level} /> {label}
  </div>
)

const ListedItems = ({ icon, title, items }: ListedItemsType) => {
  return (
    <div className={listedSteps}>
      <IconAndLabel label={title} icon={icon} />
      <div style={{ marginLeft: '8px' }}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </div>
    </div>
  )
}

const DetailsPage = ({ recipe }: DetailsPageType) => {
  const { title, ingredients, steps, time, difficulty, image, category } =
    recipe[0]
  const formatedTime = timeConvert(time)
  const headers = [
    { icon: 'timer', label: formatedTime },
    { icon: 'portions', label: '4' },
    { icon: 'difficulty', label: difficulty },
  ]

  const test: any = {
    starters: vars.color.starters.light,
    main: vars.color.main.light,
    siders: vars.color.siders.light,
    desserts: vars.color.desserts.light,
  }

  const arraySteps = steps.split('\n').filter((item: any) => item.trim() !== '')
  const arrayIngredients = ingredients
    .split('\n')
    .filter((item: any) => item.trim() !== '')

  return (
    <div className={recipeWrapper} style={{ backgroundColor: test[category] }}>
      {/*  <div className={recipeActions}>
            <div><ArrowBack /></div>
            <div className={recipeGoBackAction}>Atrás</div>
        </div> */}
      <div className={recipeContent}>
        <div className={recipeTitle}>{title.toUpperCase()}</div>
        <div className={recipeContentContainer}>
          <div className={recipeContentText}>
            <div className={recipeContentTextHeaders}>
              {headers.map((item) => (
                <div key={item.icon}>
                  <IconAndLabel
                    label={item.label}
                    icon={item.icon}
                    level={difficulty}
                  />
                </div>
              ))}
            </div>
            <ListedItems
              title="Ingredientes:"
              items={arrayIngredients}
              icon="basket"
            />
          </div>
          <div className={recipeContentImage}>
            <Image
              src={image}
              width={0}
              height={0}
              sizes="100vm"
              style={{
                width: '100%',
                height: '100%',
                borderRadius: 4,
                objectFit: 'cover',
              }}
              alt={title}
            />
          </div>
        </div>
        <ListedItems title="Preparación:" items={arraySteps} icon="hat" />
      </div>
    </div>
  )
}

export { DetailsPage }
