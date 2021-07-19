import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { scaleup } from './Header'
import {FaGithub} from 'react-icons/fa'
import {AiOutlineLinkedin, AiOutlineMail, AiOutlineProfile} from 'react-icons/ai'
import {IoPersonOutline} from 'react-icons/io5'
import {MdLaptop} from 'react-icons/md'
import {RiQuillPenLine} from 'react-icons/ri'

const FooterContainer = styled.footer`
    display : flex;
    width: 100%;
    padding: 20px 50px;
    position: fixed;
    bottom: 0; 
    background-color: ${({ theme }) => theme.body};
    justify-content: space-between;
  

    @media only screen and (min-width: 764px) {
        .toggle{
            display: none;
        }
    }
      
    
    @media only screen and (max-width: 600px) {
        padding: 20px 20px;
        .toggle{
            display: block;
        }
    }

    


    @media only screen and (max-width: 360px) {
        .toggle{
            display: none;
        }
    }
`


const FooterA = styled.a`
    text-decoration: none;
    font-size: 30px;
    color: inherit;
    &:hover{
        animation: ${scaleup} 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;;
    }

    &:active {
        color:  ${({ theme }) => theme.linker};
      };

    @media only screen and (max-width: 600px) {
        font-size: 40px;

    }
   

   
   
`

export const FooterLink = styled(Link)`
    text-decoration: none;
    font-size: 30px;
    color: inherit;
    &:hover{
        animation: ${scaleup} 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;;
    };

    &:active {
        color:  ${({ theme }) => theme.linker};
    };

      @media only screen and (max-width: 600px) {
        font-size: 40px;

    }
   
  
`
function Footer() {
    return (
        <FooterContainer>
                <FooterA href="https://www.linkedin.com/in/mayowa-samuel-6a8a9b133/"><AiOutlineLinkedin/></FooterA>
                <FooterA href="http://github.com/mayowasam"><FaGithub/></FooterA>
                <FooterLink to="/about"><IoPersonOutline/></FooterLink>
                <FooterLink to="/project"><MdLaptop/></FooterLink>
                <FooterA href="https://drive.google.com/u/0/uc?id=15U4ag2REsOETPkm-Kg3X7LJLeZtqrZWj&export=download" className="toggle">< AiOutlineProfile/></FooterA>
                <FooterA href="http://medium.com/@mayowaawoyomi" className="toggle"><RiQuillPenLine/></FooterA>
                <FooterA href="mailto:mayowaawoyomi@gmail.com" className="toggle">< AiOutlineMail/></FooterA>

        </FooterContainer>
    )
}

export default Footer