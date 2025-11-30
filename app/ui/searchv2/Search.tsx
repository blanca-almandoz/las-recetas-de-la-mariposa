import { useEffect, useRef, useState } from 'react'

import { TopLevelWrapper } from '../topLevelWrapper/TopLevelWrapper'
import { searchContainer, searchInput } from './styles.css'
import { SearchIcon } from '../SVG'
import { Button } from '../button/Button'

const Search = () => {
  return (
    <TopLevelWrapper>
      <div className={searchContainer}>
        <SearchIcon />
        <input
          id="search"
          type="text"
          name="search"
          value=""
          className={searchInput}
        />
        <Button>Buscar</Button>
      </div>
    </TopLevelWrapper>
  )
}

export { Search }
