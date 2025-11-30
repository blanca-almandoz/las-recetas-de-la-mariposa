'use client'
import { useEffect, useRef, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

import { TopLevelWrapper } from '../topLevelWrapper/TopLevelWrapper'
import { searchContainer, searchInput } from './styles.css'
import { SearchIcon } from '../SVG'
import { Button } from '../button/Button'
import { useSearch } from '../search/useSearch'

const Search = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  const pathname = usePathname()
  const { replace } = useRouter()

  const [searchValue, setSearchValue] = useState('')
  const { onOpenSearch } = useSearch()

  const handleSearch = (term: string) => {
    setSearchValue(term)

    const params = new URLSearchParams()
    if (term) {
      params.set('query', term)
      replace(`/search/?${params.toString()}`)
    } else {
      replace(pathname)
    }
  }

  useEffect(() => {
    inputRef.current?.focus()
  }, [onOpenSearch])

  return (
    <TopLevelWrapper>
      <div className={searchContainer}>
        <SearchIcon />
        <input
          id="search"
          ref={inputRef}
          type="text"
          name="search"
          value={searchValue}
          className={searchInput}
          onChange={(e) => {
            handleSearch(e.target.value)
          }}
        />
        <Button>Buscar</Button>
      </div>
    </TopLevelWrapper>
  )
}

export { Search }
