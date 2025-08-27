import { google } from 'googleapis'

function parseSections(text = '', defaultSection) {
  const sections = {}
  let currentText = defaultSection
  sections[currentText] = []

  text.split('\n').forEach((linea) => {
    const clean = linea.trim()
    if (!clean) return

    if (clean.startsWith('[') && clean.endsWith(']')) {
      currentText = clean.slice(1, -1)
      sections[currentText] = []
    } else {
      sections[currentText].push(clean)
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

    const rows = response.data.values

    if (rows.length) {
      return rows
        .map((row) => {
          return {
            id: row[0],
            title: row[1],
            steps: parseSections(row[2], 'Preparación'),
            ingredients: parseSections(row[3], 'Ingredientes'),
            difficulty: row[4],
            category: row[5],
            time: row[6],
            portions: row[7],
            image: row[10],
            date: row[11],
            author: row[12],
            imageComment: row[13],
          }
        })
        .filter((item) => item.title !== 'Nombre')
        .filter((item) => item.image !== undefined)
    }
  } catch (err) {
    console.log(err)
  }
  return []
}
