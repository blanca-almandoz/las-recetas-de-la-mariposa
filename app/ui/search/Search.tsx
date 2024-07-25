'use client'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { searchInput, searchWrapper } from './styles.css'

const Search = () => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams)
    if (term) {
      params.set('query', term)
    } else {
      params.delete('query')
    }
    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <div className={searchWrapper}>
      <input
        type="text"
        name="search"
        id="search"
        className={searchInput}
        placeholder="Buscar..."
        onChange={(e) => {
          handleSearch(e.target.value)
        }}
        defaultValue={searchParams.get('query')?.toString()}
      />
    </div>
  )
}

export { Search }
