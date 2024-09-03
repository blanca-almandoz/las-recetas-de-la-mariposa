import '@/app/ui/global.css'
import { Analytics } from '@vercel/analytics/react'
import { NavBar } from './ui/navbar/NavBar'
import { TopLevelWrapper } from './ui/topLevelWrapper/TopLevelWrapper'
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
          <TopLevelWrapper>
            {children}
            <Analytics />
          </TopLevelWrapper>
        </SearchProvider>
      </body>
    </html>
  )
}
