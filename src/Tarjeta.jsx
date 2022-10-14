import React from 'react'

const Tarjeta = ({id, imagen, titulo, usuario}) => {
  return (
    <div>
        <img src={imagen} alt="sticker"/>
        <div>
            <h5>Título: {titulo}</h5>
            <p>Nombre del usuario: { usuario ? `${usuario}` : 'Disney' }</p>
        </div>
    </div>
  )
}

export default Tarjeta