import Image from "next/image"
import { string, oneOf, shape } from 'prop-types';

import { CardWrapper, CardContent, CardImage, CardTitle, CardInfo, CardTimer } from "./styles"
import { Timer } from "../SVG";
import { Tag } from "../Tag";

const Card = ({title, time, difficulty, category}) => {
    return (
        <CardWrapper >
            <CardImage><Tag text = {category}/></CardImage>
            <CardContent>
                <CardTitle>{title}</CardTitle>
                <CardInfo>
                    <CardTimer><Timer/>{time}</CardTimer>
                    <Tag text={difficulty} />
                </CardInfo>
            </CardContent>
        </CardWrapper>
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

