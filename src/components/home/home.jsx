import React from 'react'
import { ArrowButtons, Container, Explore, HeaderContainer, HotelImages } from './style'
import Header from '../navbar/header'
import Hotel1 from '../../assets/home-1.png'
import Hotel2 from '../../assets/home-2.png'
import Buttons from '../../assets/arrow-buttons.svg'

function Home() {
  return (
    <div>
      <Container/>
      <Header />
      
      <div className="home-container">
        <div style={{display: "flex", justifyContent: "center"}}>
          <p style={{margin: "83px 0", color: "#14274A", fontSize: "25px"}}>All our room types are including complementary breakfast</p>
        </div>

        <div style={{display: "flex", justifyContent: "center", gap: "100px"}}>
          <div className="left" style={{display: "flex", alignItems: "center"}}>
            <div className="line" style={{height: "200px", backgroundColor: "#14274A", width: "1px", marginRight: "30px"}}></div>
            <div style={{display: "flex", flexDirection: "column", gap: "25px"}}>
              <h2 style={{fontSize: "35px"}}>Luxury redefined</h2>
              <p>Our rooms are designed to transport <br />you into an environment made for leisure. <br />Take your mind off the day-to-day of home <br />life and find a private paradise for yourself.</p>
              <Explore>EXPLORE</Explore>
            </div>
          </div>

          <div className="right">
            <HotelImages src={Hotel1}/>
          </div>
        </div>

        <div style={{display: "flex", justifyContent: "center", gap: "60px", marginTop: "70px"}}>
          <div className="left" style={{display: "flex", alignItems: "center"}}>
            <div className="line" style={{height: "200px", backgroundColor: "#14274A", width: "1px", marginRight: "30px"}}></div>
            <div style={{display: "flex", flexDirection: "column", gap: "25px"}}>
              <h2 style={{fontSize: "35px"}}>Leave your worries in <br />the sand</h2>
              <p>We love life at the beach. Being close <br />to the ocean with access to endless sandy <br />beach ensures a relaxed state of mind. It  <br />seems like time stands still watching the  <br />ocean. </p>
              <Explore>EXPLORE</Explore>
            </div>
          </div>

          <div className="right">
            <HotelImages src={Hotel2}/>
          </div>
        </div>

        <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "100px"}}>
          <h2 style={{fontSize: "35px"}}>Testimonials</h2>
          <p style={{fontSize: "20px", margin: "10px 0"}}>"Calm, Serene, Retro – What a way to relax and enjoy"</p>
          <small style={{marginBottom: "10px"}}> Mr. and Mrs. Baxter, UK</small>
          <ArrowButtons src={Buttons}/>
        </div>
      </div>
    </div>

  )
}

export default Home
