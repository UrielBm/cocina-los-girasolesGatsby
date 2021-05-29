import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Contact from "../Contact/Contact"
import * as Styles from "./../Desayunos/Desayunos.module.scss"
const Platillos = ({ platillo }) => {
  const {
    Nombre,
    categoria,
    descripcion,
    guarnicion,
    precio,
    todos_los_dias,
    Fotografia,
  } = platillo
  const imagen = getImage(Fotografia.localFile)
  return (
    <article className={Styles.desayuno}>
      <div className={Styles.wrapperImg}>
        <GatsbyImage
          image={imagen}
          alt="fotografia desayuno"
          imgClassName={Styles.img}
          className={Styles.wrapperImg}
        />
      </div>
      <div className={Styles.wrapperInfo}>
        <p className={Styles.text}>
          Nombre: <span className={Styles.name}>{Nombre}</span>
        </p>
        <p className={Styles.text}>Categoria: {categoria.type}</p>
        <p className={Styles.text}>
          <span className={Styles.desc}>{descripcion}</span>
        </p>
        <p className={Styles.text}>Guarnición: {guarnicion}</p>
        <div className={Styles.text}>
          {todos_los_dias ? (
            <p className={Styles.avalible}>Disponible todos los días</p>
          ) : (
            <p className={Styles.disable}>Disponible por hoy</p>
          )}
        </div>
        <p className={Styles.text}>
          ${" "}
          <span className={Styles.precio}>
            {precio !== 0 ? precio : "incluido con la comida"}
          </span>
        </p>
        <div className={Styles.text}>
          {categoria.type === "comida" ? (
            <p className={Styles.recordatorio}>
              Todos nuestros platillos incuyen una sopa agüada, una sopa seca,
              frijoles, tortillas y agua consulta nuestro menú en la página
              principal
            </p>
          ) : categoria.type === "postre" ? (
            <p className={Styles.recordatorio}>
              lo puedes comprar por separado
            </p>
          ) : (
            <p className={Styles.recordatorio}> Se incluye con tu platillo</p>
          )}
        </div>
      </div>
      <div className={Styles.wrapperContact}>
        <Contact
          text={`Hola buenos días, me gustaría ordernar el desayuno de ${Nombre}`}
        />
      </div>
    </article>
  )
}

export default Platillos
