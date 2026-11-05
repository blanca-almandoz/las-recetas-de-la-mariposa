import recipes from '../../public/data/recipes.json'
import { searchRecipes } from '@/lib/utils'
import { Card } from '../ui/card/Card'
import { TopLevelWrapper } from '../ui/topLevelWrapper/TopLevelWrapper'
import { wrapperContent } from '../ui/topLevelWrapper/styles.css'
import { stylesTitle } from '../ui/card/styles.css'
import { Recipe } from '@/lib/types'

export const metadata = {
  title: 'Buscar',
}

export default function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string
  }
}) {
  const query = searchParams?.query || ''
  const results: Recipe[] = query ? searchRecipes(query, recipes) : []

  return (
    <TopLevelWrapper>
      <div className={stylesTitle}>Resultados</div>
      <p
        style={{
          color: '#7F818F',
          fontSize: 14,
          margin: '0 0 24px',
        }}
      >
        {query
          ? `${results.length} ${
              results.length === 1 ? 'receta' : 'recetas'
            } para “${query}”`
          : 'Escribe en el buscador para encontrar una receta.'}
      </p>
      <div className={wrapperContent}>
        {results.map((recipe: Recipe) => (
          <Card
            key={recipe.id}
            id={recipe.id}
            title={recipe.title}
            time={recipe.time}
            image={recipe.image}
            category={recipe.category}
            difficulty={recipe.difficulty}
            pathname={`recipes/${recipe.category}/${recipe.id}`}
          />
        ))}
      </div>
    </TopLevelWrapper>
  )
}
