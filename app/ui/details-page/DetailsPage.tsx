'use client'
import Image from 'next/image'
import {
  recipeWrapper,
  recipeWrapperMobile,
  recipeTitle,
  recipeContentImage,
  recipeImage,
  recipeWrapperImage,
  recipeCommentImage,
  leftColumn,
  rightColumn,
  listGroups,
  groupTitle,
  bulletList,
  bulletItem,
  stepList,
  stepItem,
  stepNum,
} from './styles.css'
import { DetailsPageType, ListedItemsType } from '@/lib/types'
import { Information } from './Information'
import { useEffect, useRef, useState } from 'react'
import { DetailsPageAnimations } from '../animations/DetailsPageAnimations'
import { BLUR_DATA_URL } from '@/lib/image'

type ListVariant = 'bullets' | 'steps'

const ListedItems = ({
  items,
  variant = 'bullets',
}: ListedItemsType & { variant?: ListVariant }) => {
  return (
    <div className={listGroups}>
      {Object.entries(items).map(([title, list]) => (
        <div key={title}>
          <h3 className={groupTitle}>{title}</h3>
          {variant === 'steps' ? (
            <ol className={stepList}>
              {list.map((item, i) => (
                <li className={stepItem} key={i}>
                  <span className={stepNum}>{i + 1}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          ) : (
            <ul className={bulletList}>
              {list.map((item, i) => (
                <li className={bulletItem} key={i}>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
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
          sizes="(max-width: 887px) 100vw, 50vw"
          quality={90}
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
          className={recipeImage}
          alt={title}
        />
      </div>
      {imageComment && (
        <div className={recipeCommentImage}>{imageComment}</div>
      )}
    </div>
  )

  return (
    <>
      {/* DESKTOP */}
      <DetailsPageAnimations>
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
            <ListedItems items={steps} variant="steps" />
          </div>
        </div>
      </DetailsPageAnimations>

      {/* MOBILE */}
      <DetailsPageAnimations>
        <div className={recipeWrapperMobile}>
          <div className="px-6 md:px-8">
            <div className={recipeTitle}>{title.toUpperCase()}</div>
          </div>
          <div>
            <ImageComponent />
          </div>
          <div className="px-6 md:px-8">
            <Information recipe={recipe} />
          </div>
          <div className="px-6 md:px-8">
            <ListedItems items={ingredients} />
          </div>
          <div className="px-6 md:px-8">
            <ListedItems items={steps} variant="steps" />
          </div>
        </div>
      </DetailsPageAnimations>
    </>
  )
}

export { DetailsPage }
