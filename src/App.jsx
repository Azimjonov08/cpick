import "./App.scss"
import Contact from "./pages/Contact/Contact"
import Korzina from "./pages/Korzina/Korzina"
import Servise from "./pages/Servise/Servise"
import Home from "./pages/Home/Home"
import { Routes, Route } from 'react-router-dom'
import Cinner from "./pages/CardInner/CardInner"
import Vibor from "./pages/Vibor/Vibor"
import Zakas from "./pages/Zakas/Zakas"
import Finish from "./pages/Finish/Finish"

function App() {
  return (
    <>
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/korzina' element={<Korzina />} />
        <Route path='/sevise' element={<Servise />} />
        <Route path='/card-inner/:CardId' element={<Cinner />} />
        <Route path='/vibor/:ViborId' element={<Vibor />} /> 4
        <Route path='/zakas' element={<Zakas />} />
        <Route path='/finish' element={<Finish />} />
      </Routes>
      {/* <Korzina /> */}
      {/* <Contact /> */}
      {/* <Servise /> */}
      {/* <Cinner /> */}
      {/* <Vibor /> */}
      {/* <Zakas /> */}
    </>
  )
}

export default App
