import styled from 'styled-components'
import featurImg from '../../Images/fturdbg.jpg'

export const FutureContainer = styled.div`
height: 100vh;
background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url(${featurImg});
background-position: center;
background-size: cover;
display:  flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: #fff;
padding: 0 1rem;

h1{
    font-size: 3rem;

}
p{
    margin-bottom: 1rem;
    font-size: 1rem;
}`

export const FutureBtn =styled.button`
font-size; 1.4rem;
padding: 0.6rem 3rem;
border: none;
background: #ffc500;
color: #000;
transition: 0.2s ease-out;

&:hover{
    color: #fff;
    background: #e31837;
    transition: 0.2s ease-out;
    cursor: pointer;
}
`