import { timeConvert } from '@/lib/utils'
import { DetailsPageType, IconKey, IconType } from '@/lib/types'
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
    const iconMap: Record<IconKey, JSX.Element> = {
      steps: <Steps />,
      basket: <Basket />,
      timer: <TimerFilled />,
      difficulty: <Difficulty level={level} />,
      portions: <Portions />,
      hat: <CookHat />,
    }
    return iconMap[icon]
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
              <Icons icon={item.icon as IconKey} level={difficulty} />
            </div>
            <span className={infoText}>{item.label}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
