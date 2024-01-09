import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    height: 87px;
    position: fixed;
    z-index: 111;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Container = styled.div`
    width: 60%;
    height: 39px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const LogoImg = styled.img`
    width: 112px;
    height: 32px;

`
export const Nav = styled.nav`
    gap: 64px;
    display: flex;
    align-items: center;

`
export const LinkButton = styled.a`
    padding: 6px 10px;
    background-color: rgba(103, 103, 103, 0.39);
    color: #FFF;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.14px;
    text-transform: uppercase;
    border-radius: 50px;

`
export const List = styled.ul`

    gap: 28px;
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
    li{
        list-style: none;
    a{
        text-decoration: none;
        color: #FFF;
        font-family: 'Inter', sans-serif;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        letter-spacing: 0.14px;
        text-transform: uppercase;
        }
}
`
export const NavButton = styled.button`
    background: #9BF00B;
    border: 0px;
    padding: 0px;
    a{
        
        padding: 12px 36px;
        display: flex;
        /* width: 100%; */
        height: 100%;
        text-decoration: none;
        color: #0C0C0C;
        font-family: 'Inter', sans-serif;
        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-transform: uppercase;
        :hover{
            cursor: pointer;
        }
    }
`