import { Container, TittleContainer, Tittle, MainImage } from "./Home.Styles";
import xbox from "../../assets/xbox.png"
const Home = () => {
    
    return ( 
        <Container>
            <TittleContainer>
                <Tittle>Xbox series X <br /> <h2>Pedido antecipado</h2></Tittle>
            </TittleContainer>
            <MainImage src={xbox}></MainImage>
        </Container>
     );
}
 
export default Home;