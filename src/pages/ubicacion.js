import React from "react"
import Layout from "../components/layout"
import WrapperUbicacion from "../components/Wrapperpages/WrapperUbicacion"
import * as Styles from "./pages.module.scss"
const ubicacion = () => {
  return (
    <Layout>
      <section className={Styles.wrapperpages}>
        <WrapperUbicacion />
      </section>
    </Layout>
  )
}

export default ubicacion
