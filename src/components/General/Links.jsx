import React from "react"
import * as Styles from "./General.module.scss"
const Links = ({ url, text }) => (
  <a href={url} target="_black" rel="noreferrer" className={Styles.links}>
    {text}
  </a>
)
export default Links
