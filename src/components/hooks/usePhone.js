import { graphql, useStaticQuery } from "gatsby"
const usePhone = () => {
  const { phone } = useStaticQuery(graphql`
    query {
      phone: allStrapiPhone(limit: 1) {
        nodes {
          numero_tel
        }
      }
    }
  `)
  const whatsApp = phone.nodes[0].numero_tel
  return whatsApp
}

export default usePhone
