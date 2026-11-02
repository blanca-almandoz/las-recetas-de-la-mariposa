'use client'

import Image from 'next/image'
import Link from 'next/link'
import { TopLevelWrapper } from '../topLevelWrapper/TopLevelWrapper'
import { stylesTitle } from '../card/styles.css'
import { grid, tile, tileImg, tileLabel } from './styles.css'

const CATEGORIES = [
  {
    path: 'starters',
    label: 'Tapas y aperitivos',
    image: '/images/recipes/crema-cabrales.webp',
  },
  { path: 'main', label: 'Principales', image: '/images/recipes/lubina.webp' },
  { path: 'desserts', label: 'Postres', image: '/images/recipes/brownie.webp' },
  {
    path: 'siders',
    label: 'Salsas y guarniciones',
    image: '/images/recipes/patatas-al-horno.webp',
  },
]

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
