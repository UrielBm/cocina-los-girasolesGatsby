import * as React from "react"
import Layout from "../components/layout"
import WrapperNosotros from "../components/Wrapperpages/WrapperNosotros"
import * as Styles from "./pages.module.scss"
const nosotros = () => {
  return (
    <Layout>
      <section className={Styles.wrapperpages}>
        <WrapperNosotros />
      </section>
    </Layout>
  )
}

export default nosotros
