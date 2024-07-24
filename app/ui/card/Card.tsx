
import Link from "next/link"
import Image from 'next/image';
import { cardWrapper, cardContent, cardImage, cardInfo, cardTimer, cardTag, cardTitle} from './styles.css'

import { Difficulty, Timer } from "../SVG.jsx";
import { Tag } from "../tag/Tag";
import { timeConvert } from '@/app/lib/utils';
import { CardType } from '@/app/lib/types';


const Card = ({id, title, time, image, difficulty='medio', category, pathname}: CardType) => {

    return (
     <Link href={{pathname: pathname}}>
        <div className={cardWrapper}>
            <div className={cardImage}>
               {/*  <div className={cardTag}><Tag text = {category}/></div> */}
                <Image 
                    src={image} 
                    width={0}
                    height={0}
                    sizes='100vm'
                    style={{width: '100%', height:'100%', borderRadius: '4px 4px 0px 0px', objectFit: "cover"}}
                    alt={title}/>
            </div>
            <div className={cardContent}>
                <div className={cardTitle} >{title.toUpperCase()}</div>
                <div className={cardInfo}>
                    <div className={cardTimer}><Timer/>{timeConvert(time)}</div>
                    <Difficulty level={difficulty} />
                </div>
            </div>
        </div>
     </Link>
    )
}

export { Card }
