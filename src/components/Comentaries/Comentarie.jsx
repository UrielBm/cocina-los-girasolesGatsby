import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as Styles from "./Comentaries.module.scss"
const Comentarie = ({ comentario }) => {
  const { nombre, calificacion } = comentario
  const imagen = getImage(comentario.imagen[0].localFile)
  return (
    <article className={Styles.wrapperCard}>
      <div className={Styles.wrapperImg}>
        <GatsbyImage
          image={imagen}
          alt="Avatar"
          imgClassName={Styles.img}
          className={Styles.wrapperImg}
        />
      </div>
      <div className={Styles.description}>
        <p className={Styles.name}>{nombre}</p>
        <p className={Styles.calif}>{calificacion} estrellas</p>
        <p className={Styles.comentario}>
          <span className={Styles.comillas}>&#8220;</span>
          {comentario.comentario}
          <span className={Styles.comillas}>&#8221;</span>
        </p>
      </div>
    </article>
  )
}

export default Comentarie
