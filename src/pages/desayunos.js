import React from "react"
import WrapperDesayunos from "../components/Desayunos/WrapperDesayunos"
import Layout from "../components/layout"
import * as Styles from "./pages.module.scss"
const desayunos = () => {
  return (
    <Layout>
      <section className={Styles.wrapperpages}>
        <WrapperDesayunos />
      </section>
    </Layout>
  )
}

export default desayunos
