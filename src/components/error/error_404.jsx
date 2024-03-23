import React from 'react'
import Navbar from '../navbar/navbar';
import { useNavigate } from 'react-router-dom';

function NotFoundPage_404() {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate(-1);
  }

  return (
    <div style={{height: "600px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
      <button onClick={handleNavigate} style={{padding: "10px 30px", cursor: "pointer", border: "none", backgroundColor: "#E0B973"}}>Back</button>
      <h1 style={{fontSize: "100px"}}>PAGE NOT FOUND</h1> <br />
      <h1 style={{fontSize: "100px"}}>404</h1>
    </div>
  );
}

export default NotFoundPage_404