import React, { useState } from 'react'

const Formulario = () => {
    const [fruta, setFruta] = useState('')
    const [Descripcion, setDescripcion] = useState('')
    const [lista, setLista] = useState([])


    const guardarDatos = (e) => {
        e.preventDefault();

        if (!fruta.trim()) {
            console.log("campo Fruta vacio");
            return
        }

        if (!Descripcion.trim()) {
            console.log('campo Descripcion vacio')
            return
        }
        console.log(`procesando los Datos... ${fruta} ${Descripcion}`)

        setLista([
            ...lista,
            { NombreFru: fruta, NombDescrip: Descripcion }
        ])

        //me ayuda a que los campo vuelva a esta en blanco para un nuevo ingreso 
        e.target.reset();
        setDescripcion('');
        setFruta('')
    }


    return (
        <div>
            <h2>Formulario</h2>
            {/* se crea un evento onSubmit para enviar o mostrar la informacion digitada por el usuario o hacer validaciones  */}
            <form onSubmit={guardarDatos}>
                <input type="text"
                    placeholder="Ingrese fruta"
                    className='form-control mb-2'
                    // este evento me permite usar los set creados arriba para hacer una vista de lo que se ingresa gracias a la extencion React developer tools
                    onChange={(e) => setFruta(e.target.value)}
                />
                <input type="text"
                    placeholder="Ingrese Descripcion"
                    className="form-control mb-2"
                    onChange={(e) => setDescripcion(e.target.value)}

                />
                <button className='btn btn-primary btn-block' type='submit'>Agregar</button>


            </form>
            <ul className='container mt-5'>
                {
                    lista.map((i, id) => (
                        <li><h1 key={id}>{i.NombreFru} - {i.NombDescrip}</h1></li>
                    ))
                }
            </ul>


        </div>
    )
}

export default Formulario