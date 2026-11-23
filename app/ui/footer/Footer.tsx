import Image from 'next/image'
import Link from 'next/link'
import {
  footerWrapper,
  footerContent,
  footerTop,
  brandCol,
  brandRow,
  brandWordmark,
  brandText,
  navRow,
  navCol,
  navTitle,
  navLink,
  bottomRow,
} from './styles.css'

interface FooterProps {
  hasMargin?: boolean
}

const Footer = ({ hasMargin = true }: FooterProps) => {
  return (
    <footer
      className={footerWrapper}
      style={{ marginTop: hasMargin ? 20 : 1 }}
    >
      <div className={footerContent}>
        <div className={footerTop}>
          <div className={brandCol}>
            <div className={brandRow}>
              <Image src="/logo.svg" width={40} height={40} alt="" />
              <Image
                src="/page_name.svg"
                width={340}
                height={21}
                className={brandWordmark}
                alt="Las recetas de la mariposa"
              />
            </div>
            <p className={brandText}>
              Un recetario compartido de nuestra familia, con los platos que
              hacemos en casa.
            </p>
          </div>

          <nav className={navRow}>
            <div className={navCol}>
              <span className={navTitle}>Explora</span>
              <Link href="/" className={navLink}>
                Inicio
              </Link>
              <Link href="/" className={navLink}>
                Categorías
              </Link>
              <Link href="/" className={navLink}>
                Novedades
              </Link>
              <Link href="/search" className={navLink}>
                Buscar
              </Link>
            </div>
            <div className={navCol}>
              <span className={navTitle}>La mariposa</span>
              <Link href="/#nuestra-historia" className={navLink}>
                Nuestra historia
              </Link>
            </div>
          </nav>
        </div>

        <div className={bottomRow}>
          <span>© 2026 Las recetas de la mariposa</span>
          <span>Hecho con cariño en casa</span>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
