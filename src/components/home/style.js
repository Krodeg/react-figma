import styled from "styled-components";

export const Container = styled.div`
    height: 900px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -5;
`;

export const ImageWrapper = styled.img`
    width: 256px;
    height: 149px;
`

export const HeaderContainer = styled.div`
    position: relative;
    z-index: 3;
    width: 100%;
    margin-top: 100px;
    padding: 0 250px;

`

export const HeaderDiv = styled.div`
    border: 10px solid red;
    z-index: 5;
    width: 100px;
    height: 100px;
`

export const BookNow = styled.button`
    width: 180px;
    height: 50px;
    color: white;
    background-color: #E0B973;
    border: none;
    cursor: pointer;
    border-radius: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 18px;
    font-size: 16px;
    font-weight: 700;
    margin: auto;
`

export const Icon = styled.img`
    width: 20px;
    height: 20px;
`

export const Down = styled.img`
    width: 40.595px;
    height: 40.841px;
    cursor: pointer;
`

export const Explore = styled.button`
    width: 150px;
    background-color: #E0B973;
    cursor: pointer;
    border-radius: 5px;
    height: 40px;
    border: none;
    color: white;
`

export const HotelImages = styled.img`
    width: 600px;
    height: 400px;
`

export const ArrowButtons = styled.img`
    width: 70px;
    cursor: pointer;
    margin-bottom: 109px;
`

export const FooterTriangle = styled.div`
    background: #14274A;
    border-radius: 10px;
    position: relative;

    &::after {
        content: ''; 
        position: absolute; 
        left: -65px; 
        bottom: 0px;
        border: 66px solid transparent; 
        border-bottom: 50px solid #14274A;
   }
`

export const FooterContainer = styled.div`
    height: 300px;
    width: 100%;
    background-color: #14274A;
`

export const FooterLogo = styled.img``

export const Icons = styled.img`
    width: 20px;
    height:20px;
`

export const OkButton = styled.button`
    width: 60px;
    height: 40px;
    background-color: #E0B973;
    color: black;
    border: none;
    border-radius: 3px;
    cursor: pointer;
`

export const FacilitiesImg = styled.img`
    width: 800px;
    margin-bottom: 100px;
`

export const RoomsImg = styled.img`
    width: 800px;
`

export const Description = styled.div`
    width: 800px;
    height: 70px;
    background-color: #14274A;
    color: white;
    font-size: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 900;
    margin-top: -5px;
`

export const RoomsIcon = styled.img`
    height: 30px;
    width: 30px;
`

export const RoomsButton = styled.button`
    width: 130px;
    height: 40px;
    background-color: #E0B973;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`