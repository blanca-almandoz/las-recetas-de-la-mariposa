import { tagWrapper } from './styles.css'
import { TagType } from '@/app/lib/types';


const Tag = ({text}: TagType) => {
    return (
        <div className={tagWrapper} >
            {text}
        </div>
    )
}

export { Tag }

