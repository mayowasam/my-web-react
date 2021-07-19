import React from 'react'
import styled from 'styled-components'
import { keyframes } from 'styled-components'

export const HomeContainer = styled.div`
  width: 100%;
  margin-top: 20vh;
  padding: 20px 0;


  
  @media only screen and (max-width: 600px) {
    margin-top: 10vh;
    padding: 0 20px;
  }

  
   
`



export const HeaderContainer = styled.div`
  width: 50%;
  margin: auto;

  @media only screen and (max-width: 768px) {
    width: 60%;
  }


  @media only screen and (max-width: 600px) {
    width: 100%;
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
  width:90%;
  padding:2px;
  font-size: 70px;
  font-weight: bold;
  animation: ${tracking} 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
  
  @media only screen and (max-width: 1024px) {
    width: 100%;
    font-size: 3.5rem;

  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    font-size: 3.3rem;

  }

  
  

  @media only screen and (max-width: 500px) {
    width: 100%;
    font-size: 2.7rem;
    padding: 0;
  } 

  @media only screen and (max-width: 400px) {
    width: 100%;
    font-size: 2.5rem;
    padding: 0;
  }

  @media only screen and (max-width: 375px) {
    width: 100%;
    font-size: 2.4rem;

  } 

  @media only screen and (max-width: 360px) {
    width: 100%;
    font-size: 2.2rem;

  }

  

   
`
const fade = keyframes`
  0%{
      opacity: 0
  }
  100%{ opacity: 1}

`

export const Detail = styled.p`
    width:90%;
    font-size: 20px;
    font-weight: 300;
    animation: 2s ${fade} ease-in;
    text-align: justify;

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
animation: ${vibrate} 0.9s linear infinite both;
border: 3px solid ${({theme}) => theme.text};
border-radius: 5px;
   

     
`
export const Talk = styled.a`
  display: inline-block;
  text-decoration: none;
  font-size: 24px;
  font-weight: 300;
  color: ${({theme}) => theme.text};

     
`



function Home() {
    return (
        <HomeContainer>
            <HeaderContainer>
                <Header>
                    Hello! I am
                    Mayowa Awoyomi
                </Header>

                  <Detail>
                  
                  I’m a Full-stack developer. I am passionate about helping brands
                      position themselves effectively. I love the Web and I want to make it better for everyone.
                  </Detail>

                <ContactMe>
                  <Talk href="mailto:mayowaawoyomi@gmail.com">Let's talk 🤺.</Talk> 
                </ContactMe>

            </HeaderContainer>

        </HomeContainer>
    )
}

export default Home
