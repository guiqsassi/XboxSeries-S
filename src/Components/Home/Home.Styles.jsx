import styled from "styled-components";

import xbox from "../../assets/xbox.png"
import { fade } from "../../GlobalStyles.styles";
export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 900px) {
        height: auto;
        padding: 48px 0px;

    }
    overflow-x: hidden;


`

export const TittleContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: end;
    justify-content: center;
    @media (max-width: 900px) {
        height: auto;
    }

`
export const Tittle = styled.h1`
    color: #FFF;
text-align: center;
font-family: 'Inter', sans-serif;
font-size: 72px;
font-style: normal;
font-weight: 600;
line-height: 115%; /* 82.8px */
margin: 0;
@media  (min-height: 1024px) {
        font-size: 48px;
    }
    @media  (max-width: 900px) {
        font-size: 56px;

}
    @media  (max-width: 500px) {
        font-size: 48px;

}
    h2{
        @media  (min-height: 1024px) {
        font-size: 8px;
    }
    @media  (max-width: 900px) {
        font-size: 16px;

}
    @media  (max-width: 500px) {
        font-size: 8px;

}
    
        color: #9BF00B;
        font-family: 'Inter', sans-serif;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: 1.2px;
text-transform: uppercase;
    }
`
export const MainImage = styled.img`
    width: 1224px;
    height: 753px;
    aspect-ratio: 408 / 251;
    @media  (min-height: 1024px) {
        width: 818px;
        height: 502px;
}
    @media  (max-width: 900px) {
        width: 914px;
        height: 562.29px;
}
    @media  (max-width: 900px) {
        width: 818px;
        height: 502px;
}
    @media  (max-width: 600px) {
        width: 600px;
        height: 369.12px;
}
    @media  (max-width: 500px) {
        width: 500px;
        height: 307px;
}
`