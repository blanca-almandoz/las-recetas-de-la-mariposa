// Fuente única de las categorías (path, etiqueta e imagen de portada).
// La usan CategoriesWrapper (UI del home) y la página de categoría
// (metadata + generateStaticParams), para que no se desincronicen.
export const CATEGORIES = [
  {
    path: 'starters',
    label: 'Tapas y aperitivos',
    image: '/images/recipes/crema-cabrales.webp',
  },
  { path: 'main', label: 'Principales', image: '/images/recipes/lubina.webp' },
  { path: 'desserts', label: 'Postres', image: '/images/recipes/brownie.webp' },
  {
    path: 'siders',
    label: 'Salsas y guarniciones',
    image: '/images/recipes/patatas-al-horno.webp',
  },
]

export const CATEGORY_LABELS = Object.fromEntries(
  CATEGORIES.map((c) => [c.path, c.label])
)
