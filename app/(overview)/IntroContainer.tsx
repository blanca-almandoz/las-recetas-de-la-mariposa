import Image from 'next/image'
import {
  header,
  headerImage,
  headerText,
  headerMobile,
  contentMobile,
} from './styles.css'

const introText = () => (
  <>
    En nuestra casa siempre hemos disfrutado de la buena comida y muchos amigos
    han compartido con nosotros grandes momentos alrededor de la mesa.
    <br />
    A menudo hemos hablado de recopilar nuestras recetas más comunes, y ahora,
    con la familia repartida en distintas direcciones, creamos esta página para
    tener un recetario compartido.
    <br />
    <br />
    Aquí encontrarás desde platos muy básicos hasta otros más elaborados, según
    lo que apetezca.
    <br />
    Aunque hay miles de libros y páginas web con recetas excelentes, éstas son
    las nuestras, las que nos mantienen saludables y nos llenan de alegría cada
    vez que nos sentamos a comer.
    <br />
    <br />
    ¡A disfrutar!
  </>
)

const IntroContainer = () => {
  return (
    <>
      {/* DESKTOP DESIGN */}
      <div className={header}>
        <div className={headerImage}>
          <Image
            src="/images/kitchen-desktop.png"
            alt="kitchen"
            fill={true}
            sizes="100vw"
            style={{ objectFit: 'cover' }}
            quality={100}
          />
        </div>

        <div className={headerText}>
          <Image
            src="/logo-complete.svg"
            alt="logo-complete"
            height={68}
            width={300}
          />
          <div>{introText()}</div>
        </div>
      </div>
      {/* MOBILE DESIGN */}
      <div className={headerMobile}>
        <div className={contentMobile}>
          <div>
            <div style={{ position: 'absolute', zIndex: 1 }}>
              <Image
                src="/logo-complete.svg"
                alt="logo-complete"
                height={52}
                width={236}
              />
            </div>
            <div style={{ position: 'relative', top: 0 }}>
              <Image
                src="/images/kitchen-mobile.png"
                alt="kitchen"
                height={226}
                width={226}
                quality={100}
              />
            </div>
          </div>
          <div>{introText()}</div>
        </div>
      </div>
    </>
  )
}

export { IntroContainer }
