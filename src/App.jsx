import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Login from './Auth/Login'
import Register from './Auth/Register'
import Contact from './pages/Contact'
import Navbar from './Components/Navbar'
import Errorpage from './pages/Errorpage'
const App = () => {
  return (
    <>
   <BrowserRouter>
   <Navbar/>
   <Routes>

    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/services' element={<Services/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/register' element={<Register/>} />
    <Route path='*' element={<Errorpage/>} />
   </Routes>
   
   </BrowserRouter>
    </>
  )
}

export default App