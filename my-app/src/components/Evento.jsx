import React, { useState } from 'react'

const Evento = () => {
    const [texto, setTexto] = useState(' evento ')

    const ClicButton = () => {
        console.log("hola me diste click");
        setTexto('evento cambiado con hook')
    }
    return (
        <>
            <hr />
            <h2>{texto}</h2>
            <button onClick={() => ClicButton()}>Click</button>

        </>
    )
}

export default Evento