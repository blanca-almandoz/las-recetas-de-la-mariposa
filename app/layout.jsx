import '@/app/ui/global.css'
import '@/app/ui/global.css.ts'
import { Analytics } from '@vercel/analytics/react'
import { NavBar } from './ui/navbar/NavBar'
import { themeClass } from '@/theme.css'
import clsx from 'clsx'
import { montserrat } from './ui/fonts'
import { SearchProvider } from './ui/search/useSearch'
import { Footer } from './ui/footer/Footer'

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
          {/* El contenido ocupa al menos toda la pantalla, así el footer queda siempre abajo */}
          <div
            style={{
              minHeight: '100vh',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div style={{ flex: 1 }}>
              {children}
              <Analytics />
            </div>
            <Footer />
          </div>
        </SearchProvider>
      </body>
    </html>
  )
}
