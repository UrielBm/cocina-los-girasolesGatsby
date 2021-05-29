import { graphql, useStaticQuery } from "gatsby"
const usePlatillos = () => {
  const { platillos } = useStaticQuery(graphql`
    query {
      platillos: allStrapiPlatillos {
        nodes {
          id
          Nombre
          descripcion
          precio
          todos_los_dias
          guarnicion
          categoria {
            type
          }
          Fotografia {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 360
                  formats: WEBP
                  quality: 70
                  webpOptions: { quality: 80 }
                )
              }
            }
          }
        }
      }
    }
  `)
  const Platillos = platillos.nodes
  return Platillos
}

export default usePlatillos
