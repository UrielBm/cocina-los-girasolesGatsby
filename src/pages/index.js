import * as React from "react"
import WrapperCommentaries from "../components/Comentaries/WrapperCommentaries"
import Hero from "../components/Hero/Hero"
import Layout from "../components/layout"
import Menu from "../components/Menu/Menu"
import * as Styles from "./pages.module.scss"
const IndexPage = () => (
  <Layout>
    <section className={Styles.wrapperpages}>
      <Hero />
      <Menu />
      <WrapperCommentaries />
    </section>
  </Layout>
)

export default IndexPage
