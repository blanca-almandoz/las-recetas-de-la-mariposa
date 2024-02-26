import Image from "next/image"
import { string, oneOf, shape } from 'prop-types';
import { tagWrapper } from './styles.css'


const Tag = ({text}) => {
    return (
        <div className={tagWrapper} >
            {text}
        </div>
    )
}

export { Tag }

Tag.propTypes = {
    text: string.isRequired,
}

