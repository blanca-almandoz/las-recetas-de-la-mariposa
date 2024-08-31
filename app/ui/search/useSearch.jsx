'use client'
import { createContext, useContext, useState } from 'react'

const SearchContext = createContext()

export const useSearch = () => useContext(SearchContext)

export const SearchProvider = ({ children }) => {
  const [onOpenSearch, setOnOpenSearch] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  const initialValues = {
    onOpenSearch,
    setOnOpenSearch,
    searchValue,
    setSearchValue,
  }
  return (
    <SearchContext.Provider value={initialValues}>
      {children}
    </SearchContext.Provider>
  )
}
