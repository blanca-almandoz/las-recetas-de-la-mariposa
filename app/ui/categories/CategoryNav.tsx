'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { strip, inner, item, itemActive } from './styles.css'

const CATEGORIES = [
  { path: 'starters', label: 'Tapas y aperitivos' },
  { path: 'main', label: 'Principales' },
  { path: 'desserts', label: 'Postres' },
  { path: 'siders', label: 'Salsas y guarniciones' },
]

const CategoryNav = () => {
  const pathname = usePathname()

  // En la home no se muestra la tira de categorías.
  if (pathname === '/') return null

  return (
    <nav className={strip}>
      <div className={inner}>
        {CATEGORIES.map((category) => {
          const href = `/recipes/${category.path}`
          const active = pathname === href
          return (
            <Link
              key={category.path}
              href={href}
              className={active ? `${item} ${itemActive}` : item}
            >
              {category.label}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

export { CategoryNav }
