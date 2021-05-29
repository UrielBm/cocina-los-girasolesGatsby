import React from "react"
import * as Styles from "./General.module.scss"
import PropTypes from "prop-types"
const Title = ({ title }) => <h1 className={Styles.title}>{title}</h1>

Title.propTypes = {
  title: PropTypes.string,
}
export default Title
