import { Container, Banner, TextContainer, Tittle, Paragraph,ControllerImg} from "./About.styles";
import controle from "../../assets/controle-xbox.png"
import ScrollReveal from "scrollreveal";
import { useRef } from "react";
const About = () => {

    const container = useRef()

    ScrollReveal().reveal(container.current, {delay: "500", reset: true })
    return ( 
        <Container ref={container}>
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