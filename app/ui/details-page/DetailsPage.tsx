'use client'
import Image from 'next/image'
import {
  recipeWrapper,
  recipeWrapperMobile,
  recipeTitle,
  recipeContentImage,
  recipeImage,
  listedSteps,
  recipeWrapperImage,
  leftColumn,
  rightColumn,
  recipeCommentImage,
} from './styles.css'
import { DetailsPageType, ListedItemsType } from '@/app/lib/types'
import { Information } from './Information'
import { useEffect, useRef, useState } from 'react'

const ListedItems = ({ title, items }: ListedItemsType) => {
  return (
    <div className={listedSteps}>
      <span style={{ fontWeight: 700 }}>{title}</span>
      <div style={{ marginLeft: '8px' }}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </div>
    </div>
  )
}

const DetailsPage = ({ recipe }: DetailsPageType) => {
  const { title, ingredients, steps, image, imageComment } = recipe[0]

  const arraySteps = steps.split('\n').filter((item: any) => item.trim() !== '')
  const arrayIngredients = ingredients
    .split('\n')
    .filter((item: any) => item.trim() !== '')

  const rightColumnRef = useRef<HTMLDivElement | null>(null)
  const [isRightColumnTallerThan100vh, setIsRightColumnTallerThan100vh] =
    useState(false)

  useEffect(() => {
    if (rightColumnRef.current) {
      const rightColumnHeight = rightColumnRef.current.offsetHeight
      const viewportHeight = window.innerHeight
      setIsRightColumnTallerThan100vh(rightColumnHeight > viewportHeight)
    }
  }, [])

  const ImageComponent = () => (
    <div className={recipeWrapperImage}>
      <div className={recipeContentImage}>
        <Image
          src={image || '/images/default.svg'}
          width={0}
          height={0}
          sizes="100vm"
          className={recipeImage}
          alt={title}
        />
      </div>
      <div className={recipeCommentImage}>{imageComment}</div>
    </div>
  )

  return (
    <>
      {/* DESKTOP */}
      <div className={recipeWrapper}>
        <div className={leftColumn}>
          <div className={recipeTitle}>{title.toUpperCase()}</div>
          <div
            style={{
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: isRightColumnTallerThan100vh
                ? 'flex-start'
                : 'space-between',
              gap: 24,
            }}
          >
            <ListedItems title="Ingredientes:" items={arrayIngredients} />
            <Information recipe={recipe} />
          </div>
        </div>
        <div className={rightColumn} ref={rightColumnRef}>
          <ImageComponent />
          <ListedItems title="Preparación:" items={arraySteps} />
        </div>
      </div>

      {/* MOBILE */}
      <div className={recipeWrapperMobile}>
        <div className={recipeTitle}>{title.toUpperCase()}</div>
        <div>
          <ImageComponent />
          <Information recipe={recipe} />
        </div>
        <ListedItems title="Ingredientes:" items={arrayIngredients} />
        <ListedItems title="Preparación:" items={arraySteps} />
      </div>
    </>
  )
}

export { DetailsPage }
