import PropTypes from "prop-types";
import { useState } from "react";

export const CambiarAnio = ({year}) => {

     

    const [anio, setAnio] = useState(year)

    
    const aumentarAnio = () => {
        setAnio(anio + 1)
    }

    const decrementarAnio = () => {
        setAnio(anio - 1)
    }

    const cambiarAnio = e => {
        let dato = parseInt(e.target.value)
        if(Number.isInteger(dato)) {
            setAnio(dato)
        }else {
            setAnio(year)
        }
    }
    
    return (

        <div>
            
            <button 
            onClick={aumentarAnio}>Aumentar</button>
            año:  {anio}
            <button 
            onClick={decrementarAnio}>Decrementar</button>
            <input 
            type="text" 
            onChange={e => cambiarAnio(e, e.target.value) } 
            placeholder="Pon el año" />
        </div>
        
    )
}


CambiarAnio.PropTypes = {
    year: PropTypes.number.isRequired
}
