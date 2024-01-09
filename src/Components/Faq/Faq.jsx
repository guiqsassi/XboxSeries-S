import { Container, FaqBanner, Details, List } from "./Faq.Styles";
import { Tittle } from "../About/About.styles";
import { useRef } from "react";
import ScrollReveal from "scrollreveal";
const Faq = () => {
    const container = useRef()

    ScrollReveal().reveal(container.current, {delay: "500", reset: true})

    return ( 
        <Container ref={container}>
            <FaqBanner>
                <Tittle variant={"48px"}>
                Perguntas <span>frequentes</span>
                </Tittle>
                <List>
                    <li>
                        <Details >
                            <summary><h3>Meus jogos anteriores do Xbox vão funcionar no Xbox Series X?</h3> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
  <path d="M2 1.2832L7 6.2832L12 1.2832" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                            </summary>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                        </Details>
                    </li>
                    <li>
                        <Details isOpen={(e)=>{ return e.target.value}}>
                            <summary> <h3> O que está incluído no Xbox Series X?</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
  <path d="M2 1.2832L7 6.2832L12 1.2832" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                            </summary>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Details>
                    </li>
                    <li>
                        <Details isOpen={(e)=>{ return e.target.value}}>
                            <summary><h3>Como sei se minha TV é compatível com 4K?</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
  <path d="M2 1.2832L7 6.2832L12 1.2832" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                            </summary>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Details>
                    </li>
                </List>
            </FaqBanner>
        </Container>
     );
}
 
export default Faq;