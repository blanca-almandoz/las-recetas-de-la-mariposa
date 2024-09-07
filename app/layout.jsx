import '@/app/ui/global.css'
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
        className={clsx(themeClass, `${montserrat.className} antialiased`)}
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
