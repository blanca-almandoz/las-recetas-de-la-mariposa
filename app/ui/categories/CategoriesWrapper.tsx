'use client'

import Image from 'next/image'
import Link from 'next/link'
import { TopLevelWrapper } from '../topLevelWrapper/TopLevelWrapper'
import { stylesTitle } from '../card/styles.css'
import { grid, tile, tileImg, tileLabel } from './styles.css'
import { CATEGORIES } from '@/lib/categories'
import { BLUR_DATA_URL } from '@/lib/image'

const CategoriesWrapper = () => {
  return (
    <TopLevelWrapper>
      <div className={stylesTitle}>Categorías</div>
      <div className={grid}>
        {CATEGORIES.map((category) => (
          <Link
            href={`/recipes/${category.path}`}
            key={category.path}
            className={tile}
          >
            <span className={tileImg}>
              <Image
                src={category.image}
                alt={category.label}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
                style={{ objectFit: 'cover' }}
              />
            </span>
            <span className={tileLabel}>{category.label}</span>
          </Link>
        ))}
      </div>
    </TopLevelWrapper>
  )
}

export { CategoriesWrapper }
