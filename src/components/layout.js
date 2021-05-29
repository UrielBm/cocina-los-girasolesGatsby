import * as React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import * as Styles from "./layout.module.scss"
const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <html lang="es" />
        <title>Cocina los girasoles</title>
        <meta
          name="description"
          content="Sitio web de cocina los girasoles comida, restaurante en Pachuca Hidalgo."
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Monoton&family=Spartan:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <div className={Styles.wrapperMain}>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
