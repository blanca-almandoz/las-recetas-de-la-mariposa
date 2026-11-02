import clsx from 'clsx'
import {
  cardWrapper,
  cardContent,
  cardImage,
  cardInfo,
  cardTimer,
  cardTitle,
} from '../card/styles.css'
import { skeletonBlock, skeletonLine } from './styles.css'

// Usa las mismas clases que Card, así ocupa exactamente el mismo espacio
const SkeletonCard = () => (
  <div className={clsx(cardWrapper, 'animate-pulse')} aria-hidden="true">
    <div className={cardImage}>
      <div
        className={skeletonBlock}
        style={{ height: '100%', borderRadius: '4px 4px 0 0' }}
      />
    </div>
    <div className={cardContent}>
      <div className={cardTitle}>
        <div
          className={skeletonLine}
          style={{ width: '75%', height: 14, marginTop: 2 }}
        />
      </div>
      <div className={cardInfo}>
        <div className={cardTimer}>
          <div className={skeletonBlock} style={{ width: 16, height: 16 }} />
          <div
            className={skeletonLine}
            style={{ width: 48, height: 12, marginBottom: 0 }}
          />
        </div>
        <div className={skeletonBlock} style={{ width: 56, height: 16 }} />
      </div>
    </div>
  </div>
)

export { SkeletonCard }
