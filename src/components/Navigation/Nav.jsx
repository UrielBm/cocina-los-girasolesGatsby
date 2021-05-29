import React from "react"
import { Link } from "gatsby"
import * as Styles from "./Nav.module.scss"
const Nav = () => {
  return (
    <nav className={Styles.nav}>
      <Link
        className={Styles.link}
        activeClassName={Styles.linkActive}
        to={"/"}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className={Styles.wrapperico}
        >
          <path
            className={Styles.ico}
            d="M12 6.453l9 8.375v9.172h-6v-6h-6v6h-6v-9.172l9-8.375zm12 5.695l-12-11.148-12 11.133 1.361 1.465 10.639-9.868 10.639 9.883 1.361-1.465z"
          />
        </svg>
        Inicio
      </Link>
      <Link
        className={Styles.link}
        activeClassName={Styles.linkActive}
        to={"/desayunos"}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          className={Styles.wrapperico}
        >
          <path
            className={Styles.ico}
            d="M18.496 24h-.001c-.715 0-1.5-.569-1.5-1.5v-8.5s-1.172-.003-2.467 0c.802-6.996 3.103-14 4.66-14 .447 0 .804.357.807.851.01 1.395.003 16.612.001 21.649 0 .828-.672 1.5-1.5 1.5zm-11.505-12.449c0-.691-.433-.917-1.377-1.673-.697-.56-1.177-1.433-1.088-2.322.252-2.537.862-7.575.862-7.575h.6v6h1.003l.223-6h.607l.173 6h1.003l.242-6h.562l.199 6h1.003v-6h.549s.674 5.005.951 7.55c.098.902-.409 1.792-1.122 2.356-.949.751-1.381.967-1.381 1.669v10.925c0 .828-.673 1.5-1.505 1.5-.831 0-1.504-.672-1.504-1.5v-10.93z"
          />
        </svg>
        Desayunos
      </Link>
      <Link
        className={Styles.link}
        activeClassName={Styles.linkActive}
        to={"/platillos"}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          className={Styles.wrapperico}
        >
          <path
            className={Styles.ico}
            d="M18.496 24h-.001c-.715 0-1.5-.569-1.5-1.5v-8.5s-1.172-.003-2.467 0c.802-6.996 3.103-14 4.66-14 .447 0 .804.357.807.851.01 1.395.003 16.612.001 21.649 0 .828-.672 1.5-1.5 1.5zm-11.505-12.449c0-.691-.433-.917-1.377-1.673-.697-.56-1.177-1.433-1.088-2.322.252-2.537.862-7.575.862-7.575h.6v6h1.003l.223-6h.607l.173 6h1.003l.242-6h.562l.199 6h1.003v-6h.549s.674 5.005.951 7.55c.098.902-.409 1.792-1.122 2.356-.949.751-1.381.967-1.381 1.669v10.925c0 .828-.673 1.5-1.505 1.5-.831 0-1.504-.672-1.504-1.5v-10.93z"
          />
        </svg>
        Platillos
      </Link>
      <Link
        className={Styles.link}
        activeClassName={Styles.linkActive}
        to={"/nosotros"}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className={Styles.wrapperico}
        >
          <path
            className={Styles.ico}
            d="M10.644 17.08c2.866-.662 4.539-1.241 3.246-3.682-3.932-7.427-1.042-11.398 3.111-11.398 4.235 0 7.054 4.124 3.11 11.398-1.332 2.455.437 3.034 3.242 3.682 2.483.574 2.647 1.787 2.647 3.889v1.031h-18c0-2.745-.22-4.258 2.644-4.92zm-12.644 4.92h7.809c-.035-8.177 3.436-5.313 3.436-11.127 0-2.511-1.639-3.873-3.748-3.873-3.115 0-5.282 2.979-2.333 8.549.969 1.83-1.031 2.265-3.181 2.761-1.862.43-1.983 1.34-1.983 2.917v.773z"
          />
        </svg>
        Nosotros
      </Link>
      <Link
        className={Styles.link}
        activeClassName={Styles.linkActive}
        to={"/ubicacion"}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className={Styles.wrapperico}
        >
          <path
            className={Styles.ico}
            d="M12 0c-3.148 0-6 2.553-6 5.702 0 3.148 2.602 6.907 6 12.298 3.398-5.391 6-9.15 6-12.298 0-3.149-2.851-5.702-6-5.702zm0 8c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm4 14.5c0 .828-1.79 1.5-4 1.5s-4-.672-4-1.5 1.79-1.5 4-1.5 4 .672 4 1.5z"
          />
        </svg>
        Ubicación
      </Link>
      {/* <Link
        className={Styles.link}
        activeClassName={Styles.linkActive}
        to={"/cocina_y_comida"}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          className={Styles.wrapperico}
        >
          <path
            className={Styles.ico}
            d="M9 23h-6v-7.988c.517.217 1.134.384 1.938.484.274.034.524-.16.558-.434.034-.274-.16-.524-.434-.558-4.81-.603-5.062-5.307-5.062-6.004 0-3.587 2.913-6.5 6.5-6.5.788 0 1.543.141 2.242.397.82-.86 1.977-1.397 3.258-1.397s2.438.537 3.258 1.397c.699-.256 1.454-.397 2.242-.397 3.587 0 6.5 2.913 6.5 6.5 0 .691-.252 5.401-5.062 6.004-.274.034-.468.284-.434.558.034.274.284.468.558.434.804-.1 1.421-.267 1.938-.484v7.988h-6v-3.5c0-.311-.26-.5-.5-.5-.239 0-.5.189-.5.5v3.5h-4v-3.5c0-.311-.26-.5-.5-.5-.239 0-.5.189-.5.5v3.5z"
          />
        </svg>
        Cocina
      </Link> */}
    </nav>
  )
}

export default Nav
