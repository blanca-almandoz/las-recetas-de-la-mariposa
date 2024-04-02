
import { TopLevelWrapper } from '@/app/lib/types'
import { wrapperStyled, wrapperContent } from './styles.css'


const TopLevelWrapper = ({children}: TopLevelWrapper) => {
    return (
        <div className={wrapperStyled} >
            <div className={wrapperContent}>
            {children}
            </div>
        </div>
    )
}

export { TopLevelWrapper }



