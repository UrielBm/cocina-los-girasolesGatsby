import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import usePhone from "../hooks/usePhone"
import * as Styles from "./Contact.module.scss"
const Contact = ({ text }) => {
  const WhatsApp = usePhone()
  return (
    <a
      href={`https://api.whatsapp.com/send?phone=52${WhatsApp}&text=${text}`}
      target="_black"
      rel="noreferrer"
      className={Styles.link}
    >
      <StaticImage
        src="../../images/icons/whatsapp.svg"
        alt="WhatsApp logo"
        placeholder="blurred"
        layout="fixed"
        width={15}
        height={15}
        className={Styles.link}
        imgClassName={Styles.img}
      />
      <span className={Styles.text}>WhatsApp</span>
    </a>
  )
}

export default Contact
