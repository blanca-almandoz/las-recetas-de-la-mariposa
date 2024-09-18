'use client'
import { useEffect, useRef } from 'react'
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
import { useSearch } from './useSearch'
import { NavBarIcon } from '../navbar/NavBarIcon'

interface SearchType {
  onClick: () => {}
}

const Search = ({ onClick }: SearchType) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()
  const params = new URLSearchParams(searchParams)
  const { searchValue, setSearchValue, onOpenSearch } = useSearch()

  const handleSearch = (term: string) => {
    setSearchValue(term)
    if (term) {
      params.set('query', term)
    } else {
      params.delete('query')
    }
    replace(`/search/?${params.toString()}`)
  }

  useEffect(() => {
    setSearchValue(searchParams.get('query')?.toString() || '')
  }, [])

  const handleClickCloseButton = () => {
    params.delete('query')
    setSearchValue('')
    replace(pathname)
    onClick()
  }

  useEffect(() => {
    inputRef.current?.focus()
  }, [onOpenSearch])

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
        <div className={searchCloseButton}>
          <NavBarIcon onClick={handleClickCloseButton}>
            <CloseIcon />
          </NavBarIcon>
        </div>
      </div>
    </div>
  )
}

export { Search }
