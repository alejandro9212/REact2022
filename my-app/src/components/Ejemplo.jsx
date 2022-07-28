import React from 'react'

const Ejemplo = () => {
    const [num, setNumero] = React.useState(5)
    const SumarNumero = () => {
        setNumero(num + 10)
    }
    return (
        <div>
            <hr />
            <h3>ejemplo suma: {num}</h3>
            <h4>
            /*operador ternario es cmomo se usa la condicional if en mas optimo funcionamiento */
                {

                    num >= 55 ? 'es mayor a 55' : 'es menos a 55'
                }
            </h4>
            <button onClick={() => SumarNumero()}>sumar</button>

        </div>
    )
}

export default Ejemplo
