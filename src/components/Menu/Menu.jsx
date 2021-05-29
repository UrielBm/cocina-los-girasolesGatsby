import React, { useEffect, useState } from "react"
import { FormatSopa } from "../helpers/FormatSopa"
import formatDistanceToNow from "date-fns/formatDistanceToNow"
import { es } from "date-fns/locale"
import Title from "../General/Title"
import useMenu from "../hooks/useMenu"
import Comidas from "./Comidas"
import Sopas from "./Sopas"
import Contact from "../Contact/Contact"
import * as Styles from "./Menu.module.scss"
const Menu = () => {
  const menu = useMenu()
  const [sopas, setsopas] = useState([])
  const [comidas, setcomidas] = useState([])
  const [postres, setpostres] = useState([])
  const [dayMenu, setDayMenu] = useState("")
  useEffect(() => {
    if (Object.keys(menu).length !== 0) {
      const formatSopa = FormatSopa(menu.Sopas.nodes[0])
      setsopas(formatSopa)
      setcomidas([
        ...menu.Comidas.nodes,
        { nombre: "Chiles en nogada", Costo: 70 },
        { nombre: "Filete empapelado", Costo: 70 },
      ])
      setDayMenu(
        formatDistanceToNow(new Date(menu.Comidas.nodes[0].updatedAt), {
          locale: es,
        })
      )
      setpostres(menu.Postres.nodes)
      return
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className={Styles.wrapperMenu} id="menu">
      <div className={Styles.wrappertitle}>
        <Title title="Menú" />
      </div>
      <div className={Styles.wrapperupdate}>
        <p className={Styles.update}>actualizado: {dayMenu} atrás</p>
      </div>
      <Sopas sopas={sopas} />
      <Comidas comidas={comidas} postres={postres} />
      <div className={Styles.wrapperContact}>
        <Contact text={`Hola, me gustaria ordenar del menú `} />
      </div>
    </div>
  )
}

export default Menu
