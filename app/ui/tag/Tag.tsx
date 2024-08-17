import { vars } from '@/theme.css'
import { tagWrapper } from './styles.css'
import { TagKeys, TagType } from '@/app/lib/types'

type TagInfo = {
  label: string
  color: string
}

const tagData: Record<TagKeys, TagInfo> = {
  starters: {
    color: vars.color.starters.dark,
    label: 'entrantes',
  },
  main: {
    color: vars.color.main.dark,
    label: 'principales',
  },
  siders: {
    color: vars.color.siders.dark,
    label: 'salsas',
  },
  desserts: {
    color: vars.color.desserts.dark,
    label: 'postres',
  },
}

const Tag = ({ text }: TagType) => {
  const { color, label } = tagData[text as TagKeys]
  return (
    <div className={tagWrapper} style={{ backgroundColor: color }}>
      {label}
    </div>
  )
}

export { Tag }
