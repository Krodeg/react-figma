import React from 'react'
import Buttons from '../../assets/arrow-buttons.svg'
import { ArrowButtons } from '../home/style'

function FooterTop() {
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "100px"}}>
        <h2 style={{fontSize: "35px"}}>Testimonials</h2>
        <p style={{fontSize: "20px", margin: "10px 0"}}>"Calm, Serene, Retro – What a way to relax and enjoy"</p>
        <small style={{marginBottom: "10px"}}> Mr. and Mrs. Baxter, UK</small>
        <ArrowButtons src={Buttons}/>
    </div>
  )
}

export default FooterTop
