import React from 'react'

const Frutas = () => {
    const frut = [
        { id: 1, nombre: "aple🍎", color: "red" },
        { id: 2, nombre: "orange🍊", color: "orange" },
        { id: 3, nombre: "banana🍌", color: "yelow" },
        { id: 4, nombre: "lime🍈", color: "green" },
        { id: 5, nombre: "coconut🥔", color: "brow" }]

    const [tipos, setTipos] = React.useState(frut)
    const AgregarNuevo = () => {

        setTipos([
            ...tipos, { id: 6, nombre: "fres🍓", color: "red" }
        ])

    }


    return (
        <div>
            <hr />
            {
                tipos.map((fr, id) => (
                    <h3 key={fr.id}>{fr.id} {fr.nombre} {fr.color}</h3>

                ))
            }
            <button className='btn btn-outline-warning' onClick={() => AgregarNuevo()}>enviar</button>




        </div>
    )
}

export default Frutas