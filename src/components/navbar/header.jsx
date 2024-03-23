import React from 'react'
import { BookNow, Down, HeaderContainer, Icon } from '../home/style'
import calendar from '../../assets/calendar.svg'
import DownArrow from '../../assets/downArrow.svg'

function Header() {
  return (
    <div>
      <HeaderContainer>
        <div className="header-left" style={{color: "white", width: "100%", marginLeft: "230px"}}>
          <h2 style={{fontSize: "50px"}}>WELCOME TO</h2>
          <h1 style={{fontSize: "154px", margin: "-40px -10px"}}>LUXURY</h1>
          <h2 style={{fontSize: "60px"}}>HOTELS</h2>
          <p style={{fontSize: "25px", marginBottom: "100px"}}>Book your stay and enjoy Luxury <br />redefined at the most affordable rates.</p>
        </div>


        <BookNow><Icon src={calendar}/> Book Now</BookNow>

        <div style={{display: "flex", justifyContent: "center"}}>
          <p style={{color: "white", marginTop: "50px", fontSize: "20px", fontWeight: "700"}}>Scroll</p>
        </div>
        
        <div style={{display: "flex", justifyContent: "center", marginTop: "10px"}}>
          <Down src={DownArrow}/>
        </div>

      </HeaderContainer>
    </div>
  )
}

export default Header
