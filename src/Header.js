import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Brightness2Icon from '@material-ui/icons/Brightness2'
import FlareIcon from '@material-ui/icons/Flare'

const HeaderContainer = styled.div`
    display: flex;
    width: 80%;
    align-items: center;
    margin: 20px auto 40px; 
`

const HeaderLogo = styled(Link)`
        flex:.7;
        font-size:30px;
        text-decoration: none;
        font-weight: bold;
        color: inherit;

`
const NavLink = styled.div`
    flex:.3;
    display: flex;
    align-items: center;
    margin-left: auto;
    justify-content: space-between;
`

const Links = styled.a`
    text-decoration: none;
    font-size: 25px;
    color: inherit;
    font-weight: 400;

    
`
const MoonIcon = styled(Brightness2Icon)`
    font-size:3rem !important;
`

const SunIcon = styled(FlareIcon)`
    font-size:3rem !important;
`

function Header(props) {
    const {theme, toggle} = props

    return (
        <HeaderContainer>
            <HeaderLogo to="/" >&lt;MAYOWA/&gt;</HeaderLogo>
            <NavLink>
                <Links to="/">Resume</Links>
                <Links href="http://medium.com/mayowaawoyomi">Blog</Links>
                <Links href="mailto:'awoyomimayowa@gmail.com">Contact</Links>
                <div onClick={toggle} className="mui">{theme === 'dark' ? <MoonIcon></MoonIcon> : <SunIcon></SunIcon>}</div>

            </NavLink>
        </HeaderContainer>
    )
}

export default Header
