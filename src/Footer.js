import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { scaleup } from './Header'


const FooterContainer = styled.footer`
    display : flex;
    width: 80%;
    position: fixed;
    bottom: 0; 
    background-color: ${({ theme }) => theme.body};
    justify-content: space-between;
    padding: 20px 0;
  

    @media only screen and (min-width: 764px) {
        .toggle{
            display: none;
        }
    }
      
    
    @media only screen and (max-width: 600px) {
        .toggle{
            display: block;
        }
    }

    @media screen and (max-width: 414px) and (min-width: 375px) {
        width: 90%;
     }


    @media only screen and (max-width: 360px) {
        .toggle{
            display: none;
        }
    }
`


const FooterA = styled.a`
    text-decoration: none;
    font-size: 16px;
    color: inherit;
    &:hover{
        animation: ${scaleup} 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;;
    }

    &:active {
        color:  ${({ theme }) => theme.linker};
      };


    @media screen and (max-width: 414px) and (min-width: 375px) {
       padding-right: 3px;
       font-size: 12px;
    }

    @media only screen and (max-width: 600px) {
        font-size: 14px;

    };

   
   
`

export const FooterLink = styled(Link)`
    text-decoration: none;
    font-size: 16px;
    color: inherit;
    &:hover{
        animation: ${scaleup} 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;;
    };

    &:active {
        color:  ${({ theme }) => theme.linker};
      };

    @media screen and (max-width: 414px) and (min-width: 375px) {
        padding-right: 3px;
        font-size: 12px;
     }

    @media only screen and (max-width: 600px) {
        font-size: 14px;

    }

   
  
`
function Footer() {
    return (
        <FooterContainer>
                <FooterA href="https://www.linkedin.com/in/mayowa-samuel-6a8a9b133/">LinkedIn</FooterA>
                <FooterA href="http://github.com/mayowasam">Github</FooterA>
                <FooterLink to="/about">About</FooterLink>
                <FooterLink to="/project">Project</FooterLink>
                <FooterA href="https://drive.google.com/u/0/uc?id=15U4ag2REsOETPkm-Kg3X7LJLeZtqrZWj&export=download" className="toggle">Resume</FooterA>
                <FooterA href="http://medium.com/@mayowaawoyomi" className="toggle">Writings</FooterA>
                <FooterA href="mailto:mayowaawoyomi@gmail.com" className="toggle">Contact</FooterA>

        </FooterContainer>
    )
}

export default Footer