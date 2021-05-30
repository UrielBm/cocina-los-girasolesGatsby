import React from "react"
import Subtitle from "../General/Subtitle"
import * as Styles from "./Menu.module.scss"
const Sopas = ({ sopas }) => {
  return (
    <div>
      <div className={Styles.wrappertitle}>
        <Subtitle subtitle="Primer tiempo" />
      </div>
      <div className={Styles.wrapperSopas}>
        {sopas.length !== 0 ? (
          sopas.map((sopa, index) => {
            return (
              <div key={`${index}-${sopa}`} className={Styles.wrapperSopa}>
                <p className={Styles.sopa}>{sopa}</p>
              </div>
            )
          })
        ) : (
          <p>No hay sopas asignadas</p>
        )}
      </div>
    </div>
  )
}

export default Sopas
