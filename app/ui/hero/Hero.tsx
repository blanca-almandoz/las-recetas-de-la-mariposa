'use client'
import Image from 'next/image'
import { SearchIcon } from '../SVG'
import { hero, bfly, wordmark, searchBar, searchInput } from './styles.css'

const Hero = ({
  value,
  onChange,
}: {
  value: string
  onChange: (value: string) => void
}) => {
  return (
    <div className={hero}>
      <Image className={bfly} src="/logo.svg" width={52} height={52} alt="" />
      <div className={wordmark}>
        <Image
          src="/page_name.svg"
          alt="Las recetas de la mariposa"
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>
      <div className={searchBar}>
        <SearchIcon />
        <input
          type="text"
          className={searchInput}
          value={value}
          placeholder="Buscar recetas…"
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  )
}

export { Hero }
