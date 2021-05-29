import React from "react"
import Title from "../General/Title"
import Desayuno from "./Desayuno"
import useDesayunos from "../hooks/useDesayunos"
import * as Styles from "./Desayunos.module.scss"
const WrapperDesayunos = () => {
  const Desayunos = useDesayunos()
  return (
    <section className={Styles.wrapperDesayunos}>
      <div className={Styles.wrapperTitle}>
        <Title title="Desayunos" />
      </div>
      <div className={Styles.desayunos}>
        {Desayunos.map(desayuno => {
          return (
            <Desayuno
              key={`${desayuno.id}-${desayuno.nombre}`}
              desayuno={desayuno}
            />
          )
        })}
      </div>
    </section>
  )
}

export default WrapperDesayunos
