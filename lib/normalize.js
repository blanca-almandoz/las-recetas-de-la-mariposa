// Normalización de valores que llegan "sucios" desde el Excel/Google Sheet.
// Se aplica al ingerir los datos (lib/sheet.js) para que el JSON generado sea
// siempre consistente. Si aparecen nuevas variantes en el Sheet, basta con
// añadirlas a los mapas de abajo.

// --- Dificultad ---------------------------------------------------------
// El componente Difficulty (app/ui/SVG.jsx) solo entiende EXACTAMENTE estos
// tres valores. Cualquier otra cosa pinta 0 iconos, así que normalizamos
// ignorando mayúsculas y tildes.
const DIFFICULTY_CANONICAL = {
  facil: 'Fácil',
  medio: 'Medio',
  dificil: 'Difícil',
}

function stripAccents(s) {
  return s.normalize('NFD').replace(/[̀-ͯ]/g, '')
}

export function normalizeDifficulty(raw) {
  const s = String(raw || '').trim()
  if (!s) return ''
  const key = stripAccents(s.toLowerCase())
  // Devuelve el canónico si lo reconoce; si no, deja el original limpio
  // (para que una variante nueva sea visible y se pueda mapear aquí).
  return DIFFICULTY_CANONICAL[key] || s
}

// --- Autor --------------------------------------------------------------
// La mayoría de autores son distintos de verdad (incluidos los compuestos
// como "Chef JC y Teresa"), así que NO los fusionamos. Solo arreglamos
// espaciado y las variantes de escritura conocidas de una misma persona.
const AUTHOR_ALIASES = {
  chefjc: 'Chef JC',
}

export function normalizeAuthor(raw) {
  const s = String(raw || '')
    .trim()
    .replace(/\s+/g, ' ')
  if (!s) return ''
  return AUTHOR_ALIASES[s.toLowerCase()] || s
}
