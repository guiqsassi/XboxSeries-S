import styled from "styled-components";

    export const FooterDiv = styled.footer`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;

    `
    export const Container = styled.div`
    width: 60%;
    height: 100%;
    margin: 48px 32px;
    display: flex;
    
    justify-content: space-between;
    @media (max-width: 1400px) {
        width: 70%;
    }    
    @media (max-width: 1100px) {
        width: 80%;
    }    
    @media (max-width: 400px) {
        width: 100%;
    }
    img{
        width: 83px;
    }    
    `
    export const Info = styled.div`
        display: flex;
        gap: 56px;
        h4{
            color: #777;
            font-family: 'Inter', sans-serif;
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            margin: 0;
            line-height: 150%; /* 18px */
        }
        @media (max-width: 1100px) {
            flex-direction: column;
            gap: 0px;
    }    
    `