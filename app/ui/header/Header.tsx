'use client'
import { useRef, useState } from 'react'
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
  clearButton,
  wordmarkHiddenOnMobile,
} from './styles.css'

const CATEGORIES = [
  { path: 'starters', label: 'Tapas y aperitivos' },
  { path: 'main', label: 'Principales' },
  { path: 'desserts', label: 'Postres' },
  { path: 'siders', label: 'Salsas y guarniciones' },
]

const Header = () => {
  const [value, setValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()
  const pathname = usePathname()

  const handleChange = (term: string) => {
    setValue(term)
    router.replace(term ? `/search?query=${encodeURIComponent(term)}` : '/')
  }

  const clearSearch = () => {
    handleChange('')
    inputRef.current?.focus()
  }

  return (
    <header className={bar}>
      <Link href="/" className={brand} aria-label="Inicio">
        <Image className={bfly} src="/logo.svg" width={40} height={40} alt="" />
        <span
          className={
            pathname === '/' ? wordmark : `${wordmark} ${wordmarkHiddenOnMobile}`
          }
        >
          <Image
            src="/page_name.svg"
            alt="Las recetas de la mariposa"
            fill
            style={{ objectFit: 'contain' }}
          />
        </span>
      </Link>

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

      <div className={searchBar}>
        <SearchIcon />
        <input
          ref={inputRef}
          type="text"
          className={searchInput}
          value={value}
          placeholder="Buscar recetas…"
          onChange={(e) => handleChange(e.target.value)}
        />
        {value && (
          <button
            type="button"
            className={clearButton}
            onClick={clearSearch}
            aria-label="Borrar búsqueda"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
              <path
                d="M1 1l10 10M11 1L1 11"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>
        )}
      </div>
    </header>
  )
}

export { Header }
