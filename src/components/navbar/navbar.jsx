import React from 'react'
import { Link } from 'react-router-dom'
import { ImageWrapper } from '../home/style'
import Logo from '../../assets/logo.png'

function Navbar() {
  return (
    <div style={{display: "flex", justifyContent: "space-around", height: "149px", alignItems: "center"}}>
        <ImageWrapper src={Logo}/>
        
        <div style={{display: "flex", gap: "90px"}}>
          <Link to={"/"}><p style={{color: "white", textDecoration: "underline", fontSize: "25px"}}>Home</p></Link>
          <Link to={"/facilities"}><p style={{color: "white", textDecoration: "underline", fontSize: "25px"}}>Facilities</p></Link>
          <Link to={"/rooms"}><p style={{color: "white", textDecoration: "underline", fontSize: "25px"}}>Rooms</p></Link>
          <Link to={"/contact-us"}><p style={{color: "white", textDecoration: "underline", fontSize: "25px"}}>Contact-us</p></Link>
        </div>

    </div>
  )

  
}

export default Navbar
