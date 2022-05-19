import styled from 'styled-components'
import ImgBg from '../../Images/herobg.jpg'


export const HeroContainer = styled.div`
background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url(${ImgBg});
background-position: center;
background-size: cover;

`


export const HeroContent = styled.div`
padding: 2rem;
height: cals(100vh - 80px);
max-height: 100%;`

export const HeroItems = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 0.2rem;
color: #fff;
text-transform: uppercase;
line-height: 1;
fon-weight:bold;
height: 100vh;
max-height: 100%;
width: 650px;
`

export const Headinghero = styled.h1`
font-size: 48px;
font-weight: 900;
box-shadow: 3px 5px #e9a23;
margin-bottom: 1rem;
letter-spacing: 3px;
`

export const Paragrahero= styled.p`
font-size: clamp(2rem, 2.5vw, 3rem);
margin-bottom: 2rem;
`

export const Btnhero = styled.button`
font-size: 1.4rem;
padding: 1rem 4rem;
border: none;
background: #e31837;
color: #fff;
transition: 0.2s ease-out;

&:hover{
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
}`