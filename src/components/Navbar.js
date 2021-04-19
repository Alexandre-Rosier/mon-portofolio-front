import styled from 'styled-components'
import React from 'react'
import Burger from './Burger'

const Nav = styled.nav`
    width: 100%;
    height: 55px;
    border-bottom: 2px solid black;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    padding-right:20px;
    padding-left:20px;

    .logo {
        padding: 15px 0;
    }
`

export default function Navbar() {
    return (
        <Nav>
            <div  className='logo'>
                Nav bar
            </div>
            <Burger />
        </Nav>
    )
}
