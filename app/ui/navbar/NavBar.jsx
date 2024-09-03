'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import {
  wrapper,
  container,
  content,
  contentItemsLinksContainer,
  contentItems,
  navbarItem,
  navBarItemSelected,
  logo,
  menuMobile,
} from './styles.css'
import { MobileMenu, SearchIcon } from '../SVG'
import { Search } from '../search/Search'
import { useSearch } from '../search/useSearch'

const navbarItems = {
  starters: 'Tapas y aperitivos',
  main: 'Principales',
  desserts: 'Postres',
  siders: 'Salsas y guarniciones',
}

const NavBar = () => {
  const [onOpen, setOnOpen] = useState(false)
  const pathname = usePathname()
  const { onOpenSearch, setOnOpenSearch } = useSearch()

  const handleClick = () => {
    setOnOpen(!onOpen)
  }

  const handleCloseSearchBar = () => {
    setOnOpenSearch(!onOpenSearch)
  }

  return (
    <nav className={wrapper}>
      <div className={container}>
        <div
          className={content}
          style={{ display: onOpenSearch ? 'none' : 'flex' }}
        >
          <div className={menuMobile}>
            {/*  <!-- Mobile menu button--> */}
            <button
              onClick={handleClick}
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <MobileMenu />
            </button>
          </div>
          <div className={logo}>
            <Link href="/">
              <Image src="logo.svg" width={32} height={32} alt="logo" />
            </Link>
          </div>

          {/* Menu items */}
          <div className={contentItems}>
            <div className={contentItemsLinksContainer}>
              {Object.keys(navbarItems).map((itemLink) => (
                <Link
                  href={`/recipes/${itemLink}`}
                  className={clsx(navbarItem, {
                    [navBarItemSelected]: pathname === `/recipes/${itemLink}`,
                  })}
                >
                  {navbarItems[itemLink]}
                </Link>
              ))}
            </div>
            <div
              onClick={() => setOnOpenSearch(!onOpenSearch)}
              style={{ padding: 8, cursor: 'pointer' }}
              className={navbarItem}
            >
              <SearchIcon />
            </div>
          </div>
        </div>
        {/* Search bar */}
        <div
          style={{
            display: onOpenSearch ? 'flex' : 'none',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <Search onClick={handleCloseSearchBar} />
        </div>
      </div>

      {/*  <!-- Mobile menu, show/hide based on menu state. --> */}
      {onOpen && (
        <div className={menuMobile} style={{ width: '100%' }}>
          <div style={{ padding: '8px 4px' }}>
            <Link
              href="/recipes/starters"
              onClick={handleClick}
              className={clsx(
                'text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium',
                {
                  'bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium':
                    pathname === '/recipes/starters',
                }
              )}
            >
              Tapas y aperitivos
            </Link>
            <Link
              href="/recipes/main"
              onClick={handleClick}
              className={clsx(
                'text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium',
                {
                  'bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium':
                    pathname === '/recipes/main',
                }
              )}
            >
              Principales
            </Link>
            <Link
              href="/recipes/desserts"
              onClick={handleClick}
              className={clsx(
                'text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium',
                {
                  'bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium':
                    pathname === '/recipes/desserts',
                }
              )}
            >
              Postres
            </Link>
            <Link
              href="/recipes/siders"
              onClick={handleClick}
              className={clsx(
                'text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium',
                {
                  'bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium':
                    pathname === '/recipes/siders',
                }
              )}
            >
              Salsas y guarniciones
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export { NavBar }
