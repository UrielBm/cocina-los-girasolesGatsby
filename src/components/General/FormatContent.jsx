import React from "react"
import { FormatDescription } from "../helpers/FormatDescription"
import * as Styles from "./General.module.scss"
const FormatContent = descripcion => {
  const ArrayData = FormatDescription(descripcion.descripcion)
  return (
    <div className={Styles.wrapperdescription}>
      {ArrayData.map(({ type, data }, i) => {
        return type === "title" ? (
          <h2 key={`${type}-${i}`} className={Styles.title}>
            {data}
          </h2>
        ) : (
          <p key={`${type}-${i}`} className={Styles.description}>
            {data}
          </p>
        )
      })}
    </div>
  )
}

export default FormatContent
