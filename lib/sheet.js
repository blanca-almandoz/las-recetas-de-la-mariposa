import { google } from 'googleapis'

export function parseSections(text = '', defaultSection = 'General'){
  const sections = {}
  let currentBlock = defaultSection
  sections[currentBlock] = []

  const lines = String(text).split(/\r?\n/)

  lines.forEach((line) => {
    const clean = (line || '').trim()

    if (!clean) return

    if(clean.startsWith('[') && clean.endsWith(']')) {
      currentBlock = clean.slice(1, -1)
      if (!sections[currentBlock]) sections[currentBlock] = []
    } else {
      sections[currentBlock].push(clean)
    }
  })

  return sections
}

export async function getRecipesList() {
  try {
    const target = ['https://www.googleapis.com/auth/spreadsheets.readonly']
    const jwt = new google.auth.JWT(
      process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      null,
      (process.env.GOOGLE_SHEETS_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
      target
    )

    const sheets = google.sheets({ version: 'v4', auth: jwt })
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: 'recipes',
    })

    const rows = response.data.values || []
    if (!rows.length) return []

    const [header, ...data] = rows

    return data.map((row) => {
      const id = row[0] || ''
      const title = row[1] || ''
      const rawSteps = row[2] || ''
      const rawIngredients = row[3] || ''
      const difficulty = row[4] || ''
      const category = row[5] || ''
      const time = row[6] || ''
      const portions = row[7] || ''
      const image = row[10] || ''
      const date = row[11] || ''
      const author = row[12] || ''
      const imageComment = row[13] || ''

      const steps = parseSections(rawSteps, 'Preparación')
      const ingredients = parseSections(rawIngredients, 'Ingredientes')

      return {
        id,
        title,
        steps,
        ingredients,
        difficulty,
        category,
        time,
        portions,
        image,
        date,
        author,
        imageComment,
      }
    })
  } catch (err) {
    console.error('Sheets error:', err)
    return []
  }
}
