import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {keyframes } from 'styled-components'

import './HomepageTwo.css'

const HomeContainer = styled.div`
    width: 80%;
    margin: 40px auto 0; 
    border: 2px solid red;
`

const HeaderContainer = styled.div`
    width: 80%;
    min-height: 56vh;
    margin: auto;
    border: 2px solid green;
    padding: 20px;
   
`

const Header = styled.h1`
   font-size: 80px;
   font-weight: bold;
   whitespace: 'wrap';
  
   
`

const Detail = styled.p`
   font-size: 24px;
   font-weight: 300;
   opacity: .7
     
`

const shake= keyframes`
    0% {
      -webkit-transform: translateY(45px);
              transform: translateY(45px);
      -webkit-animation-timing-function: ease-in;
              animation-timing-function: ease-in;
      opacity: 1;
    }
    24% {
      opacity: 1;
    }
    40% {
      -webkit-transform: translateY(24px);
              transform: translateY(24px);
      -webkit-animation-timing-function: ease-in;
              animation-timing-function: ease-in;
    }
    65% {
      -webkit-transform: translateY(12px);
              transform: translateY(12px);
      -webkit-animation-timing-function: ease-in;
              animation-timing-function: ease-in;
    }
    82% {
      -webkit-transform: translateY(6px);
              transform: translateY(6px);
      -webkit-animation-timing-function: ease-in;
              animation-timing-function: ease-in;
    }
    93% {
      -webkit-transform: translateY(4px);
              transform: translateY(4px);
      -webkit-animation-timing-function: ease-in;
              animation-timing-function: ease-in;
    }
    25%,
    55%,
    75%,
    87% {
      -webkit-transform: translateY(0px);
              transform: translateY(0px);
      -webkit-animation-timing-function: ease-out;
              animation-timing-function: ease-out;
    }
    100% {
      -webkit-transform: translateY(0px);
              transform: translateY(0px);
      -webkit-animation-timing-function: ease-out;
              animation-timing-function: ease-out;
      opacity: 1;
    }
  
  `

const Talk = styled.a`
    animation: ${shake} 0.9s both;
    text-decoration: none;
    font-size: 24px;
    font-weight: 300;
    opacity: .7;
     
`

const Footer = styled.footer`
    min-height: 30vh;
    display : flex;
    align-items : flex-end;
    border: 2px solid blue;
    justify-content: space-between;
    padding: 20px 0;

`

const FooterA = styled.a`
    text-decoration: none;
    font-size: 25px;
    color: inherit;

`

const FooterLink = styled(Link)`
    text-decoration: none;
    font-size: 25px;
    color: inherit;

`

function HomepageTwo() {
    return (
        <HomeContainer>
            <HeaderContainer className="headerH">
                <Header >
                    Hi! 
                </Header>

                <Detail >
                    A problem-solvin' language-learnin' sunuvabish 🙊. Has the mind 🧠 of an artist 🎨 and the keen eye 👀 of a growth engineer 📈.
                </Detail>

                <Talk href="mailto:'awoyomimayowa@gmail.com" className="headerH">Hit me! 🏌️.</Talk> 

            </HeaderContainer>
            <Footer>
                <FooterA href="http://">LinkedIn</FooterA>
                <FooterA href="http://github.com/mayowasam">Github</FooterA>
                <FooterLink to="/about">About</FooterLink>
                <FooterLink to="/project">Project</FooterLink>
            </Footer>

        </HomeContainer>
    )
}

export default HomepageTwo
