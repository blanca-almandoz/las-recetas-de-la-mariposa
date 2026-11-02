import { TopLevelWrapper } from '@/app/ui/topLevelWrapper/TopLevelWrapper'
import { SkeletonCardContainer } from '@/app/ui/skeleton/SkeletonCardContainer'
import { skeletonBlock } from '@/app/ui/skeleton/styles.css'
import { Footer } from '@/app/ui/footer/Footer'

// Misma estructura que app/search/page.tsx: barra de búsqueda, resultados y pie.
// La barra aquí es un bloque de carga, para no depender del componente SearchBar.
export default function Loading() {
  return (
    <div style={{ paddingTop: 24 }}>
      <TopLevelWrapper>
        <div
          className={skeletonBlock}
          style={{ height: 48, maxWidth: 720, margin: '0 auto' }}
        />
      </TopLevelWrapper>
      <SkeletonCardContainer count={6} />
      <Footer />
    </div>
  )
}
