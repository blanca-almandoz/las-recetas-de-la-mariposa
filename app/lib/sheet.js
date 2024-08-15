import { google } from 'googleapis'

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
        .map((row) => ({
          id: row[0],
          title: row[1],
          steps: row[2],
          ingredients: row[3],
          difficulty: row[4],
          category: row[5],
          time: row[6],
          portions: row[7],
          image: row[10],
          date: row[11],
        }))
        .filter((item) => item.title !== 'Nombre')
        .filter((item) => item.image !== undefined)
    }
  } catch (err) {
    console.log(err)
  }
  return []
}
