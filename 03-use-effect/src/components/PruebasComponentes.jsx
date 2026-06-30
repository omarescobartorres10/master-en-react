import React, { useEffect } from 'react'
import { useState } from 'react'
import { Aviso } from './Aviso';

export const PruebasComponentes = () => {

    const [usuario, setUsuario] = useState("Omar Torres");
    const [fecha, setFecha] = useState("01-01-2026");
    const [contador, setContador] = useState(0);

    const modUsuario = e => {
        setUsuario(e.target.value)
    }

    const cambiarFecha = e => {
        setFecha(Date.now())
    }

    useEffect(() => {
        console.log("Has cargado el componente")
    }, [])

    useEffect(() => {
        setContador(contador + 1)
        console.log("Has cambiado el usuario " + contador)

    }, [usuario])



    return (
        <div>
            Pruebas Componentes.
            <hr />
            <strong className={contador >= 10 ? 'label' : 'label label-red'}  >{usuario}</strong>
            <hr />
            <strong >{fecha}</strong>
            <p>
                <input type="text"
                    onChange={modUsuario}
                    placeholder='cambia nombre'
                />
            </p>

            {usuario == "OMAR" && <Aviso/>}

            <button onClick={cambiarFecha}>Cambiar fecha</button>

        </div>

    )
}
