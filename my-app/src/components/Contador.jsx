import React from 'react'

const Contador = () => {
    //setContador es una funcion que debe ser llamada en la funcion del click 
    const [contador, setContador] = React.useState(0);
    const Aumentar = () => {
        // console.log('este click')
        setContador(contador + 1)

    }
    return (
        <div>
            <hr />
            <h3>contador: {contador}</h3>
            <button onClick={() => Aumentar()}>Aunmentar</button>
        </div>

    )
}

export default Contador