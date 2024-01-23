import Image from "next/image"
import { string, oneOf, shape } from 'prop-types';
import styled, { css } from 'styled-components';


const TagWrapper = styled.div` 
    display:flex;
    align-items:center;
    justify-content:center;
    background-color: #FAFAFA;
    height: 30px;
    min-width: 71px;
    border-radius: 10px;
    padding: 8px 10px;
`

const Tag = ({text}) => {
    return (
        <TagWrapper >
            {text}
        </TagWrapper>
    )
}

export { Tag }

Tag.propTypes = {
    text: string.isRequired,
}

