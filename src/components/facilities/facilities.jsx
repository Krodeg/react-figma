import React from 'react'
import { Container, FacilitiesImg } from '../home/style'
import Header from '../navbar/header'
import facilities from '../../assets/facilities.png'

import facilities1 from '../../assets/facilities-1.png'
import facilities2 from '../../assets/facilities-2.png'
import facilities3 from '../../assets/facilities-3.png'
import facilities4 from '../../assets/facilities-4.png'
import facilities5 from '../../assets/facilities-5.png'
import facilities6 from '../../assets/facilities-6.png'
import FooterTop from '../footer/footerTop'

function Facilities() {
  return (
    <div>
      <Container style={{backgroundImage: `url(${facilities})`}}/>
      <Header/>

      <div className="facilities" style={{marginTop: "83px", display: "flex", flexDirection: "column", alignItems: "center"}}>
        <h1 style={{marginBottom: "30px"}}>FACILITIES</h1>
        <p>We want your stay at our lush hotel to be truly unforgettable.  That is why we give special attention to all of your needs so</p>
        <p>that we can ensure an experience quite uniquw. Luxury hotels offers the perfect setting with stunning views for leisure</p>
        <p style={{marginBottom: "50px"}}>and our modern luxury resort facilities will help you enjoy the best of all.</p>

        <FacilitiesImg src={facilities1}/>
        <FacilitiesImg src={facilities2}/>
        <FacilitiesImg src={facilities3}/>
        <FacilitiesImg src={facilities4}/>
        <FacilitiesImg src={facilities5}/>
        <FacilitiesImg src={facilities6} style={{marginBottom: "-30px"}}/>

        <FooterTop />
      </div>
    </div>
  )
}

export default Facilities
