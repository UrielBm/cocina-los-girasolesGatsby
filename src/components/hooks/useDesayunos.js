import { graphql, useStaticQuery } from "gatsby"
const useDesayunos = () => {
  const { desayunos } = useStaticQuery(graphql`
    query {
      desayunos: allStrapiDesayunos {
        nodes {
          id
          nombre
          descripcion
          precio
          fotografia {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 300
                  quality: 70
                  formats: WEBP
                  webpOptions: { quality: 75 }
                )
              }
            }
          }
        }
      }
    }
  `)
  const Desayunos = desayunos.nodes
  return Desayunos
}

export default useDesayunos
