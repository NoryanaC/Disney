import React, { useEffect, useState } from 'react'
import Tarjeta from './Tarjeta'

const App = () => {
  const [pagina, setPagina] = useState(0)
  const [imagenes, setImagenes] = useState([])

  const traerImagenes = async () => {

    const consulta = await fetch(`https://api.giphy.com/v1/stickers/search?api_key=lB7AZAeUH2C5Aj5PgdNSgHNXqeMHEguC&offset=${ pagina }0&q=disney&limit=10`)
    const {data} = await consulta.json()
    console.log(data)
    const stickers = data.map(sticker => ({
      id: sticker.id,
      imagen: sticker.images.downsized.url,
      titulo: sticker.title,
      usuario: sticker.username
    }))
    setImagenes(stickers)
    console.log(imagenes)

  }

  useEffect(() => {
    traerImagenes()
  }, [pagina])

  const adelantarPagina = () => {
    setPagina( pagina + 1)
  }

  const retrocederPagina = () => {
    if (pagina===0) {
      return
    }
    setPagina( pagina - 1)
  }
  
  return (
    <div>
      <div>
        <button onClick={retrocederPagina} disabled={ pagina===0 }>
          Atrás
        </button>
        <button onClick={adelantarPagina}>
          Siguiente
        </button>
      </div>

      <div>
        {
          imagenes.map(imagen => (
            <Tarjeta key={imagen.id} {...imagen} />
          ))
        }
      </div>
    </div>
  )
}

export default App