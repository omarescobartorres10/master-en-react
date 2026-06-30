import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { MiPrimerEstado } from './components/MiPrimerEstado'
import { CambiarAnio } from './components/CambiarAnio'

function App() {
  const [count, setCount] = useState(0)
  const year = new Date().getFullYear();

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>El estado en react</h1>
         </div> 
          {/* <MiPrimerEstado/> */}
          <CambiarAnio year={year} />
        </section>
       
    </>
  )
}

export default App
