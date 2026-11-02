import { TopLevelWrapper } from '../topLevelWrapper/TopLevelWrapper'
import { recipeTitle } from '../details-page/styles.css'
import { ChevronArrowBack } from '../SVG'
import { skeletonBlock, skeletonLine } from './styles.css'

// Número aproximado de subsecciones. Las reales van de 1 a 9.
const BLOCK_COUNT = 4
const INTRO_LINE_WIDTHS = [100, 96, 80]
const BLOCK_LINE_WIDTHS = [96, 88, 92, 70]

// Igual que la página de sección: volver, título, introducción, imagen y bloques de texto
const SkeletonSectionPage = () => (
  <TopLevelWrapper>
    <div className="px-6 md:px-8 pt-8 flex items-center gap-4">
      <span style={{ display: 'flex', alignItems: 'center' }}>
        <ChevronArrowBack />
      </span>
      <div className={recipeTitle}>
        <div
          className={skeletonLine}
          style={{ width: 260, height: 32, marginBottom: 0 }}
        />
      </div>
    </div>

    <div className="px-6 md:px-8 pt-4">
      {INTRO_LINE_WIDTHS.map((width, index) => (
        <div
          key={index}
          className={skeletonLine}
          style={{ width: `${width}%`, height: 10, marginBottom: 8 }}
        />
      ))}
    </div>

    <div className="flex justify-center py-8">
      <div
        className={skeletonBlock}
        style={{ width: 400, height: 400, maxWidth: '100%' }}
      />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2">
      {Array.from({ length: BLOCK_COUNT }).map((_, index) => (
        <div
          key={index}
          className={`p-6 md:p-8 border-[#EAEAEA] border-b ${
            index % 2 === 0 ? 'md:border-r' : ''
          }`}
        >
          <div
            className={skeletonLine}
            style={{ width: 180, height: 16, marginBottom: 12 }}
          />
          {BLOCK_LINE_WIDTHS.map((width, lineIndex) => (
            <div
              key={lineIndex}
              className={skeletonLine}
              style={{ width: `${width}%`, height: 10, marginBottom: 8 }}
            />
          ))}
        </div>
      ))}
    </div>
  </TopLevelWrapper>
)

export { SkeletonSectionPage }
