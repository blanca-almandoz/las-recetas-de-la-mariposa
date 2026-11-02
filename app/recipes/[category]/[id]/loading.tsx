import { TopLevelWrapper } from '@/app/ui/topLevelWrapper/TopLevelWrapper'
import { SkeletonDetailsPage } from '@/app/ui/skeleton/SkeletonDetailsPage'

// Misma estructura que app/recipes/[category]/[id]/page.tsx
export default function Loading() {
  return (
    <TopLevelWrapper>
      <SkeletonDetailsPage />
    </TopLevelWrapper>
  )
}
