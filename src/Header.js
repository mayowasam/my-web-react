import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Brightness2Icon from '@material-ui/icons/Brightness2'
import FlareIcon from '@material-ui/icons/Flare'

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 20px; 
`
const NavLink = styled(Link)`
    text-decoration : none;
    color: inherit;
`
function Header(props) {
    const {theme, toggle} = props

    return (
        <HeaderContainer>
            <NavLink to="/">&lt;MAYOWA/&gt;</NavLink>
            <button onClick={toggle}>{theme === 'dark' ? <Brightness2Icon/> : <FlareIcon/>}</button>
        </HeaderContainer>
    )
}

export default Header
