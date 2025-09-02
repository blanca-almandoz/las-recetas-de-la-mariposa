import { TopLevelWrapperType } from '@/lib/types'
import { wrapperStyled, wrapperContent } from './styles.css'

const TopLevelWrapper = ({ children }: TopLevelWrapperType) => {
  return (
    <div className={wrapperStyled}>
      <div className={wrapperContent}>{children}</div>
    </div>
  )
}

export { TopLevelWrapper }
