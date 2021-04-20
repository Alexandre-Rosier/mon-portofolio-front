import React, { useState, useEffect } from 'react'
import RightNav from './RightNav'
import styled from 'styled-components'

const StyledBurger = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 15px;
    right: 30px;
    margin-top: auto;
    margin-bottom: auto;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    z-index: 20;
    display: none;


    @media ( max-width: 600px) {
        display: flex;
    } 

    div {
        widht: 2rem;
        height: 0.25rem;
        background-color: ${({open}) => open ? 'white' : 'white'};
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.1s linear;

        &:nth-child(1) {
            transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }
        &:nth-child(2) {
            transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
            opacity:  ${({ open }) => open ? 0 : 1};
        }
        &:nth-child(3) {
            transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
`;

export default function Burger() {
    const [open, setOpen] = useState(false)
    const [largeur, setLargeur] = useState(window.innerWidth)

    useEffect(() => {
        const changeWidth = () => {
            setLargeur(window.innerWidth)

            if(window.innerWidth > 500) {
                setOpen(false)
            }
        }
        window.addEventListener('resize', changeWidth);
        return () => {
            window.removeEventListener('resize', changeWidth);
        }
    },[])

    return (
        <>
            <StyledBurger open={open} onClick={() => setOpen(!open) }>
                <div />
                <div />
                <div />
            </StyledBurger>
            <RightNav open={open}/>
        </>
        
    )
}

