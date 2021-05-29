import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import * as Styles from "../General/General.module.scss"
const useFiltro = () => {
  const [categoria, setcategoria] = useState("")
  const { categorias } = useStaticQuery(graphql`
    query {
      categorias: allStrapiCategorias {
        nodes {
          type
          id
        }
      }
    }
  `)
  const Categorias = categorias.nodes
  const FiltroUi = () => (
    <form className={Styles.wrapperForm}>
      <select
        className={Styles.select}
        onChange={e => setcategoria(e.target.value)}
        value={categoria}
        onBlur={e => setcategoria(e.target.value)}
      >
        <option value="">--Filtrar--</option>
        {Categorias.map(opcion => {
          return (
            <option key={opcion.id} value={opcion.type}>
              {opcion.type}
            </option>
          )
        })}
      </select>
    </form>
  )
  return { categoria, FiltroUi }
}

export default useFiltro
