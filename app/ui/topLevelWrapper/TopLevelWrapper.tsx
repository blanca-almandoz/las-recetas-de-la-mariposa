import { wrapperStyled, wrapperContent } from './styles.css'

const TopLevelWrapper = ({children}) => {
    return (
        <div className={wrapperStyled} >
            <div className={wrapperContent}>
            {children}
            </div>
        </div>
    )
}

export { TopLevelWrapper }



