import { vars } from '@/theme.css'
import { tagWrapper } from './styles.css'
import { TagType } from '@/app/lib/types'

const Tag = ({ text }: TagType) => {
  const test: any = {
    starters: vars.color.starters.dark,
    main: vars.color.main.dark,
    siders: vars.color.siders.dark,
    desserts: vars.color.desserts.dark,
  }
  return (
    <div className={tagWrapper} style={{ backgroundColor: test[text] }}>
      {text}
    </div>
  )
}

export { Tag }
