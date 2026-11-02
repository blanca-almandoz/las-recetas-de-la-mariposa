import '@/app/ui/global.css'
import '@/app/ui/global.css.ts'
import { Analytics } from '@vercel/analytics/react'
import { Header } from './ui/header/Header'
import { Footer } from './ui/footer/Footer'
import { themeClass } from '@/theme.css'
import clsx from 'clsx'
import { montserrat } from './ui/fonts'
import { SearchProvider } from './ui/search/useSearch'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={clsx(themeClass, montserrat.className)}
        style={{
          overflowX: 'hidden',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <SearchProvider>
          <Header />
          <div style={{ flex: 1, width: '100%' }}>
            {children}
            <Analytics />
          </div>
          <Footer />
        </SearchProvider>
      </body>
    </html>
  )
}
