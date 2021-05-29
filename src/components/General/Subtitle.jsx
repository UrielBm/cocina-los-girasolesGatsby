import React from "react"
import * as Styles from "./General.module.scss"
import PropTypes from "prop-types"
const Subtitle = ({ subtitle }) => (
  <h3 className={Styles.subtitle}>{subtitle}</h3>
)

Subtitle.propTypes = {
  subtitle: PropTypes.string,
}
export default Subtitle
