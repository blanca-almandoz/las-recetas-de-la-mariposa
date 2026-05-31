'use client'

import { stylesTitle } from '../card/styles.css'
import { TopLevelWrapper } from '../topLevelWrapper/TopLevelWrapper'
import Image from 'next/image'
import {
  sectionTitle,
  sectionItem,
  sectionIlustration,
  sectionsContainer,
} from './styles.css'
import Link from 'next/link'
import sections from '../../../public/data/sections.json'

const SectionsWrapper = () => {
  return (
    <TopLevelWrapper>
      <div className={stylesTitle}>Ir al supermercado</div>
      <div className={sectionsContainer}>
        <div style={{ display: 'flex', gap: 32 }}>
          {sections.map((item) => (
            <Link href={item.path} key={item.path}>
              <div className={sectionItem}>
                <div className={sectionIlustration}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={60}
                    height={60}
                  />
                </div>
                <p className={sectionTitle}>{item.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </TopLevelWrapper>
  )
}

export { SectionsWrapper }
