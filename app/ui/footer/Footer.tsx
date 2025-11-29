import { footerWrapper, footerContent } from './styles.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={footerWrapper}>
      <div className={footerContent}>
        <Image src="/logo.svg" width={32} height={32} alt="logo" />
        <div
          style={{
            position: 'relative',
            height: 50,
            width: 300,
          }}
        >
          <Image
            src="/page_name.svg"
            alt="page-name"
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>
    </div>
  )
}

export { Footer }
