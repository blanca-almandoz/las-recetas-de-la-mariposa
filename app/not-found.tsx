import Link from 'next/link'
import { TopLevelWrapper } from './ui/topLevelWrapper/TopLevelWrapper'

export default function NotFound() {
  return (
    <TopLevelWrapper>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: 16,
          padding: '64px 24px',
        }}
      >
        <h1 style={{ fontSize: 28, margin: 0 }}>Receta no encontrada</h1>
        <p style={{ color: '#7F818F', fontSize: 15, margin: 0, maxWidth: 420 }}>
          No hemos encontrado lo que buscabas. Puede que la receta haya cambiado
          de sitio o que el enlace no sea correcto.
        </p>
        <Link
          href="/"
          style={{
            marginTop: 8,
            textDecoration: 'underline',
            fontWeight: 600,
          }}
        >
          Volver al inicio
        </Link>
      </div>
    </TopLevelWrapper>
  )
}
