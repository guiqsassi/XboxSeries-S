import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const FaqBanner = styled.div`
    padding: 48px 32px;
    width: 60%;
    height: 553px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    @media (max-width: 1400px) {
        width: 70%;
    }
    @media (max-width: 1000px) {
        width: 80%;
    }
    @media (max-width: 700px) {
        width: 100%;
    }
    
 `
 export const Details = styled.details`
    width: 100%;
    &[open]{
        svg{
            transform: rotate(180deg);
            transition: 0.5s;
            stroke: #9BF00B;
        }
    }
    svg{
            transform: rotate(0deg);
            transition: 0.5s;
            width: 30px;
            stroke: white;
        }
    :hover{
        cursor: pointer;
    }
    p{
        margin: 0;
        color: #C0C0C0;
        font-family: 'Inter', sans-serif;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 150%; /* 27px */
        padding: 12px 0px 24px 0px;
        @media (max-width: 1400px) {
        font-size: 16px;
    }
    @media (max-width: 1000px) {
        font-size: 14px;
    }
    @media (max-width: 650px) {
        font-size: 12px;
    }

    }
    border-bottom: 1px solid #2E2E2E;
    summary{
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        padding:32px 0px ;
    h3{
        color: #FFF;
        font-family: 'Inter', sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 36px */
    @media (max-width: 1400px) {
        font-size: 20px;
    }
    @media (max-width: 1000px) {
        font-size: 16px;
    }
    @media (max-width: 650px) {
        font-size: 14px;
    }
    }
    list-style: none;
    ::-webkit-details-marker{
    display: none;
}

    }
 `
 export const List = styled.ul`
    padding: 0;
    
    li{
        list-style: none;
    }
 `