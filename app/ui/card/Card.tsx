
import { string } from 'prop-types';
import Link from "next/link"
import Image from 'next/image';
import { cardWrapper, cardContent, cardImage, cardInfo, cardTimer, cardTag} from './styles.css'

import { Timer } from "../SVG.jsx";
import { Tag } from "../tag/Tag";

interface Card {
    id: string,
    title: string,
    time: string,
    image: string,
    difficulty: string,
    category: string
}

const Card = ({id, title, time, image, difficulty='medio', category}: Card) => {

    return (
     <Link href={{pathname: `${category}/${id}`}}>
        <div className={cardWrapper}>
            <div className={cardImage}>
                <div className={cardTag}><Tag text = {category}/></div>
                <Image 
                    src={image} 
                    width={0}
                    height={0}
                    sizes='100vm'
                    style={{width: '100%', height:'100%', borderRadius: '4px 4px 0px 0px', objectFit: "cover"}}
                    alt={title}/>
            </div>
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
