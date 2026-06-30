import React from "react";

function MiComponente () {

    let usuario = {
        nombre: "Omar",
        apellido: "Torres",
        web: "ya te la sabes"

    }

    //const nombre = "Omar";
    let web = "profoliodeomar.io.com"

    return (
       <>
       <h1>Este es mi primer componente</h1>
        <li>Nombre: {usuario.nombre}</li>
        <li>Apellido: {usuario.apellido}</li>
        <li>Mi web es {web}</li>
       </>
        
    )
}


export default MiComponente