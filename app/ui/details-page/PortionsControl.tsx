import { PORTION_OPTIONS } from '@/lib/scaleIngredient'
import { optionButton, optionGroup, portionsControl, portionsLabel } from './PortionsControl.css'

type PortionsControlProps = {
  value: number
  onChange: (value: number) => void
}

export const PortionsControl = ({ value, onChange }: PortionsControlProps) => {
  return (
    <div className={portionsControl} role="radiogroup" aria-label="Número de comensales">
      <span className={portionsLabel}>Comensales</span>
      <div className={optionGroup}>
        {PORTION_OPTIONS.map((option) => (
          <button
            key={option}
            type="button"
            role="radio"
            aria-checked={value === option}
            className={optionButton}
            onClick={() => onChange(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}
