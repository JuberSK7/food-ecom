import React, { useState } from 'react'

import { Nav, NavLink, NavIcon, Bars } from './style'

interface Props {
    
}

export const Navbar = (props: Props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    console.log(toggle)
    return (
        <div>
            <Nav>
                <NavLink>Pizza</NavLink>
                <NavIcon onClick={toggle}>
                <p>Menu</p>
                <Bars />
                </NavIcon>
            </Nav>
        </div>
    )
}
