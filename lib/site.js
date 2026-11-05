// Configuración del sitio usada por metadata, sitemap y robots.
// IMPORTANTE: define NEXT_PUBLIC_SITE_URL en tu entorno de producción
// (p. ej. en las variables de entorno de Vercel) con el dominio real, sin
// barra final. En local cae a http://localhost:3000 para no romper el build.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
).replace(/\/$/, '')

export const SITE_NAME = 'Las recetas de la mariposa'
export const SITE_DESCRIPTION =
  'Las recetas de casa: tapas, principales, postres, salsas y guarniciones, con ingredientes y preparación paso a paso.'

export function absoluteUrl(path = '') {
  return `${SITE_URL}${path.startsWith('/') ? '' : '/'}${path}`
}
