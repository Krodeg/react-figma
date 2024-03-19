import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home/home'
import Facilities from './components/facilities/facilities'
import Rooms from './components/rooms/rooms'
import Contact from './components/contact/contact'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'

function RouterComponent() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/facilities' element={<Facilities/>} />
            <Route path='/rooms' element={<Rooms/>} />
            <Route path='/contact-us' element={<Contact/>} />
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}

export default RouterComponent
