import { Header, Container, LogoImg, Nav, List, LinkButton, NavButton } from "./NavBar.Styles";
import logo from "../../assets/logo-xbox.svg"
const NavBar = () => {

    return ( 
        <Header>
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
