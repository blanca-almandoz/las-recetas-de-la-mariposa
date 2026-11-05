import '@/app/ui/global.css'
import '@/app/ui/global.css.ts'
import { Analytics } from '@vercel/analytics/react'
import { Header } from './ui/header/Header'
import { Footer } from './ui/footer/Footer'
import { themeClass } from '@/theme.css'
import clsx from 'clsx'
import { montserrat } from './ui/fonts'
import { SearchProvider } from './ui/search/useSearch'
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from '@/lib/site'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    siteName: SITE_NAME,
    type: 'website',
    locale: 'es_ES',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
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
