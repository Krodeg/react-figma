import React from 'react'
import { Link } from 'react-router-dom'
import { ImageWrapper } from '../home/style'
import Logo from '../../assets/logo.png'

function Navbar() {
  return (
    <div style={{display: "flex", justifyContent: "space-around", height: "149px", alignItems: "center"}}>
        <ImageWrapper src={Logo}/>
        
        <div style={{display: "flex", gap: "90px"}}>
          <Link to={"/"} style={{textDecoration: "none"}}><p style={{color: "white", fontSize: "25px"}}>Home</p></Link>
          <Link to={"/facilities"} style={{textDecoration: "none"}}><p style={{color: "white", fontSize: "25px"}}>Facilities</p></Link>
          <Link to={"/rooms"} style={{textDecoration: "none"}}><p style={{color: "white", fontSize: "25px"}}>Rooms</p></Link>
          <Link to={"/contact-us"} style={{textDecoration: "none"}}><p style={{color: "white", fontSize: "25px"}}>Contact-us</p></Link>
          <Link to={"/login"} style={{textDecoration: "none"}}><p style={{color: "black", fontSize: "25px"}}>Login</p></Link>
        </div>
      
    </div>
  )

  
}

export default Navbar
