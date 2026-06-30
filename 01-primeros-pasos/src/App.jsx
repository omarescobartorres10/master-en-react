import './App.css'
import { EventosComponente } from './EventosComponente'
import './MiComponente'
import MiComponente from './MiComponente'
import { SegundoComponente } from './SegundoComponente'
import { TercerComponente } from './TercerComponente'



function App() {
  
  const ficha_Medica = {
    altura: 166,
    peso: "69kg",
    estado: "aceptable" 

  }
  
  return (
    <>
    <div>
      <hr />
      <MiComponente />
      <hr />
      <SegundoComponente/>
      <hr />
      <TercerComponente nombre="Omar"  ficha_Medica={ficha_Medica} />
      <hr />
      <EventosComponente />
      <hr />
    </div>
    </>
  )
}

export default App
