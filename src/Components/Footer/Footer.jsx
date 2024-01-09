import { FooterDiv, Container, Info } from "./Footer.styles";
import xbox from "../../assets/logo-xbox.svg"
const Footer = () => {
    return ( 
        
        <FooterDiv>
        <Container>
            <img src={xbox} alt="" />
            <Info>
                <h4>@Microsoft 2022</h4>
                <h4>Todos os direitos reservados</h4>
            </Info>
        </Container>
        </FooterDiv>
        
     );
}
 
export default Footer;