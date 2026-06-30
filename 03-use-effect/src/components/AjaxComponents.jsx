import React, { useEffect, useState } from 'react'

export const AjaxComponents = () => {
    const [usuarios, setUsarios] = useState([]) //estados de usuarios
    const getUsuariosEstatitivos = () => { //array de objetos con usuarios
        setUsarios([
            {
                "id": 1,
                "email": "omar@gmail.com",
                "first_name": "Omar",
                "last_name": "Torres"
            }, {
                "id": 2,
                "email": "santiago@gmail.com",
                "first_name": "Santiago",
                "last_name": "Hernadez"
            }, {
                "id": 3,
                "email": "Ana@gmail.com",
                "first_name": "Ana",
                "last_name": "zelaya"
            },
        ])
    }



    const getUsuariosAjaxPromesa

    useEffect(() => {
        getUsuariosEstatitivos() 
    }, [])


  return (
    <div>
        <h2>Listado de usuarios vía AJAX</h2>
        <ol>
            {
                usuarios.map(usuario => {
                    return <li key={usuario.id}>{usuario.first_name}  {usuario.last_name}

                    </li>
                } )
            }
        </ol>

    </div>
  )
}


