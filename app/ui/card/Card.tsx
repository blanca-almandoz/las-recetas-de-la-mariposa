
import { string } from 'prop-types';
import Link from "next/link"
import { cardWrapper, cardContent, cardImage, cardInfo, cardTimer} from './styles.css'

import { Timer } from "../SVG.jsx";
import { Tag } from "../tag/Tag";

interface Card {
    id: string,
    title: string,
    time: string,
    difficulty: string,
    category: string
}

const Card = ({id, title, time, difficulty, category}: Card) => {

    return (
     <Link href={{pathname: `${category}/${id}`}}>
        <div className={cardWrapper}>
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

