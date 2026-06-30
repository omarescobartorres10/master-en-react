import React from 'react'
import { useState } from 'react';


export const MiPrimerEstado = () => {

    const [nombre, setNombre] = useState("Omar Torres")

    const cambiarNombre = (e, nombreFijo) => {
        setNombre(nombreFijo)
    }

    return (
        <>
            <div>Componente: Mi Primer Estado </div>
            <strong className='label'>
                {nombre}
            </strong>
            <button onClick={e => cambiarNombre(e, "fran")}>Cambiar Nombre por Fran</button>

            <input type="text" onChange={e => cambiarNombre(e, e.target.value)} placeholder='Cambia el nombre' />
        </>

    )
}
