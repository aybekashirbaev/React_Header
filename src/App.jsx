import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar/>}>
          <Route  index element={<Home/>}/>
          <Route  path='about' element={<About/>}/>
          <Route  path='services' element={<Services/>}/>
          <Route  path='contact' element={<Contact/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
