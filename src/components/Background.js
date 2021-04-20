import React from 'react'
import styled from 'styled-components'

const BackgroundStyle = styled.nav`
    display:flex;
    text-align:center;
    height: 638px;
    background: url('/background.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    align-items: center;


    h1 {
        margin: auto;
        font-size:300%;
        color: white;
        text-shadow:2px 2px 2px #04c52d;
    }

`

export default function Background() {
    return (
        <BackgroundStyle>
            <h1>Portfolio</h1>
        </BackgroundStyle>
    )
}


