import React from "react"
import Title from "../General/Title"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import * as Styles from "./Hero.module.scss"
const Hero = () => {
  const { hero } = useStaticQuery(graphql`
    query {
      hero: file(relativePath: { eq: "Hero/Hero.webp" }) {
        childImageSharp {
          gatsbyImageData(width: 950, quality: 70, webpOptions: { quality: 85 })
        }
      }
    }
  `)
  const image = getImage(hero)
  return (
    <div className={Styles.wrapperHero}>
      <BgImage image={image} className={Styles.wrapperBackgroundImg}>
        <div className={Styles.HeroData}>
          <div className={Styles.wrapperTitle}>
            <Title title="Cocina los girasoles" />
          </div>
        </div>
      </BgImage>
    </div>
  )
}

export default Hero
