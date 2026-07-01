import React, { useState } from 'react'

export const FormularioComponents = () => {

    const [usuario, setUsuario] = useState({})

    const conseguirDatosForm = e => {

        e.preventDefault()

        let datos = e.target;
        let usuario = {
            nombre: datos.nombre.value,
            apellido: datos.apellido.value,
            genero: datos.genero.value,
            bio: datos.bio.value,
            enviar: datos.enviar.value
        }

        console.log(usuario)
        setUsuario(usuario)
    }

    const cambiarDatos = e => {
        const name_del_input = (e.target.name)
        let usuario_para_modificar = usuario

       

        setUsuario(estado_previo => {
            return {
                ...estado_previo, [name_del_input]: e.target.value
            }
        })
    }

    return (

        <div>
            {usuario.bio && (<div>
                <p>datos de usuario:</p>
                <ol>
                    <li>Usuario: {usuario.nombre}</li>
                    <li> Apellido; {usuario.apellido}</li>
                    <li>Genero:{usuario.genero}</li>
                    <li>historia: {usuario.bio}</li>
                </ol>
            </div>
            )}

            <h1>Formulario Con react</h1>
            <form onSubmit={conseguirDatosForm}>
                <input type="text" placeholder='Nombre' name='nombre' onChange={ cambiarDatos} />
                <input type="text" placeholder='Apellido' name='apellido' onChange={ cambiarDatos} />
                <select id="" name="genero" onChange={ cambiarDatos}>
                    <option value="hombre">Hombre</option>
                    <option value="mujer">Mujer</option>
                </select>
                <textarea id="" placeholder='Biografía' name="bio" onChange={ cambiarDatos}></textarea>
                <input type="submit" value="Enviar" name='enviar' />
                
            </form>



        </div>
    )
}
