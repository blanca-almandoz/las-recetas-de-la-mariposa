import { SkeletonCardContainer } from '@/app/ui/skeleton/SkeletonCardContainer'

// Misma estructura que app/recipes/[category]/page.tsx
export default function Loading() {
  return (
    <>
      <div style={{ paddingTop: 24, padding: 8 }}>
        <SkeletonCardContainer count={6} />
      </div>
    </>
  )
}
