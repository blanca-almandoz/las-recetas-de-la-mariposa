'use client'
import { useEffect, useRef, useState } from 'react'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import {
  searchInput,
  searchWrapper,
  searchCloseButton,
  searchComponent,
} from './styles.css'
import clsx from 'clsx'
import { CloseIcon } from '../SVG'
import { navbarItem } from '../navbar/styles.css'
import { isHomePage } from '@/app/lib/utils'
import { useSearch } from './useSearch'

interface SearchType {
  onClick: () => {}
}
const categories = 'starters' || 'main' || 'desserts' || 'siders'
const Search = ({ onClick }: SearchType) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()
  const params = new URLSearchParams(searchParams)

  const handleSearch = (term: string) => {
    setSearchValue(term)
    if (term) {
      params.set('query', term)
    } else {
      params.delete('query')
    }

    if (isHomePage(pathname, categories)) {
      replace(`/?${params.toString()}`)
    } else {
      replace(`${pathname}?${params.toString()}`)
    }
  }

  const { searchValue, setSearchValue } = useSearch()

  useEffect(() => {
    setSearchValue(searchParams.get('query')?.toString() || '')
  }, [])

  const handleClick = () => {
    params.delete('query')
    setSearchValue('')
    replace(`${pathname}?${params.toString()}`)
    onClick()
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [inputRef.current])

  return (
    <div className={searchWrapper}>
      <div className={searchComponent}>
        <input
          id="search"
          ref={inputRef}
          type="text"
          name="search"
          value={searchValue}
          className={searchInput}
          placeholder="Buscar..."
          onChange={(e) => {
            handleSearch(e.target.value)
          }}
        />
        <div
          onClick={handleClick}
          className={clsx(searchCloseButton, navbarItem)}
        >
          <CloseIcon />
        </div>
      </div>
    </div>
  )
}

export { Search }
