import React from "react"
import * as Styles from "./Menu.module.scss"
const Postres = ({ postres }) => {
  return (
    <div>
      {postres.length !== 0 ? (
        postres.map(postre => {
          return (
            <div
              key={`${postre.id}-${postre.nombre}`}
              className={Styles.wrapperpostres}
            >
              <p className={Styles.postre}>{postre.nombre}</p>
              <p className={Styles.costo}>$ {postre.Costo}</p>
            </div>
          )
        })
      ) : (
        <div>
          <p>Aun no hay postres</p>
        </div>
      )}
    </div>
  )
}

export default Postres
