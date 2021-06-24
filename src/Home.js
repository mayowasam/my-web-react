import React from 'react'
import styled from 'styled-components'
import { keyframes } from 'styled-components'

export const HomeContainer = styled.div`
    width: 80%;
    margin: 0 auto; 
    height: 60vh;
    margin-top: 15vh; 

    @media only screen and (max-width: 600px) {
     width: 100%;
     height: 80vh;
     

   }
`

export const HeaderContainer = styled.div`
   width: 80%;
   margin: auto;
   padding: 20px;

   @media only screen and (max-width: 600px) {
    width: 100%;
    margin: 20px 0;
    padding: 0;
  }
`


const tracking = keyframes`
0% {
    letter-spacing: -0.5em;
    -webkit-transform: translateZ(-700px) translateY(-500px);
            transform: translateZ(-700px) translateY(-500px);
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    -webkit-transform: translateZ(0) translateY(0);
            transform: translateZ(0) translateY(0);
    opacity: 1;
  }


`
export const Header = styled.h1`
    width: 80%;
    font-size: 80px;
    font-weight: bold;
    animation: ${tracking} 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
    
    @media only screen and (max-width: 600px) {
      width: 100%;
      font-size: 60px;
    }
`
const fade = keyframes`
0%{
    opacity: 0
}
100%{ opacity: 1}

`

export const Detail = styled.p`
   font-size: 24px;
   font-weight: 300;
   opacity: .7;
    animation: 2s ${fade} ease-in
`

const vibrate= keyframes`
0% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
  10% {
    -webkit-transform: translate(-2px, -2px);
            transform: translate(-2px, -2px);
  }
  20% {
    -webkit-transform: translate(2px, -2px);
            transform: translate(2px, -2px);
  }
  30% {
    -webkit-transform: translate(-2px, 2px);
            transform: translate(-2px, 2px);
  }
  40% {
    -webkit-transform: translate(2px, 2px);
            transform: translate(2px, 2px);
  }
  50% {
    -webkit-transform: translate(-2px, -2px);
            transform: translate(-2px, -2px);
  }
  60% {
    -webkit-transform: translate(2px, -2px);
            transform: translate(2px, -2px);
  }
  70% {
    -webkit-transform: translate(-2px, 2px);
            transform: translate(-2px, 2px);
  }
  80% {
    -webkit-transform: translate(-2px, -2px);
            transform: translate(-2px, -2px);
  }
  90% {
    -webkit-transform: translate(2px, -2px);
            transform: translate(2px, -2px);
  }
  100% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
   

  
  `


  export const ContactMe = styled.button`
  animation: ${vibrate} 0.5s linear infinite both;
  border: 3px solid #FFB700;    

     
`
export const Talk = styled.a`
    display: inline-block;
    text-decoration: none;
    font-size: 24px;
    font-weight: 300;
    opacity: .7;
     
`



function Home() {
    return (
        <HomeContainer>
            <HeaderContainer>
                <Header>
                    Hello! i am
                    Mayowa Awoyomi
                </Header>

                <Detail>
                    Full-stack developer. I am passionate about helping brands
                    position themselves effectively and help their client build trust in 
                    their brand. 
                </Detail>

                <ContactMe>

                <Talk href="mailto:'awoyomimayowa@gmail.com">Let's talk 🤺.</Talk> 
                </ContactMe>

            </HeaderContainer>

        </HomeContainer>
    )
}

export default Home
