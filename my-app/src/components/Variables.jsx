import React from 'react'

const Variables = () => {
    const nombre = 'jhon alejandro tobon'
    const imagen = 'https://ep01.epimg.net/elpais/imagenes/2019/10/30/album/1572424649_614672_1572453030_noticia_normal.jpg'
    return (
        <div>
            <h2>nuevo componentes variables {nombre} </h2>
            <img src={imagen}></img>
        </div>
    )
}

export default Variables