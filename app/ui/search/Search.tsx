'use client'
import { useEffect, useRef, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import {
  searchInput,
  searchWrapper,
  searchCloseButton,
  searchComponent,
} from './styles.css'
import { CloseIcon } from '../SVG'
import { navbarItem } from '../navbar/styles.css'
import { useSearch } from './useSearch'
import { NavBarIcon } from '../navbar/NavBarIcon'

interface SearchType {
  initialQuery: string
  onClick: () => {}
}

const Search = ({initialQuery, onClick }: SearchType) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const pathname = usePathname()
  const { replace } = useRouter()

  const [searchValue, setSearchValue] = useState(initialQuery);
  const { onOpenSearch } = useSearch();

  const handleSearch = (term: string) => {
    setSearchValue(term);

    const params = new URLSearchParams();
    if (term) {
      params.set("query", term);
      replace(`/search/?${params.toString()}`);
    } else {
      replace(pathname);
    }
  };

  const handleClickCloseButton = () => {
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
