import React, { useEffect, useState } from 'react'

export const AjaxComponents = () => {
    const [usuarios, setUsuarios] = useState([]) //estados de usuarios
    // const [usuarios, setUsuarios] = useState([]);
    const getUsuariosEstatitivos = () => { //array de objetos con usuarios
        setUsuarios([
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

    const getUsuariosAwait = async () => {
    const peticion = await fetch("https://reqres.in/api/users?page=1");
    const resultado = await peticion.json();
    
    setUsuarios(resultado.data);

    console.log(resultado)
};

    // const getUsuariosAjax = () => {
    //     fetch("https://api.thecatapi.com/v1/images/search")
    //         .then(res => res.json())
    //         .then(resultado => {
    //             setUsuarios(resultado);
    //         });
    //         console.log(usuarios)
    // };

    useEffect(() => {
        // getUsuariosEstatitivos() 
        //getUsuariosAjax()
        getUsuariosAwait()
    }, [])

    //se renderiza el componente por primera vez
    //DESPUÉS DEL RENDERIZADO se ejecuta el useEffect
    //en el useEffect se ejecuta getUsuariosEstatitivos() 
    //dentro de getUsuariosEstatitivos() se llama setUsarios
    // eso actualiza el estado y react-re renderiza ek componente con la nueva lista de usuarios


    return (
        <div>
            <h2>Listado de usuarios vía AJAX</h2>
            <ol>
                {usuarios.map(usuario => (
                    <li key={usuario.id}>
                        {usuario.first_name} {usuario.last_name}
                    </li>
                ))}
            </ol>

        </div>
    )
}


