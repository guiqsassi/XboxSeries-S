import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;

`
export const Banner = styled.div`
    width: 60%;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: space-between;

`
export const TextContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    gap: 24px;
    
    justify-content: center;
    flex-direction: column;
`

export const Tittle = styled.h1`
    width: 50%;
    margin: 0;
    color: #9BF00B;
    font-family: 'Inter', sans-serif;
    font-size: ${(props)=> props.variant? props.variant: "64px"};
    font-style: normal;
    font-weight: 600;
    line-height: 130%; /* 83.2px */
    span{
        color: white;
    }
`
export const Paragraph = styled.p`
    color: #C0C0C0;
    font-family: 'Inter', sans-serif;
font-size: 24px;
font-style: normal;
font-weight: 500;
line-height: 140%; /* 33.6px */
margin: 0;
`
export const ControllerImg = styled.img`
width: 500px;
height: 347.783px;
flex-shrink: 0;
`