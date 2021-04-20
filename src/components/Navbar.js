import styled from 'styled-components'
import React from 'react'
import Burger from './Burger'

const Nav = styled.nav`
    width: 100%;
    height: 75px;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    padding-right:20px;
    padding-left:20px;
    background-color: black;
    color: white;
    text-shadow:1px 1px 1px #04c52d;

    .logo {
        margin: auto 0 auto 0;
        padding: 15 auto;
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
