import React from 'react'
import { Container, Description, RoomsButton, RoomsIcon, RoomsImg } from '../home/style'
import Header from '../navbar/header'
import roomsImg from '../../assets/rooms.png'

import Rooms1 from '../../assets/rooms-1.png'
import Rooms2 from '../../assets/rooms-2.png'
import Rooms3 from '../../assets/rooms-3.png'

import roomsIcon from '../../assets/plus.svg'
import FooterTop from '../footer/footerTop'

function Rooms() {
  return (
    <div>
      <Container style={{backgroundImage: `url(${roomsImg})`}}/>
      <Header/>

      <div className="rooms" style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "82px"}}>
        <h1 style={{marginBottom: "20px"}}>ROOMS AND RATES</h1>
        <p>Each of our bright, light-flooded rooms come with everything you could possibly need for a comfortable stay. And yes, </p>
        <p>comfort isn’t our only objective, we also value good design, sleek contemporary furnishing complemented </p>
        <p style={{marginBottom: "60px"}}>by the rich tones of nature’s palette as visible from our rooms’ sea-view windows and terraces. </p>

        <div style={{marginBottom: "50px"}}>
          <div className="img">
            <RoomsImg src={Rooms1}/>
            <Description>SINGLE ROOM</Description>
            <div style={{border: "1px solid #14274A", display: "flex", alignItems: "center", height: "100px", borderRadius: "0 0 5px 5px", padding: "0 100px", justifyContent: "space-between"}}>
              <div className="left" style={{display: "flex", alignItems: "center", gap: "15px"}}>
                <RoomsIcon src={roomsIcon}/>
                <p>VIEW ROOM DETAILS</p>
              </div>
              <div className="right">
                <RoomsButton>$147  Avg/night</RoomsButton>
              </div>
            </div>
          </div>
        </div>


        <div style={{marginBottom: "50px"}}>
          <div className="img">
            <RoomsImg src={Rooms2}/>
            <Description>DOUBLE ROOM</Description>
            <div style={{border: "1px solid #14274A", display: "flex", alignItems: "center", height: "100px", borderRadius: "0 0 5px 5px", padding: "0 100px", justifyContent: "space-between"}}>
              <div className="left" style={{display: "flex", alignItems: "center", gap: "15px"}}>
                <RoomsIcon src={roomsIcon}/>
                <p>VIEW ROOM DETAILS</p>
              </div>
              <div className="right">
                <RoomsButton>$155  Avg/night</RoomsButton>
              </div>
            </div>
          </div>
        </div>


        <div>
          <div className="img">
            <RoomsImg src={Rooms3}/>
            <Description>TWIN ROOM</Description>
            <div style={{border: "1px solid #14274A", display: "flex", alignItems: "center", height: "100px", borderRadius: "0 0 5px 5px", padding: "0 100px", justifyContent: "space-between"}}>
              <div className="left" style={{display: "flex", alignItems: "center", gap: "15px"}}>
                <RoomsIcon src={roomsIcon}/>
                <p>VIEW ROOM DETAILS</p>
              </div>
              <div className="right">
                <RoomsButton>$155  Avg/night</RoomsButton>
              </div>
            </div>
          </div>
        </div>

        <FooterTop/>
      </div>
    </div>
  )
}

export default Rooms
