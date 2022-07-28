import React from 'react'

const Lista = () => {
  const numeros = [
    { id: 1, texto: 'tarea1' },
    { id: 2, texto: 'tarea2' },
    { id: 3, texto: 'tarea3' },
    { id: 4, texto: 'tarea4' }

  ]
  const [lista, setLista] = React.useState(numeros)

  return (
    <div>
      <hr />
      <h2> lista numeros</h2>

      {
        lista.map((i, index) => (
          <h4 key={i.id}>{i.texto}</h4>
        ))
      }


    </div>
  )
}
export default Lista