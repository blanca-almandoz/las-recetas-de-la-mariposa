import { tagWrapper } from './styles.css'
import { Tag } from '@/app/lib/types';


const Tag = ({text}: Tag) => {
    return (
        <div className={tagWrapper} >
            {text}
        </div>
    )
}

export { Tag }

