import Image from 'next/image'
import { container, wrapperDesktop, wrapperMobile } from './styles.css'

const Title = () => {
  return (
    <div className={container}>
      {/* Desktop */}
      <div className={wrapperDesktop}>
        <Image
          src="/page_name.svg"
          alt="page-name"
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>
      {/* Mobile */}
      <div className={wrapperMobile}>
        <Image
          src="/page_name_mobile.svg"
          alt="page-name-mobile"
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>
    </div>
  )
}

export { Title }
