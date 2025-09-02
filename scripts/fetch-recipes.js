import 'dotenv/config'
import fs from 'fs'
import path from 'path'
import { getRecipesList } from '../lib/sheet.js'

async function main() {
  const recipes = await getRecipesList()
  const filePath = path.join(process.cwd(), 'public', 'data', 'recipes.json')

  fs.mkdirSync(path.dirname(filePath), { recursive: true })
  fs.writeFileSync(filePath, JSON.stringify(recipes, null, 2))
  console.log('Recipes JSON generated at', filePath)
}

main()