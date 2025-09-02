import { timeConvert } from '@/lib/utils'
import { DetailsPageType, IconType } from '@/lib/types'
import { infoContent, infoWrapper, infoText } from './styles.css'
import {
  CookHat,
  Basket,
  Portions,
  Difficulty,
  TimerFilled,
  Steps,
} from '../SVG'

export const Information = ({ recipe }: DetailsPageType) => {
  const { time, difficulty, author, portions } = recipe[0]
  const formatedTime = timeConvert(time)
  const headers = [
    { icon: 'timer', label: `${formatedTime}` },
    { icon: 'portions', label: `${portions}` || '4' },
    { icon: 'difficulty', label: difficulty },
    { icon: 'hat', label: author },
  ]

  const Icons = ({ icon, level }: IconType) => {
    switch (icon) {
      case 'steps':
        return <Steps />
      case 'basket':
        return <Basket />
      case 'timer':
        return <TimerFilled />
      case 'difficulty':
        return <Difficulty level={level} />
      case 'portions':
        return <Portions />
      case 'hat':
        return <CookHat />
      default:
        break
    }
  }

  return (
    <div className={infoWrapper}>
      {headers.map((item) => (
        <div key={item.icon}>
          <div className={infoContent}>
            <div
              style={{
                width: 24,
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Icons icon={item.icon} level={difficulty} />
            </div>
            <span className={infoText}>{item.label}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
