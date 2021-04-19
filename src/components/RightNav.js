import React from 'react'
import styled from 'styled-components'
import * as FiIcons from 'react-icons/fi'

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;

    li {
        padding: 13px 10px;
    }

    @media (max-width: 600px) {
        flex-flow: column nowrap;
        background-color: #02215f;
        position: fixed;
        transform:  ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 100vh;
        width: 300px;
        padding-top: 3.5rem;

        li {
            color: white;
        }
    }
`

export default function RightNav({open}) {
    return (
        <Ul open={open}>
                <li>Accueil <FiIcons.FiHome /></li>
                <li>Projets <FiIcons.FiClipboard /></li>
                <li>Contact <FiIcons.FiUser /></li> 
        </Ul>
    )
}


