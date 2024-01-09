import { Container, Banner, TextContainer, Tittle, Paragraph,ControllerImg} from "./About.styles";
import controle from "../../assets/controle-xbox.png"
const About = () => {
    return ( 
        <Container>
            <Banner>
                <TextContainer>
                    <Tittle>Desempenho <br /> <span>aperfeiçoado</span></Tittle>
                    <Paragraph> O controle sem fio Xbox traz um design elegante, conforto refinado e compartilhamento instantâneo para um favorito comum.</Paragraph>
                </TextContainer>
                <ControllerImg src={controle}></ControllerImg>
            </Banner>
        </Container>
     );
}
 
export default About;