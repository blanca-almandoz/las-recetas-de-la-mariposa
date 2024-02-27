import { string } from 'prop-types';
import { tagWrapper } from './styles.css'

interface Tag {
    text: string
}

const Tag = ({text}: Tag) => {
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

