import { notFound } from 'next/navigation'
import { DetailsPage } from '@/app/ui/details-page/DetailsPage'
import { fetchRecipesById } from '../../../../lib/utils'
import { TopLevelWrapper } from '@/app/ui/topLevelWrapper/TopLevelWrapper'
import recipes from '../../../../public/data/recipes.json'
import { buildRecipeJsonLd } from '@/lib/recipeJsonLd'

type RouteParams = { category: string; id: string }

export function generateStaticParams() {
  return recipes.map((r) => ({ category: r.category, id: r.id }))
}

export function generateMetadata({ params }: { params: RouteParams }) {
  const recipe = fetchRecipesById(recipes, params.id)[0]
  if (!recipe) return {}

  const description = `Receta de ${recipe.title}${
    recipe.author ? ` por ${recipe.author}` : ''
  }. Ingredientes y preparación paso a paso.`

  return {
    title: recipe.title,
    description,
    openGraph: {
      title: recipe.title,
      description,
      type: 'article',
      ...(recipe.image ? { images: [recipe.image] } : {}),
    },
  }
}

export default async function Page({ params }: { params: RouteParams }) {
  const recipe = fetchRecipesById(recipes, params.id)

  if (!recipe.length) notFound()

  const jsonLd = buildRecipeJsonLd(recipe[0])

  return (
    <TopLevelWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DetailsPage recipe={recipe} />
    </TopLevelWrapper>
  )
}
