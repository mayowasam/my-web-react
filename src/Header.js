import React from 'react'
import { Link } from 'react-router-dom'
import styled, {keyframes} from 'styled-components'
import Brightness2OutlinedIcon from '@material-ui/icons/Brightness2Outlined'
import Brightness6OutlinedIcon from '@material-ui/icons/Brightness6Outlined'

const HeaderContainer = styled.div`
    display: flex;
    width: 80%;
    height: 15vh;
    align-items: center;
    position: fixed;
    z-index: 1000;
    top: 0;
    background-color: ${({theme}) => theme.body};

   
`

const HeaderLogo = styled(Link)`
        flex:.7;
        font-size:20px;
        text-decoration: none;
        font-weight: bold;
        color: inherit;
        @media only screen and (min-width: 764px) {
            flex: .5
        
        }
    
`
const NavLink = styled.div`
    flex:.3;
    display: flex;
    align-items: center;
    margin-left: auto;
    justify-content: space-evenly;

    @media only screen and (min-width: 764px) {
        flex: .5;
    }

    @media only screen and (max-width: 600px) {
        justify-content: flex-end;
    }
   
`
export const scaleup = keyframes`
0% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  100% {
    -webkit-transform: scale(1.5);
            transform: scale(1.5);
  }
  `
  
export const Links = styled.a`
    text-decoration: none;
    font-size: 16px;
    color: inherit;
    font-weight: 400;

    &:hover{
        animation: ${scaleup} 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
        font-weight: bold;
    }

    @media only screen and (max-width: 764px) {
        padding-left: 5px;
    }
    @media only screen and (max-width: 600px) {
        display: none;
    }
    
`

const heartbeat = keyframes`
from {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: center center;
            transform-origin: center center;
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  10% {
    -webkit-transform: scale(0.91);
            transform: scale(0.91);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  17% {
    -webkit-transform: scale(0.98);
            transform: scale(0.98);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  33% {
    -webkit-transform: scale(0.87);
            transform: scale(0.87);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  45% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
`


const MoonIcon = styled(Brightness2OutlinedIcon)`
    font-size:3rem !important;
    animation: ${heartbeat} 1.5s ease-in-out infinite both;
    border-radius: 17px;
   
`

const SunIcon = styled(Brightness6OutlinedIcon)`
    font-size:3rem !important;
    animation: ${heartbeat} 1.5s ease-in-out infinite both;
`

function Header(props) {
    const {theme, toggle} = props

    return (
        <HeaderContainer>
            <HeaderLogo to="/" >&lt;MAYOWA/&gt;</HeaderLogo>
            <NavLink>
                <Links href="https://drive.google.com/u/0/uc?id=15U4ag2REsOETPkm-Kg3X7LJLeZtqrZWj&export=download" >Resume</Links>
                <Links href="http://medium.com/@mayowaawoyomi">Writings</Links>
                <Links href="mailto:mayowaawoyomi@gmail.com">Contact</Links>
                <div onClick={toggle} className="mui">{theme === 'dark' ? <MoonIcon></MoonIcon> : <SunIcon></SunIcon>}</div>

            </NavLink>
        </HeaderContainer>
    )
}

export default Header
