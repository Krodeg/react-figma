import React from 'react'
import { LoginButton } from '../home/style'
import { Link, useNavigate } from 'react-router-dom'

function Signup() {
    const navigate = useNavigate();
    
    function handleNavigate() {
        navigate(-1);
    }

  return (
    <div style={{display: "flex", justifyContent: 'center', alignItems: "center", height: "100vh", flexDirection: 'column'}}>
      <h1>WELCOME</h1> <br />
      <form action="#" style={{backgroundColor: "#E6E7E3", width: "500px", height: "450px", display: "flex", flexDirection: "column", borderRadius: "20px 20px 0 0", padding: "30px 50px"}}>
        <div>
            <label htmlFor="name">Name:</label> <br />
            <input type="text" name="name" id="name" style={{border: "none", borderBottom: "1px solid black", backgroundColor: "#E6E7E3", width: "100%", fontSize: "17px", margin: "10px 0 20px 0"}}/> <br />
        </div>

        <div>
            <label htmlFor="pwd">Password:</label> <br />
            <input type="password" name="pwd" id="pwd"  style={{border: "none", borderBottom: "1px solid black", backgroundColor: "#E6E7E3", width: "100%", fontSize: "17px", margin: "10px 0"}}/>
        </div>

        <div>
            <label htmlFor="pwd">Confirm password:</label> <br />
            <input type="password" name="pwd" id="pwd"  style={{border: "none", borderBottom: "1px solid black", backgroundColor: "#E6E7E3", width: "100%", fontSize: "17px", margin: "10px 0"}}/>
        </div>

        <div style={{display: "flex", alignItems: "center", marginTop: "20px"}}>
            <label htmlFor="remember">Remember me</label>
            <input type="checkbox" name="remember" id="remember" checked style={{marginLeft: "10px"}}/>
        </div>

        <div style={{display: "flex", justifyContent: "center"}}>
            <LoginButton>SIGN UP</LoginButton>
        </div>

        <div>
            <Link onClick={handleNavigate}>You have Account?</Link>
            
        </div>
      </form>
    </div>
  )
}

export default Signup
