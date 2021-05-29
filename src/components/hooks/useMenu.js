import { graphql, useStaticQuery } from "gatsby"
const useMenu = () => {
  const { Sopas, Comidas, Postres } = useStaticQuery(graphql`
    query {
      Sopas: allStrapiSopasDia {
        nodes {
          sopaAguada
          SopaAguada2
          Sopaseca1
          Sopaseca2
        }
      }
      Comidas: allStrapiMenuDia {
        nodes {
          id
          nombre
          Costo
          updatedAt
        }
      }
      Postres: allStrapiPostresDia {
        nodes {
          id
          nombre
          Costo
        }
      }
    }
  `)
  return { Sopas, Comidas, Postres }
}

export default useMenu
