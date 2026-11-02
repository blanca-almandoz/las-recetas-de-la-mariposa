import clsx from 'clsx'
import { TopLevelWrapper } from '../topLevelWrapper/TopLevelWrapper'
import { wrapperContent, horizontalScroll } from '../topLevelWrapper/styles.css'
import { stylesTitle } from '../card/styles.css'
import { skeletonLine } from './styles.css'
import { SkeletonCard } from './SkeletonCard'

interface SkeletonCardContainerProps {
  count: number
  hasTitle?: boolean
  hasHorizontalScroll?: boolean
}

// Replica la estructura de CardContainer: mismo envoltorio, título opcional y misma rejilla
const SkeletonCardContainer = ({
  count,
  hasTitle = false,
  hasHorizontalScroll = false,
}: SkeletonCardContainerProps) => (
  <TopLevelWrapper>
    {hasTitle && (
      <div className={stylesTitle}>
        <div
          className={skeletonLine}
          style={{ width: 140, height: 18, marginBottom: 0 }}
        />
      </div>
    )}
    <div
      role="status"
      aria-label="Cargando recetas"
      className={clsx(
        wrapperContent,
        hasHorizontalScroll && horizontalScroll
      )}
    >
      {Array.from({ length: count }).map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  </TopLevelWrapper>
)

export { SkeletonCardContainer }
