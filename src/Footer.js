import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { scaleup } from './Header'


const FooterContainer = styled.footer`
    width: 80%;
    position: fixed;
    bottom: 0; 
    margin: 0 140px;
    background-color: ${({ theme }) => theme.body};
    padding: 0 20px;

    @media only screen and (min-width: 1024px)  {
        width: 100%;
        margin: 0;
        z-index: 1000;
        background-color: ${({ theme }) => theme.body};
        .toggle{
            display: none;
        }
      }

    @media only screen and (max-width: 1024px)  {
        width: 100%;
        margin: 0;
        z-index: 1000;
        background-color: ${({ theme }) => theme.body};
        .toggle{
            display: none;
        }
      }
      @media only screen and (min-width: 600px)  {
        width: 100%;
        margin: 0;
        z-index: 1000;
        background-color: ${({ theme }) => theme.body};
 
      }

      @media only screen and (max-width: 600px) {
        width: 100%;
        position: fixed;
        margin: 0;
        z-index: 1000;
        background-color: ${({ theme }) => theme.body};


        .toggle{
            display: none;
        }

        @media only screen and (min-width: 400px) {
            width: 100%;
            position: fixed;
            margin: 0;
            z-index: 1000;
            background-color: ${({ theme }) => theme.body};

            .toggle{
                display: block;
        }


       
`

const FooterDiv = styled.div`
    width: 100%;
    padding:20px 0;
    display : flex;
    justify-content: space-between;
    
 
   

`

const FooterA = styled.a`
    text-decoration: none;
    font-size: 16px;
    color: inherit;
    &:hover{
        animation: ${scaleup} 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;;
    }

    @media only screen and (max-width: 600px) {
        font-size: 12px;

      }
`

export const FooterLink = styled(Link)`
    text-decoration: none;
    font-size: 16px;
    color: inherit;
    &:hover{
        animation: ${scaleup} 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;;
    }

    @media only screen and (max-width: 600px) {
        font-size: 12px;

      }
`
function Footer() {
    return (
        <FooterContainer>
            <FooterDiv>
                <FooterA href="https://www.linkedin.com/in/mayowa-samuel-6a8a9b133/">LinkedIn</FooterA>
                <FooterA href="http://github.com/mayowasam">Github</FooterA>
                <FooterLink to="/about">About</FooterLink>
                <FooterLink to="/project">Project</FooterLink>
                <FooterA href="https://drive.google.com/file/d/14LHhyfO4baXkg2SMuLcwyLZhauyvdG6_/view?usp=drivesdk" className="toggle">Resume</FooterA>
                <FooterA href="http://medium.com/mayowaawoyomi" className="toggle">Writings</FooterA>
                <FooterA href="mailto:'mayowaawoyomi@gmail.com" className="toggle">Contact</FooterA>

            </FooterDiv>
        </FooterContainer>
    )
}

export default Footer