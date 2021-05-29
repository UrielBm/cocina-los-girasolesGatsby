import React, { useEffect, useState } from "react"
import Title from "../General/Title"
import usePlatillos from "../hooks/usePlatillos"
import Platillos from "./Platillos"
import useFiltro from "../hooks/useFiltro"
import * as Styles from "./../Desayunos/Desayunos.module.scss"
const WrapperPlatillos = () => {
  const resultado = usePlatillos()
  const [platillos] = useState(resultado)
  const [ArrayPlatillos, setArrayPlatillos] = useState([])
  const { categoria, FiltroUi } = useFiltro()
  useEffect(() => {
    if (categoria) {
      const filtro = platillos.filter(
        platillo => platillo.categoria.type === categoria
      )
      setArrayPlatillos(filtro)
    } else {
      setArrayPlatillos(platillos)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoria])
  return (
    <section className={Styles.wrapperDesayunos}>
      <div className={Styles.wrapperTitle}>
        <Title title="Platillos" />
      </div>
      <div>{FiltroUi()}</div>
      <div className={Styles.desayunos}>
        {ArrayPlatillos.length !== 0 ? (
          ArrayPlatillos.map(platillo => {
            return <Platillos key={platillo.id} platillo={platillo} />
          })
        ) : (
          <p>No hay platillos de esta categoria</p>
        )}
      </div>
    </section>
  )
}

export default WrapperPlatillos
