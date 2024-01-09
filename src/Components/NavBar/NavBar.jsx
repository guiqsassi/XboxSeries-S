import { Header, Container, LogoImg, Nav, List, LinkButton, NavButton } from "./NavBar.Styles";
import logo from "../../assets/logo-xbox.svg"
import ScrollReveal from "scrollreveal";
import { useRef } from "react";
const NavBar = () => {
    const header = useRef()
    ScrollReveal().reveal(header.current,  { duration: "1000", distance: "200px", origin: "top", easing: "ease", interval: "2000"})

    return ( 
        <Header ref={header}>
            <Container>
                <Nav>
                <LogoImg src={logo}></LogoImg>
                    <List>
                        <li>
                            <LinkButton href="">Visão geral</LinkButton>
                        </li>
                        <li> 
                            <a href="">jogos</a>
                        </li>
                        <li> 
                            <a href="">galeria</a>
                        </li>
                        <li> 
                            <a href="">unbox</a>
                        </li>
                    </List>
                </Nav>
                <NavButton> <a href=""> Ver disponibilidade</a> </NavButton>
            </Container>
        </Header>
     );
}
 
export default NavBar;
