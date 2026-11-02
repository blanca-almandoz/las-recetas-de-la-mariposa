import { TopLevelWrapper } from '../topLevelWrapper/TopLevelWrapper'
import { container, wrapperDesktop, wrapperMobile } from '../title/styles.css'
import {
  sectionsContainer,
  sectionItem,
  sectionIlustration,
  sectionTitle,
} from '../sections/styles.css'
import { stylesTitle } from '../card/styles.css'
import {
  header,
  headerImage,
  headerText,
  headerMobile,
  contentMobile,
} from '../../(overview)/styles.css'
import { SkeletonCardContainer } from './SkeletonCardContainer'
import { skeletonBlock, skeletonLine } from './styles.css'

// Número de elementos reales de la portada
const SECTIONS_COUNT = 5
const NOVEDADES_COUNT = 8
const INTRO_DESKTOP_LINES = [100, 96, 100, 92, 98, 100, 88, 100, 94, 97, 100, 60]
const INTRO_MOBILE_LINES = [100, 95, 98, 90, 96, 100, 70]

const SkeletonTitle = () => (
  <div className={container}>
    <div className={wrapperDesktop}>
      <div
        className={skeletonBlock}
        style={{ width: 360, height: 56, margin: '72px auto 0' }}
      />
    </div>
    <div className={wrapperMobile}>
      <div
        className={skeletonBlock}
        style={{ width: 160, height: 32, margin: '34px auto 0' }}
      />
    </div>
  </div>
)

// Igual que SectionsWrapper: título y círculos con su etiqueta
const SkeletonSections = () => (
  <TopLevelWrapper>
    <div className={stylesTitle}>
      <div
        className={skeletonLine}
        style={{ width: 200, height: 18, marginBottom: 0 }}
      />
    </div>
    <div className={sectionsContainer}>
      <div style={{ display: 'flex', gap: 32 }}>
        {Array.from({ length: SECTIONS_COUNT }).map((_, index) => (
          <div key={index} className={sectionItem}>
            <div className={sectionIlustration}>
              <div
                className={skeletonBlock}
                style={{ width: 60, height: 60, borderRadius: '50%' }}
              />
            </div>
            <p className={sectionTitle}>
              <span
                className={skeletonLine}
                style={{
                  display: 'block',
                  width: 60,
                  height: 10,
                  margin: '0 auto',
                  marginBottom: 0,
                }}
              />
            </p>
          </div>
        ))}
      </div>
    </div>
  </TopLevelWrapper>
)

// Igual que IntroContainer: versión de escritorio y de móvil
const SkeletonIntro = () => (
  <>
    <div className={header}>
      <div className={headerImage}>
        <div
          className={skeletonBlock}
          style={{ height: '100%', minHeight: 360, borderRadius: 0 }}
        />
      </div>
      <div className={headerText}>
        {INTRO_DESKTOP_LINES.map((width, index) => (
          <div
            key={index}
            className={skeletonLine}
            style={{ width: `${width}%`, height: 10, marginBottom: 12 }}
          />
        ))}
      </div>
    </div>
    <div className={headerMobile}>
      <div className={contentMobile}>
        <div
          className={skeletonBlock}
          style={{ width: 226, height: 226, borderRadius: 4 }}
        />
        <div style={{ width: '100%' }}>
          {INTRO_MOBILE_LINES.map((width, index) => (
            <div
              key={index}
              className={skeletonLine}
              style={{ width: `${width}%`, height: 10, marginBottom: 10 }}
            />
          ))}
        </div>
      </div>
    </div>
  </>
)

// Skeleton de la portada, con la misma estructura que app/page.tsx
const SkeletonHome = () => (
  <>
    <SkeletonTitle />
    <SkeletonSections />
    <SkeletonCardContainer
      count={NOVEDADES_COUNT}
      hasTitle
      hasHorizontalScroll
    />
    <SkeletonIntro />
  </>
)

export { SkeletonHome }
