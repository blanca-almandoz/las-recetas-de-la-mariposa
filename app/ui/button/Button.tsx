import { button } from './styles.css'

interface ButtonProps {
  children: React.ReactNode
}

const Button = ({ children }: ButtonProps) => {
  return <button className={button}>{children}</button>
}

export { Button }
