'use client'

import Image from 'next/image'
import Link from 'next/link'
import { TopLevelWrapper } from '../topLevelWrapper/TopLevelWrapper'
import { stylesTitle } from '../card/styles.css'
import {
  sectionsContainer,
  sectionItem,
  sectionIlustration,
  sectionTitle,
} from './styles.css'
import sections from '../../../public/data/sections.json'

const SectionsWrapper = () => {
  return (
    <TopLevelWrapper>
      <div className={stylesTitle}>Ir al supermercado</div>
      <div className={sectionsContainer}>
        {sections.map((item) => (
          <Link href={item.path} key={item.path} className={sectionItem}>
            <span className={sectionIlustration}>
              <Image src={item.image} alt={item.title} width={60} height={60} />
            </span>
            <span className={sectionTitle}>{item.title}</span>
          </Link>
        ))}
      </div>
    </TopLevelWrapper>
  )
}

export { SectionsWrapper }
