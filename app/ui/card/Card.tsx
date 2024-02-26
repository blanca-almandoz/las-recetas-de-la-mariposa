import { string } from 'prop-types';
import Link from "next/link"
import { cardWrapper, cardContent, cardImage, cardInfo, cardTimer} from './styles.css'

import { Timer } from "../SVG.jsx";
import { Tag } from "../tag/Tag";


const Card = ({title, time, difficulty, category}) => {
    return (
     <>
     <Link href={{pathname:'/principales/title'}}>
        <div className={cardWrapper} onClick={()=>console.log('hola')}>
            <div className={cardImage}><Tag text = {category}/></div>
            <div className={cardContent}>
                <div >{title}</div>
                <div className={cardInfo}>
                    <div className={cardTimer}><Timer/>{time}</div>
                    <Tag text={difficulty} />
                </div>
            </div>
        </div>
     </Link>
     </>
    )
}

export { Card }

Card.propTypes = {
    title: string.isRequired,
    time: string.isRequired,
    category:string.isRequired,
    difficulty: string,
}

Card.defaultProps = {
    difficulty: 'medio'
}

