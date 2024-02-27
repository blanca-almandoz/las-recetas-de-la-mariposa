import { ReactNode } from 'react';
import { wrapperStyled, wrapperContent } from './styles.css'

interface TopLevelWrapper {
    children: ReactNode;
}

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



