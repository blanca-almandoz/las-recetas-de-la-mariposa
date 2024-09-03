'use client'
import {
  ArrowBack,
  CookHat,
  Basket,
  Portions,
  Timer,
  Difficulty,
  TimerFilled,
  Steps,
} from '../SVG'
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
  recipeImage,
  listedSteps,
  iconAndLabelWrapper,
  recipeTitleList,
  recipeWrapperImage,
} from './styles.css'
import { timeConvert } from '@/app/lib/utils'
import {
  DetailsPageType,
  IconType,
  IconAndLabelType,
  ListedItemsType,
} from '@/app/lib/types'
import { vars } from '@/theme.css'
import { useSearch } from '../search/useSearch'
import { useEffect } from 'react'

const Icons = ({ icon, level }: IconType) => {
  switch (icon) {
    case 'steps':
      return <Steps />
    case 'basket':
      return <Basket />
    case 'timer':
      return <TimerFilled />
    case 'difficulty':
      return <Difficulty level={level} />
    case 'portions':
      return <Portions />
    case 'hat':
      return <CookHat />
    default:
      break
  }
}

const IconAndLabel = ({ icon, label, level }: IconAndLabelType) => (
  <div className={iconAndLabelWrapper}>
    <Icons icon={icon} level={level} />
    <span style={{ fontWeight: 500 }}>{label}</span>
  </div>
)

const ListedItems = ({ icon, title, items }: ListedItemsType) => {
  return (
    <div className={listedSteps}>
      <div className={recipeTitleList}>
        <div>
          <Icons icon={icon} />
        </div>

        <span style={{ fontWeight: 500 }}>{title}</span>
      </div>
      <div style={{ marginLeft: '8px' }}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </div>
    </div>
  )
}

const DetailsPage = ({ recipe }: DetailsPageType) => {
  const {
    title,
    ingredients,
    steps,
    time,
    difficulty,
    image,
    category,
    author,
    portions,
    imageComment,
  } = recipe[0]

  const formatedTime = timeConvert(time)
  const headers = [
    { icon: 'timer', label: formatedTime },
    { icon: 'portions', label: portions || '4' },
    { icon: 'difficulty', label: difficulty },
    { icon: 'hat', label: author },
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

  const { setOnOpenSearch, setSearchValue } = useSearch()

  useEffect(() => {
    setOnOpenSearch(false)
    setSearchValue('')
  }, [])

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
              title="Ingredientes"
              items={arrayIngredients}
              icon="basket"
            />
          </div>
          <div className={recipeWrapperImage}>
            <div className={recipeContentImage}>
              <Image
                src={image}
                width={0}
                height={0}
                sizes="100vm"
                className={recipeImage}
                alt={title}
              />
            </div>
            <div>{imageComment}</div>
          </div>
        </div>
        <ListedItems title="Preparación" items={arraySteps} icon="steps" />
      </div>
    </div>
  )
}

export { DetailsPage }
