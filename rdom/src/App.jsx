import { useState } from 'react'

import './App.css'
import Navbar from './Component/Navbar/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import About from './Component/Body/About/About'
import Contact from './Component/Body/Contact/Contact'
import Home from './Component/Body/Home/Home'
import Footer from './Component/Footer/Footer'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/about' Component={About}/>
      <Route path='/contact' Component={Contact}/>
    </Routes>
    <Footer/>
    </BrowserRouter>

    </>
  )
}

export default App
