import { google } from 'googleapis';


export async function getRecipesList() {
  try {
    const target = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
    const jwt = new google.auth.JWT(
      process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      null,
      (process.env.GOOGLE_SHEETS_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
      target
    );

    const sheets = google.sheets({ version: 'v4', auth: jwt });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: 'recipes',
    });

    const rows = response.data.values;
    if (rows.length) {
      return rows.map((row) => ({
        title: row[0],
        steps: row[1],
        ingredients: row[2],
        difficulty: row[3],
        category: row[4],
        time: row[5],
        portions: row[6],
        image: row[9]
      }));
    }
  } catch (err) {
    console.log(err);
  }
  return [];
}