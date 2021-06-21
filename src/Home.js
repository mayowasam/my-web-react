import React from 'react'
import styled from 'styled-components'
import { keyframes } from 'styled-components'

export const HomeContainer = styled.div`
    width: 80%;
    margin: 40px auto 0; 
    border: 2px solid red;
    height: 60vh;

`

export const HeaderContainer = styled.div`
   width: 80%;
   margin: auto;
   border: 2px solid green;
   padding: 20px;
   
`

export const Header = styled.h1`
    width: 80%;
    font-size: 80px;
    font-weight: bold;
    border: 2px solid green;

   
`

export const Detail = styled.p`
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

export const Talk = styled.a`
    animation: ${shake} 0.9s both;
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

                <Talk href="mailto:'awoyomimayowa@gmail.com">Let's talk 🤺.</Talk> 

            </HeaderContainer>

        </HomeContainer>
    )
}

export default Home
