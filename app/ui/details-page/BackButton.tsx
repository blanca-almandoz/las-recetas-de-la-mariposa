'use client'
import { useRouter } from 'next/navigation'
import { backButton } from './BackButton.css'

type BackButtonProps = {
  /** Adónde ir si no hay página anterior en el historial (por ejemplo, si se abrió el enlace directo). */
  fallbackHref: string
}

export const BackButton = ({ fallbackHref }: BackButtonProps) => {
  const router = useRouter()

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back()
    } else {
      router.push(fallbackHref)
    }
  }

  return (
    <button
      type="button"
      className={backButton}
      onClick={handleBack}
      aria-label="Atrás"
    >
      <svg
        width="22"
        height="18"
        viewBox="0 0 16 14"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M15 7H2M7 1L1 7l6 6"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}
