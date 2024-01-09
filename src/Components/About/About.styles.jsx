import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 96px 0px;


`
export const Banner = styled.div`
    width: 60%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 1600px) {
        width: 70%;
    }
    @media (max-width: 1100px) {
        width: 90%;
    }
    @media (max-width: 700px) {
       flex-direction: column;
       gap: 48px;
    }

`
export const TextContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    gap: 24px;
    
    justify-content: center;
    flex-direction: column;
    @media (max-width: 700px) {
        width: 100%;
        align-items: center;
    }

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
    @media (max-width: 1600px) {
        font-size:${(props)=> props.variant? "40px" : "60px"};
        width: ${(props)=> { if(props.variant){ return "100%"}}};
        text-align: ${(props)=> { if(props.variant){ return "center"}}};
    }
    @media (max-width: 1000px) {
        font-size:${(props)=> props.variant? "36px" : "48px"};
    }
    @media (max-width: 400px) {
        font-size:${(props)=> props.variant? "30px" : "40px"};
    }
    @media (max-width: 300px) {
       font-size: 32px;
    }
    span{
        color: white;
    }
    @media (max-width: 700px) {
        width: 100%;
        text-align: center;
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
@media (max-width: 1600px) {
       font-size: 20px;
    }
@media (max-width: 1000px) {
       font-size: 16px;
    }
@media (max-width: 400px) {
       font-size: 12px;
    }
    @media (max-width: 700px) {
       text-align: center;
    }
`
export const ControllerImg = styled.img`
width: 500px;
height: 347.783px;
flex-shrink: 0;
@media (max-width: 1600px) {
        width: 400px;
        height: auto;
    }
@media (max-width: 1000px) {
        width: 300px;
        height: auto;
    }
    @media (max-width: 700px) {
        width: 350px;
        height: auto;    }
    @media (max-width: 400px) {
        width: 300px;
        height: auto;    
        }
    @media (max-width: 350px) {
        width: 250px;
        height: auto;    
        }
    @media (max-width: 300px) {
        width: 200px;
        height: auto;    
        }
`