'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { SearchIcon } from '../SVG'
import {
  bar,
  brand,
  bfly,
  wordmark,
  catNav,
  catItem,
  catItemActive,
  searchBar,
  searchInput,
} from './styles.css'

const CATEGORIES = [
  { path: 'starters', label: 'Tapas y aperitivos' },
  { path: 'main', label: 'Principales' },
  { path: 'desserts', label: 'Postres' },
  { path: 'siders', label: 'Salsas y guarniciones' },
]

const Header = () => {
  const [value, setValue] = useState('')
  const router = useRouter()
  const pathname = usePathname()

  const showCategories = pathname !== '/'

  const handleChange = (term: string) => {
    setValue(term)
    router.replace(term ? `/search?query=${encodeURIComponent(term)}` : '/')
  }

  return (
    <header className={bar}>
      <Link href="/" className={brand} aria-label="Inicio">
        <Image className={bfly} src="/logo.svg" width={40} height={40} alt="" />
        <span className={wordmark}>
          <Image
            src="/page_name.svg"
            alt="Las recetas de la mariposa"
            fill
            style={{ objectFit: 'contain' }}
          />
        </span>
      </Link>

      {showCategories && (
        <nav className={catNav}>
          {CATEGORIES.map((category) => {
            const href = `/recipes/${category.path}`
            const active = pathname === href
            return (
              <Link
                key={category.path}
                href={href}
                className={active ? `${catItem} ${catItemActive}` : catItem}
              >
                {category.label}
              </Link>
            )
          })}
        </nav>
      )}

      <div className={searchBar}>
        <SearchIcon />
        <input
          type="text"
          className={searchInput}
          value={value}
          placeholder="Buscar recetas…"
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
    </header>
  )
}

export { Header }
