import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {scaleup} from './Header'


const FooterContainer = styled.footer`
    width: 80%;
    position: fixed;
    bottom: 0; 
    margin: 0 140px;

    @media only screen and (max-width: 600px) {
        width: 80%;
        position: fixed;
        margin: 0 40px;
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

const FooterLink = styled(Link)`
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
                <FooterA href="http://">LinkedIn</FooterA>
                <FooterA href="http://github.com/mayowasam">Github</FooterA>
                <FooterLink to="/about">About</FooterLink>
                <FooterLink to="/project">Project</FooterLink>

            </FooterDiv>
        </FooterContainer>
    )
}

export default Footer