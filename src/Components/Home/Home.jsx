import { Container, TittleContainer, Tittle, MainImage } from "./Home.Styles";
import xbox from "../../assets/xbox.png"
import ScrollReveal from 'scrollreveal'
import { useRef } from "react";

const Home = () => {
    
    const home = useRef()

    ScrollReveal().reveal(home.current, { duration: "2000", distance: "500px", origin: "bottom", easing: "ease", interval: "2000"})
    
    return ( 
        <Container ref={home} className="home">
            <TittleContainer>
                <Tittle>Xbox series X <br /> <h2>Pedido antecipado</h2></Tittle>
            </TittleContainer>
            <MainImage src={xbox}></MainImage>
        </Container>
     );
}
 
export default Home;