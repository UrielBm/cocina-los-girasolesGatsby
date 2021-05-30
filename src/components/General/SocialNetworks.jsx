import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as Styles from "./General.module.scss"
const SocialNetworks = () => {
  return (
    <div className={Styles.wrapperSocialNetwork}>
      <a
        href="https://www.facebook.com/Cocina-los-Girasoles-Pachuca-de-Soto-104129295220001"
        target="_black"
        rel="noreferrer"
        className={Styles.link}
      >
        <StaticImage
          src="../../images/icons/facebook.svg"
          alt="WhatsApp logo"
          placeholder="blurred"
          layout="fixed"
          width={25}
          height={25}
          className={Styles.link}
          imgClassName={Styles.img}
        />
      </a>
      <a
        href="https://www.facebook.com/"
        target="_black"
        rel="noreferrer"
        className={Styles.link}
      >
        <StaticImage
          src="../../images/icons/instagram.svg"
          alt="WhatsApp logo"
          placeholder="blurred"
          layout="fixed"
          width={25}
          height={25}
          className={Styles.link}
          imgClassName={Styles.img}
        />
      </a>
    </div>
  )
}

export default SocialNetworks
