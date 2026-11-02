import '@/app/ui/global.css'
import '@/app/ui/global.css.ts'
import { Analytics } from '@vercel/analytics/react'
import { NavBar } from './ui/navbar/NavBar'
import { themeClass } from '@/theme.css'
import clsx from 'clsx'
import { montserrat } from './ui/fonts'
import { SearchProvider } from './ui/search/useSearch'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={clsx(themeClass, montserrat.className)}
        style={{ overflowX: 'hidden' }}
      >
        <SearchProvider>
          <div>
            <NavBar />
          </div>
          <div>
            {children}
            <Analytics />
          </div>
        </SearchProvider>
      </body>
    </html>
  )
}
