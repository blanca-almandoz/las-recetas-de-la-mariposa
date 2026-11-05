// Placeholder "blur" compartido para next/image. Como las imágenes se cargan
// por ruta (string) y no por import estático, Next no genera el blur solo, así
// que le pasamos un blurDataURL genérico: un color neutro suave. Es suficiente
// para suavizar la carga sin tener que generar un blur por cada foto.
// (base64 de un SVG 8x8 relleno de #eceae6; precalculado para no usar Buffer,
// que no existe en el bundle del cliente.)
export const BLUR_DATA_URL =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxyZWN0IHdpZHRoPSI4IiBoZWlnaHQ9IjgiIGZpbGw9IiNlY2VhZTYiLz48L3N2Zz4='
