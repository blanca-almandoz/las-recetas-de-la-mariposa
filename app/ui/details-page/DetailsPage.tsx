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
import { DetailsPageType, ListedItemsType } from '@/lib/types'
import { Information } from './Information'
import { useEffect, useRef, useState } from 'react'

const ListedItems = ({ items }: ListedItemsType) => {
  return (
    <>
      {Object.entries(items).map(([title, list]) => (
        <div key={title}>
          <span style={{ fontWeight: 700 }}>{title}</span>
          <ul
            style={{
              listStyleType: 'circle',
              listStylePosition: 'inside',
              paddingLeft: 0,
              margin: 0,
            }}
          >
            {list.map((item, i) => (
              <li style={{ listStyleType: 'circle', margin: 0 }} key={i}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  )
}

const DetailsPage = ({ recipe }: DetailsPageType) => {
  const { title, ingredients, steps, image, imageComment } = recipe[0]

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
            <ListedItems items={ingredients} />
            <Information recipe={recipe} />
          </div>
        </div>
        <div className={rightColumn} ref={rightColumnRef}>
          <ImageComponent />
          <ListedItems items={steps} />
        </div>
      </div>

      {/* MOBILE */}
      <div className={recipeWrapperMobile}>
        <div className={recipeTitle}>{title.toUpperCase()}</div>
        <div>
          <ImageComponent />
          <Information recipe={recipe} />
        </div>
        <ListedItems items={ingredients} />
        <ListedItems items={steps} />
      </div>
    </>
  )
}

export { DetailsPage }
