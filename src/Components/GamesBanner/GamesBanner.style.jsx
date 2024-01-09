import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
`
export const Banner = styled.div`
    width: 25%;
    height: 800px;
    position: relative;
    overflow: hidden;
    transition: 1s ease-in-out ;
    display: flex;
    
    align-items: end;
    justify-content: center;
    :hover{
        transform: scale(1);
        cursor: pointer;
        transition: 1s ease-in-out ;
        filter: brightness(1);


    }
`
export const BackgroundImage = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
    transform: scale(1.1);
    object-fit: cover;
    top: 0;
    filter: brightness(0.8);
    transition: 1s ease-in-out ;


`
export const GameLogo = styled.div`
    height: 15%;
    width: 100%;
    z-index: 1;
    display: flex;
    align-items: start;
    justify-content: center;
`