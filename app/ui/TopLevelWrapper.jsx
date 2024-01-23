"use client";

import styled from 'styled-components';

const WrapperStyled = styled.div`
    display:flex;
    width: 100%;
    justify-content: center;
`
const WrapperContent = styled.div`
    display:flex;
    justify-content: center;
    width:1280px;
    flex-wrap: wrap;
`

const TopLevelWrapper = ({children}) => {
    return (
        <WrapperStyled >
            <WrapperContent>
            {children}
            </WrapperContent>
        </WrapperStyled>
    )
}

export { TopLevelWrapper }



