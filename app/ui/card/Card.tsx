import Link from 'next/link'
import Image from 'next/image'
import {
  cardWrapper,
  cardContent,
  cardImage,
  cardInfo,
  cardTimer,
  cardTitle,
  cardDifficulty,
  cardDot,
} from './styles.css'

import { timeConvert } from '@/lib/utils'
import { CardType } from '@/lib/types'
import { BLUR_DATA_URL } from '@/lib/image'

const Card = ({
  title,
  time,
  image,
  difficulty = 'Medio',
  pathname,
}: CardType) => {
  return (
    <Link href={{ pathname: pathname }}>
      <div className={cardWrapper}>
        <div className={cardImage}>
          <Image
            src={image || '/images/default.svg'}
            width={0}
            height={0}
            sizes="(max-width: 639px) 100vw, 400px"
            quality={90}
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 14,
              objectFit: 'cover',
            }}
            alt={title}
          />
        </div>
        <div className={cardContent}>
          <div className={cardTitle}>{title.toUpperCase()}</div>
          <div className={cardInfo}>
            <div className={cardTimer}>
              {timeConvert(time)}
            </div>
            <span className={cardDot} aria-hidden="true" />
            <span className={cardDifficulty}>{difficulty}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export { Card }
