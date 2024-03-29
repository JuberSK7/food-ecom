import styled from 'styled-components'
import { FaPizzaSlice } from 'react-icons/fa'


export const Nav = styled.div`
background: transparent;
height: 80px;
display: flex;
justify-content: center;
align-items: center;
font-weight: 700;
`


export const NavLink = styled.div`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
cursor: pointer;
`



export const NavIcon = styled.div`
display: block;
position: absolute;
top: 0;
right: 0;
cursor: pointer;
color: #fff;

p{
    transform: translate(-175%, 100%);
    font-weight: bold;
}
`

export const Bars = styled(FaPizzaSlice)`
font-size: 2rem;
transform: translate(-50%, -15%);
top: 12px;

`