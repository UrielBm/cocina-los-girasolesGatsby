import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Comentarie from "./Comentarie"
import Title from "./../General/Title"
import * as Styles from "./Comentaries.module.scss"
const WrapperCommentaries = () => {
  const { comentaries } = useStaticQuery(graphql`
    query {
      comentaries: allStrapiComentarios {
        nodes {
          nombre
          comentario
          calificacion
          imagen {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 180
                  quality: 70
                  webpOptions: { quality: 85 }
                  formats: WEBP
                  placeholder: BLURRED
                )
              }
            }
          }
        }
      }
    }
  `)
  const comentarios = comentaries.nodes
  return (
    <div className={Styles.comentaries}>
      <div className={Styles.wrapperTitle}>
        <Title title="Comentarios" />
      </div>
      <div className={Styles.wrapperComentaries}>
        {comentarios.map(comentario => {
          return (
            <Comentarie
              key={`${comentario.id}-${comentario.nombre}`}
              comentario={comentario}
            />
          )
        })}
      </div>
    </div>
  )
}

export default WrapperCommentaries
