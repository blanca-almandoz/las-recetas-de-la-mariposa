import { SkeletonCardContainer } from '@/app/ui/skeleton/SkeletonCardContainer'
import { Footer } from '@/app/ui/footer/Footer'

// Misma estructura que app/recipes/[category]/page.tsx
export default function Loading() {
  return (
    <>
      <div style={{ paddingTop: 24, padding: 8 }}>
        <SkeletonCardContainer count={6} />
      </div>
      <Footer />
    </>
  )
}
