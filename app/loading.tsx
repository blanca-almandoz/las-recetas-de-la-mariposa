import { SkeletonCard } from './ui/skeleton/SkeletonCard'
import { TopLevelWrapper } from './ui/topLevelWrapper/TopLevelWrapper'

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
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </TopLevelWrapper>
  )
}
