import React from "react"
import Layout from "../components/layout"
import WrapperPlatillos from "../components/Platillos/WrapperPlatillos"
import * as Styles from "./pages.module.scss"
const platillos = () => {
  return (
    <Layout>
      <section className={Styles.wrapperpages}>
        <WrapperPlatillos />
      </section>
    </Layout>
  )
}

export default platillos
