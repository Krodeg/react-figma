import React from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Home from './components/home/home'
import Facilities from './components/facilities/facilities'
import Rooms from './components/rooms/rooms'
import Contact from './components/contact/contact'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import Login from './components/auth/login'
import NotFoundPage_404 from './components/error/error_404'
import Signup from './components/auth/signup'

function RouterComponent() {
  // get the currect location with useLocation hook 
  const location = useLocation();
  const showNavbarNavigate = location.pathname !== "/login" && location.pathname !== "/signup" && location.pathname !== "*";
  return (
    <div>
        {showNavbarNavigate && <Navbar/>}
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/facilities' element={<Facilities/>} />
            <Route path='/rooms' element={<Rooms/>} />
            <Route path='/contact-us' element={<Contact/>} />
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='*' element={<NotFoundPage_404/>}/>
        </Routes>
        {showNavbarNavigate && <Footer/>}
    </div>
  )
}

export default RouterComponent
