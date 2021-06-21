import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const FooterContainer = styled.footer`
    width: 80%;
    margin: 0 auto; 
    height: 30vh;
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
function Footer() {
    return (
        <FooterContainer>
            <FooterA href="http://">LinkedIn</FooterA>
            <FooterA href="http://github.com/mayowasam">Github</FooterA>
            <FooterLink to="/about">About</FooterLink>
            <FooterLink to="/project">Project</FooterLink>
        </FooterContainer>
    )
}

export default Footer