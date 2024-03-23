import React from 'react'
import { FooterContainer, FooterLogo, FooterTriangle, Icons, OkButton } from '../home/style'
import Footerlogo from '../../assets/footer-logo.png'
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import instagram from '../../assets/instagram.svg'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <FooterTriangle />
      
      <FooterContainer>
        <div className="footer-inside" style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100%", gap: "230px"}}>
            <div className="footer-column-1">
                <FooterLogo src={Footerlogo}/>

                <p style={{color: "white", marginTop: "20px"}}>497 Evergreen Rd. Roseville, CA 95673 <br />+44 345 678 903 <br />luxury_hotels@gmail.com</p>
            </div>
            <div className="footer-column-2" style={{color: "white", display: "flex", flexDirection: "column", gap: "20px"}}>
                <Link to={"/"} style={{textDecoration: "none", color: "white"}}>About Us</Link>
                <Link to={"/contact-us"} style={{textDecoration: "none", color: "white"}}>Contact</Link>
                <Link to={"*"} style={{textDecoration: "none", color: "white"}}>Terms & Conditions</Link>
            </div>
            <div className="footer-column-3" style={{color: "white", display: "flex", flexDirection: "column", gap: "17px"}}>
                <Link to={"https:facebook.com"} style={{textDecoration: "none", color: "white"}}><Icons src={facebook}/> Facebook</Link>
                <Link to={"https:twitter.com"} style={{textDecoration: "none", color: "white"}}><Icons src={twitter}/> Twitter</Link>
                <Link to={"https:instagram.com"} style={{textDecoration: "none", color: "white"}}><Icons src={instagram}/> Instagram</Link>
            </div>
            <div className="footer-column-4">
                <p style={{color: "white", marginBottom: "30px"}}>Subscribe to our newsletter</p>
                <div>
                    <input type="email" name="email" placeholder='Email Address' style={{height: "40px", width: "250px", border: "1px solid #E0B973", backgroundColor: "#14274A", borderRadius: "1px", padding: "0 20px", color: "white"}}/>
                    <OkButton>OK</OkButton>
                </div>
            </div>
        </div>
      </FooterContainer>
    </div>
  )
}

export default Footer

