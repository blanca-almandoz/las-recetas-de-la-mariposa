import { vars } from '@/theme.css'
import { wrapper } from './styles.css'

const LINES = 4
const WEIGHT = [250, 190, 100, 200]

const SkeletonCard = () => {
  return (
    <div
      role="status"
      className="animate-pulse"
      style={{
        borderRadius: 4,
        width: 387,
        boxShadow: '8px 8px 90px 1px #A6A6A6',
        marginBottom: 16,
      }}
    >
      <div
        style={{
          height: 200,
          borderTopRightRadius: 4,
          borderTopLeftRadius: 4,
          backgroundColor: vars.color.utility[300],
        }}
      ></div>
      <div style={{ padding: '24px 16px' }}>
        {Array.from({ length: LINES }).map((_, index) => (
          <div
            key={index}
            className={wrapper}
            style={{ width: WEIGHT[index] }}
          ></div>
        ))}
      </div>
    </div>
  )
}

export { SkeletonCard }
