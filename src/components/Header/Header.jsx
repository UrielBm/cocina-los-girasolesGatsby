import React, { useState } from "react"
import { Slant as Hamburger } from "hamburger-react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Nav from "../Navigation/Nav"
import * as Styles from "./Header.module.scss"
const Header = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <>
      <header className={Styles.wrapperheader}>
        <section className={Styles.wrapperLogo}>
          <Link to={"/"}>
            <StaticImage
              src="../../images/logo.svg"
              alt="logo"
              placeholder="blurred"
              loading="eager"
              imgClassName={Styles.img}
              className={Styles.wrapperLogo}
            />
          </Link>
        </section>
        <section className={Styles.wrapperLogoPhone}>
          <Link to={"/"}>
            <StaticImage
              src="../../images/logophone.svg"
              alt="logo"
              placeholder="blurred"
              loading="eager"
              imgClassName={Styles.img}
              className={Styles.wrapperLogoPhone}
            />
          </Link>
        </section>
        <section className={Styles.wrapperMenu}>
          <div className={Styles.Hamburgermenu}>
            <Hamburger
              size={29}
              direction="right"
              duration={0.6}
              toggled={isOpen}
              toggle={setOpen}
              color="#ff8303"
            />
          </div>
          <div className={Styles.wrapperNav}>
            <Nav />
          </div>
        </section>
      </header>
      {isOpen && (
        <section className={Styles.wrapperNavPhone}>
          <Nav />
        </section>
      )}
    </>
  )
}

export default Header
