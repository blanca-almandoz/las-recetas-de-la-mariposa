import { SkeletonCard } from '@/app/ui/skeleton/SkeletonCard'
import { TopLevelWrapper } from '@/app/ui/topLevelWrapper/TopLevelWrapper'

const SKELETON_COUNT = 6

export default function Loading() {
  return (
    <TopLevelWrapper>
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 16,
          marginTop: 8,
          padding: 16,
        }}
      >
        {Array.from({ length: SKELETON_COUNT }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    </TopLevelWrapper>
  )
}
