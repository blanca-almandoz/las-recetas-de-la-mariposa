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
  navBarItemMobile,
} from './styles.css'
import { MobileMenu, SearchIcon } from '../SVG'
import { Search } from '../search/Search'
import { useSearch } from '../search/useSearch'
import { NavBarIcon } from './NavBarIcon'

const NAVBARITEMS = {
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
    setOnOpen(false)
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
              className="relative inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <MobileMenu />
            </button>
          </div>

          {/* Logo */}
          <div className={logo} onClick={() => setOnOpen(false)}>
            <Link href="/">
              <Image src="/logo.svg" width={32} height={32} alt="logo" />
            </Link>
          </div>

          {/* Menu items */}
          <div className={contentItems}>
            <div className={contentItemsLinksContainer}>
              {Object.keys(NAVBARITEMS).map((itemLink) => (
                <Link
                  key={itemLink}
                  href={`/recipes/${itemLink}`}
                  className={clsx(navbarItem, {
                    [navBarItemSelected]: pathname === `/recipes/${itemLink}`,
                  })}
                >
                  {NAVBARITEMS[itemLink]}
                </Link>
              ))}
            </div>
            <NavBarIcon
              onClick={() => {
                setOnOpenSearch(!onOpenSearch)
                setOnOpen(false)
              }}
            >
              <SearchIcon />
            </NavBarIcon>
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
          <Search initialQuery="" onClick={handleCloseSearchBar} />
        </div>
      </div>

      {/*  <!-- Mobile menu, show/hide based on menu state. --> */}
      {onOpen && (
        <div className={menuMobile} style={{ width: '100%' }}>
          <div style={{ padding: '8px 4px' }}>
            {Object.keys(NAVBARITEMS).map((itemLink) => (
              <div key={itemLink}>
                <Link
                  href={`/recipes/${itemLink}`}
                  onClick={handleClick}
                  className={clsx(navBarItemMobile, {
                    [navBarItemSelected]: pathname === `/recipes/${itemLink}`,
                  })}
                >
                  {NAVBARITEMS[itemLink]}
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export { NavBar }
