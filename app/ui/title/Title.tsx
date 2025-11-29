import Image from 'next/image'
import { container, wrapper } from './styles.css'

const Title = () => {
  return (
    <div className={container}>
      <div className={wrapper}>
        <Image
          src="/page_name.svg"
          alt="page-name"
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>
    </div>
  )
}

export { Title }
