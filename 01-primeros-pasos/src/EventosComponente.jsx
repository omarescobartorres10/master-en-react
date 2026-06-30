import React from 'react'

export const EventosComponente = () => {


    const hasDadoClick = (e, nombre) => {
        alert(`Hola, ${nombre} soy un  evento click `)
    }
    const hasDadoDobleClick = () => {
        alert(`has dado doble click `)
    }

    const hasEntrado =  () =>{
        console.log("has entrado")
    }

    const hasSalido = () => {
        console.log("has salido")
    }

    const estasEnElInput = ()=> {
        console.log("Estas dentro del input. Mete tu nombre")
    }

    const salisteDelInput = () => {
        alert("NO SALGAS DEL INPUT")
    }

    return (
        <div>
            <h1>Eventos de React
            </h1>
            <p>Dar un click: <button onClick={e => hasDadoClick(e, "Omar")}>DAME CLICK</button></p>
            
            <p>Dar doble click: <button onDoubleClick={hasDadoDobleClick}>Dme click</button></p>

            <div id='caja' 
            onMouseEnter={hasEntrado}
            onMouseLeave={hasSalido}
            >
                <p className='p'>Pasa por encima</p>
            </div>
            <p>
                <input type="text" 
                onFocus={estasEnElInput} placeholder='Introduce tu nombre'
                onBlur={salisteDelInput}
                
                />

            </p>
            
        </div>


    )
}
