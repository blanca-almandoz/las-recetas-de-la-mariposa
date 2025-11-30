import { button } from './styles.css'

const Button = ({ children }: any) => {
  return <button className={button}>{children}</button>
}

export { Button }
