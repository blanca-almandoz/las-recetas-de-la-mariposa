import { vars } from '@/theme.css'
import { wrapper } from './styles.css'

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
        <div className={wrapper} style={{ width: 250 }}></div>
        <div className={wrapper} style={{ width: 190 }}></div>
        <div className={wrapper} style={{ width: 100 }}></div>
        <div className={wrapper} style={{ width: 200 }}></div>
      </div>
    </div>
  )
}

export { SkeletonCard }
