import React from "react"
import Subtitle from "../General/Subtitle"
import * as Styles from "./Menu.module.scss"
import Postres from "./Postres"
const Comidas = ({ comidas, postres }) => {
  return (
    <div>
      <div className={Styles.wrappertitle}>
        <Subtitle subtitle="Guisado" />
      </div>
      <div>
        {comidas.length !== 0 ? (
          comidas.map(comida => {
            return (
              <div
                key={`${comida.id}-${comida.nombre}`}
                className={Styles.wrappercomidas}
              >
                <p className={Styles.comida}>{comida.nombre}</p>
                <p className={Styles.costo}>$ {comida.Costo}</p>
              </div>
            )
          })
        ) : (
          <p>No hay datos</p>
        )}
        <div className={Styles.wrappertitle}>
          <Subtitle subtitle="Para preparar" />
        </div>
        <div>
          <div className={Styles.wrappercomidas}>
            <p className={Styles.comida}>Pechuga</p>
            <div>
              <p className={Styles.comida}>Asada</p>
              <p className={Styles.comida}>Empanizada</p>
            </div>
            <p className={Styles.costo}>$ 60</p>
          </div>
          <div className={Styles.wrappercomidas}>
            <p className={Styles.comida}>Bisteck con chilaquiles</p>
            <p className={Styles.costo}>$ 60</p>
          </div>
          <div className={Styles.wrappercomidas}>
            <p className={Styles.comida}>Filete de pescado</p>
            <p className={Styles.costo}>$ 70</p>
          </div>
          <div className={Styles.wrappercomidas}>
            <p className={Styles.comida}>Plato huasteco</p>
            <p className={Styles.costo}>$ 80</p>
          </div>
        </div>
      </div>
      <div>
        <div className={Styles.wrappertitle}>
          <Subtitle subtitle="Postres" />
        </div>
        <div>
          <Postres postres={postres} />
        </div>
      </div>
      <div className={Styles.wrapperaviso}>
        <p className={Styles.aviso}>Jarra de agua extra</p>
        <p className={Styles.costo}>$ 15</p>
      </div>
      <div className={Styles.wrapperPaquete}>
        <p className={Styles.incluye}>La comida incluye:</p>
        <p className={Styles.mesage}>
          Sopa caldosa,sopa seca,guisado,frijoles,tortillas y agua
        </p>
      </div>
    </div>
  )
}

export default Comidas
