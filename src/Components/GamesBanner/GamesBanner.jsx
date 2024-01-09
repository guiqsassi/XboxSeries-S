import { Container, Banner, BackgroundImage,GameLogo } from "./GamesBanner.style";
import farcry6 from "../../assets/farcry6.png"
import farcry6Logo from "../../assets/FARCRY6-Logo.png"
import forza from "../../assets/forza.png"
import Forza_Logo from "../../assets/Forza_Horizon-Logo.png"
import Fifa from "../../assets/fifa.png"
import Fifa_logo from "../../assets/fifaLogo.svg"
import minecraft from "../../assets/Minecraft.png"
import minecraft_logo from "../../assets/minecraft-Logo.png"
const GammesBanner = () => {
    return ( 
        <Container>
            <Banner>
                <BackgroundImage src={farcry6}></BackgroundImage>
                <GameLogo> <img src={farcry6Logo} alt="" /></GameLogo>
            </Banner>
            <Banner>
                <BackgroundImage src={forza}></BackgroundImage>
                <GameLogo> <img src={Forza_Logo} alt="" /></GameLogo>
            </Banner>
            <Banner>
                <BackgroundImage src={Fifa}></BackgroundImage>
                <GameLogo> <img src={Fifa_logo} alt="" /></GameLogo>
            </Banner>
            <Banner>
                <BackgroundImage src={minecraft}></BackgroundImage>
                <GameLogo> <img src={minecraft_logo} alt="" /></GameLogo>
            </Banner>
        </Container>
     );
}
 
export default GammesBanner;