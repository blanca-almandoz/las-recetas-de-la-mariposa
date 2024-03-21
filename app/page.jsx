
import Image from "next/image"
import { container } from "./styles.css"

export default async function Home() {
  return (
    <div className={container}> 
      <p>Buscador de recetas en proceso </p>
      <p>Abre el menú para empezar a disfrutar de las recetas</p>
     </div>
  )
}

