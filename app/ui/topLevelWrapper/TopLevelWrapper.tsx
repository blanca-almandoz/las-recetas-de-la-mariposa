import { TopLevelWrapperType } from '@/lib/types'
import { wrapperStyled } from './styles.css'

const TopLevelWrapper = ({ children }: TopLevelWrapperType) => {
  return <div className={wrapperStyled}>{children}</div>
}

export { TopLevelWrapper }
