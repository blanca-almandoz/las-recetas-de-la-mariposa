import { navBarIcon } from './styles.css'

interface NavBarIconType {
  onClick: () => void
  children: React.ReactNode
}

const NavBarIcon = ({ onClick, children }: NavBarIconType) => {
  return (
    <div className={navBarIcon} onClick={onClick}>
      {children}
    </div>
  )
}

export { NavBarIcon }
