'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

const NavBar = () => {
  const [onOpen, setOnOpen] = useState(false)
  const pathname = usePathname()

  const handleClick = () => {
    setOnOpen(!onOpen)
  }

  return (
    <nav
      className="bg-gray-800"
      style={{ position: 'fixed', width: '100%', zIndex: 2 }}
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/*  <!-- Mobile menu button--> */}
            <button
              onClick={handleClick}
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              {/*  <!-- Icon when menu is open.
              Menu open: "block", Menu closed: "hidden" --> */}
              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Link href="/">
                <Image src="logo.svg" width={32} height={32} alt="logo" />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link
                  href="/recipes/starters"
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
          </div>
        </div>
      </div>

      {/*  <!-- Mobile menu, show/hide based on menu state. --> */}
      {onOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
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
