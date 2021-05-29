import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Contact from "../Contact/Contact"
import * as Styles from "./Desayunos.module.scss"
const Desayuno = ({ desayuno }) => {
  const { descripcion, nombre, precio, fotografia } = desayuno
  const imagen = getImage(fotografia[0].localFile)
  return (
    <article className={Styles.desayuno}>
      <div className={Styles.wrapperImg}>
        <GatsbyImage
          image={imagen}
          alt="fotografia desayuno"
          imgClassName={Styles.img}
          className={Styles.wrapperImg}
        />
      </div>
      <div className={Styles.wrapperInfo}>
        <p className={Styles.text}>
          Nombre: <span className={Styles.name}>{nombre}</span>
        </p>
        <p className={Styles.text}>
          <span className={Styles.desc}>{descripcion}</span>
        </p>
        <p className={Styles.text}>
          $ <span className={Styles.precio}>{precio}</span>
        </p>
      </div>
      <div className={Styles.wrapperContact}>
        <Contact
          text={`Hola buenos días, me gustaría ordernar el desayuno de ${nombre}`}
        />
      </div>
    </article>
  )
}

export default Desayuno
