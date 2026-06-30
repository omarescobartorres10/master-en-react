import React, { useEffect } from 'react'



export const Aviso = () => {

    useEffect(() => {
        //CUANDO SE MONTA EL COMPONENTE
        
        alert("El componente está montado")


        //cuando se desmonta

        return () => {
            alert("Componente desmontado")
        }


    }, [])

  return (
    <div>
        <hr />
        <h3>Hellou Omar, qué tal?</h3>
    </div>
  )
}
