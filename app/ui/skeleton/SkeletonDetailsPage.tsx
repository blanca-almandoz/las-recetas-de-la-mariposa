import {
  recipeWrapper,
  recipeWrapperMobile,
  recipeTitle,
  recipeWrapperImage,
  recipeContentImage,
  recipeCommentImage,
  leftColumn,
  rightColumn,
  infoWrapper,
  infoContent,
} from '../details-page/styles.css'
import { skeletonBlock, skeletonLine } from './styles.css'

const LINE_WIDTHS = [92, 80, 96, 70, 88]

// Grupos de ingredientes o pasos: cada grupo tiene un título y varias líneas
const ListSkeleton = ({ groups }: { groups: number[] }) => (
  <>
    {groups.map((lines, groupIndex) => (
      <div key={groupIndex}>
        <div
          className={skeletonLine}
          style={{ width: 120, height: 12, marginBottom: 8 }}
        />
        {Array.from({ length: lines }).map((_, lineIndex) => (
          <div
            key={lineIndex}
            className={skeletonLine}
            style={{
              width: `${LINE_WIDTHS[lineIndex % LINE_WIDTHS.length]}%`,
              height: 10,
              marginBottom: 8,
            }}
          />
        ))}
      </div>
    ))}
  </>
)

// Igual que Information: cuatro datos con icono (tiempo, raciones, dificultad y autor)
const InfoSkeleton = () => (
  <div className={infoWrapper}>
    {Array.from({ length: 4 }).map((_, index) => (
      <div key={index}>
        <div className={infoContent}>
          <div style={{ width: 24, display: 'flex', justifyContent: 'center' }}>
            <div
              className={skeletonBlock}
              style={{ width: 20, height: 20, borderRadius: '50%' }}
            />
          </div>
          <div
            className={skeletonLine}
            style={{ width: 70, height: 12, marginBottom: 0 }}
          />
        </div>
      </div>
    ))}
  </div>
)

const ImageSkeleton = () => (
  <div className={recipeWrapperImage}>
    <div className={recipeContentImage}>
      <div className={skeletonBlock} style={{ height: '100%', borderRadius: 4 }} />
    </div>
    <div className={recipeCommentImage}>
      <div
        className={skeletonLine}
        style={{ width: '60%', height: 10, margin: '8px 16px', marginBottom: 0 }}
      />
    </div>
  </div>
)

// Escritorio: izquierda con título, ingredientes e información; derecha con imagen y pasos
const DesktopLayout = () => (
  <div className={recipeWrapper}>
    <div className={leftColumn}>
      <div className={recipeTitle}>
        <div
          className={skeletonLine}
          style={{ width: '70%', height: 32, marginBottom: 0 }}
        />
      </div>
      <div
        style={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: 24,
        }}
      >
        <ListSkeleton groups={[6]} />
        <InfoSkeleton />
      </div>
    </div>
    <div className={rightColumn}>
      <ImageSkeleton />
      <ListSkeleton groups={[4, 5]} />
    </div>
  </div>
)

// Móvil: título, imagen, información, ingredientes y pasos, uno debajo de otro
const MobileLayout = () => (
  <div className={recipeWrapperMobile}>
    <div className="px-6 md:px-8">
      <div className={recipeTitle}>
        <div
          className={skeletonLine}
          style={{ width: '70%', height: 24, marginBottom: 0 }}
        />
      </div>
    </div>
    <div>
      <ImageSkeleton />
      <InfoSkeleton />
    </div>
    <div style={{ paddingLeft: 8 }}>
      <ListSkeleton groups={[6]} />
    </div>
    <div style={{ paddingLeft: 8 }}>
      <ListSkeleton groups={[4, 5]} />
    </div>
  </div>
)

// Skeleton de la página de receta, con la misma estructura que DetailsPage
const SkeletonDetailsPage = () => (
  <>
    <DesktopLayout />
    <MobileLayout />
  </>
)

export { SkeletonDetailsPage }
