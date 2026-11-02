// Helpers para presentar el contenido de sections.json de forma más legible.
// No modifican el texto original: solo lo separan en lead + viñetas y extraen
// "chips" (métodos de cocción) y el precio aproximado si aparece.

export interface Bullet {
  name?: string
  text: string
}

export interface ParsedContent {
  lead: string
  bullets: Bullet[]
}

export function parseContent(raw: string): ParsedContent {
  const text = (raw || '').replace(/\r/g, '')
  const parts = text.split(/\n\s*•\s*/)
  let lead = (parts[0] || '').trim()
  let rawBullets = parts.slice(1).map((p) => p.trim()).filter(Boolean)

  // Caso en el que el contenido empieza directamente por una viñeta.
  if (lead.startsWith('•')) {
    rawBullets = [lead.replace(/^•\s*/, '').trim(), ...rawBullets]
    lead = ''
  }

  const bullets: Bullet[] = rawBullets.map((b) => {
    const m = b.match(/^([^:]{1,40}):\s*([\s\S]+)$/)
    if (m) return { name: m[1].trim(), text: m[2].trim() }
    return { text: b }
  })

  return { lead, bullets }
}

const CHIP_RULES: Array<[RegExp, string]> = [
  [/plancha/i, 'A la plancha'],
  [/parrilla/i, 'Parrilla'],
  [/horno/i, 'Al horno'],
  [/freidora/i, 'Freidora de aire'],
  [/adoba/i, 'Adobado'],
  [/medallones/i, 'Medallones'],
]

export function deriveChips(raw: string): string[] {
  const t = raw || ''
  const chips: string[] = []
  for (const [re, label] of CHIP_RULES) {
    if (re.test(t) && !chips.includes(label)) chips.push(label)
  }
  if (/guiso|estofad|cuchara|cocci[oó]n lenta|cocciones largas|caldo/i.test(t)) {
    if (!chips.includes('Guiso')) chips.push('Guiso')
  }
  if (/frito|fritas|fre[ií]r/i.test(t) && !chips.includes('Freidora de aire')) {
    if (!chips.includes('Frito')) chips.push('Frito')
  }
  return chips.slice(0, 4)
}

export function derivePrice(raw: string): string | null {
  const m = (raw || '').match(/(\d+\s*[–-]\s*\d+\s*€\/kg|\d+\s*€\/kg)/)
  return m ? m[1].replace(/\s+/g, '') : null
}
