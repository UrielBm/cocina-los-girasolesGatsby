import React from "react"
import Title from "../General/Title"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import FormatContent from "../General/FormatContent"
import Contact from "../Contact/Contact"
import Links from "../General/Links"
import * as Styles from "./WrapperPages.module.scss"
const WrapperUbicacion = () => {
  const { ubicacion } = useStaticQuery(graphql`
    {
      ubicacion: allStrapiPaginas(
        filter: { nombre: { eq: "Ubicación y contacto" } }
      ) {
        nodes {
          id
          nombre
          descripcion
          Url
          fotografia {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 600
                  quality: 80
                  webpOptions: { quality: 80 }
                  formats: WEBP
                  blurredOptions: { toFormat: WEBP }
                  placeholder: BLURRED
                )
              }
            }
          }
        }
      }
    }
  `)
  const { nombre, descripcion, fotografia, Url } = ubicacion.nodes[0]
  const imagen = getImage(fotografia[0].localFile)
  return (
    <div className={Styles.wrapperNosotros}>
      <div>
        <Title title={nombre} />
      </div>
      <div className={Styles.wrapperInfo}>
        <div className={Styles.wrapperContent}>
          <FormatContent descripcion={descripcion} />
          <div className={Styles.wrapperLinks}>
            <Links url={Url} text="Ubicación" />
          </div>
          <div>
            <Contact text={`Hola, me gustaria contactarme con ustedes para `} />
          </div>
        </div>
        <div className={Styles.wrapperImg}>
          <GatsbyImage
            image={imagen}
            alt="Foto-banner"
            imgClassName={Styles.img}
            className={Styles.wrapperImg}
          />
        </div>
      </div>
    </div>
  )
}

export default WrapperUbicacion
