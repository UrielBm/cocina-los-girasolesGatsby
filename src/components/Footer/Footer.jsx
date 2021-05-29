import React from "react"
import SocialNetworks from "../General/SocialNetworks"
import * as Styles from "./Footer.module.scss"
const Footer = () => {
  const handleGetYear = () => {
    const year = new Date()
    return year.getFullYear()
  }
  return (
    <footer className={Styles.wrapperFooter}>
      <p>Siguenos en nuestras redes sociales</p>
      <SocialNetworks />
      <p>CopyRight &copy; {handleGetYear()} Cocina los girasoles</p>
    </footer>
  )
}

export default Footer
