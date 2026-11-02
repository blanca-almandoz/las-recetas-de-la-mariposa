'use client'
import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { TopLevelWrapper } from '../ui/topLevelWrapper/TopLevelWrapper'
import { ChevronArrowBack } from '../ui/SVG'
import sections from '../../public/data/sections.json'
import { MARKERS, type Point } from './markers'
import { parseContent, deriveChips, derivePrice } from './content'
import * as s from './styles.css'

export default function Page({ params }: { params: { section: string } }) {
  const router = useRouter()
  const [hot, setHot] = useState<number | null>(null)
  const section = sections.find((sec) => sec.path === params.section)

  if (!section) return null

  const markers: Record<string, Point> = MARKERS[section.path] || {}
  let counter = 0
  const cuts = section.sections.map((item) => {
    const pos = markers[item.header]
    const num = pos ? ++counter : null
    return {
      ...item,
      pos,
      num,
      parsed: parseContent(item.content),
      chips: deriveChips(item.content),
      price: derivePrice(item.content),
    }
  })

  const scrollToCut = (num: number) => {
    const el = document.getElementById(`cut-${num}`)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    setHot(num)
    setTimeout(() => setHot((h) => (h === num ? null : h)), 1200)
  }

  return (
    <TopLevelWrapper>
      <div className={s.header}>
        <button
          onClick={() => router.back()}
          className={s.backBtn}
          aria-label="Volver"
        >
          <ChevronArrowBack />
        </button>
        <h1 className={s.title}>{section.title}</h1>
      </div>

      <div className={s.stage}>
        <div className={s.figure}>
          <div className={s.figureImg}>
            <div className={s.figureCanvas}>
              <Image
                src={section.image}
                alt={section.title}
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            {cuts
              .filter((c) => c.pos)
              .map((c) => (
                <button
                  key={c.num}
                  className={`${s.marker} ${hot === c.num ? s.markerHot : ''}`}
                  style={{ left: `${c.pos![0]}%`, top: `${c.pos![1]}%` }}
                  onMouseEnter={() => setHot(c.num)}
                  onMouseLeave={() => setHot(null)}
                  onClick={() => scrollToCut(c.num!)}
                  aria-label={c.header}
                >
                  {c.num}
                </button>
              ))}
          </div>
          <p className={s.figureHint}>
            Pasa el ratón o toca un corte o un número para ver de dónde sale.
          </p>
        </div>

        <div className={s.content}>
          <p className={s.intro}>{section.introduction}</p>

          <div className={s.cuts}>
            {cuts.map((c, index) => (
              <article
                key={index}
                id={c.num ? `cut-${c.num}` : undefined}
                className={`${s.cut} ${hot !== null && hot === c.num ? s.cutHot : ''}`}
                onMouseEnter={() => c.num && setHot(c.num)}
                onMouseLeave={() => c.num && setHot(null)}
              >
                <header className={s.cutHead}>
                  <span className={`${s.badge} ${c.num ? '' : s.badgeNone}`}>
                    {c.num ?? '•'}
                  </span>
                  <h3 className={s.cutTitle}>{c.header}</h3>
                </header>

                {(c.price || c.chips.length > 0) && (
                  <div className={s.chips}>
                    {c.price && (
                      <span className={`${s.chip} ${s.chipPrice}`}>{c.price}</span>
                    )}
                    {c.chips.map((ch) => (
                      <span key={ch} className={s.chip}>
                        {ch}
                      </span>
                    ))}
                  </div>
                )}

                {c.parsed.lead && <p className={s.lead}>{c.parsed.lead}</p>}

                {c.parsed.bullets.length > 0 && (
                  <ul className={s.bullets}>
                    {c.parsed.bullets.map((b, bi) => (
                      <li key={bi} className={s.bulletItem}>
                        {b.name && <strong>{b.name}: </strong>}
                        {b.text}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </TopLevelWrapper>
  )
}
