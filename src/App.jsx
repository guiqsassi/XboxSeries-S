import { GlobalStyle } from "./GlobalStyles.styles"
import NavBar from "./Components/NavBar/NavBar"
import About from "./Components/About/About"
import Home from "./Components/Home/Home"
import GamesBanner from "./Components/GamesBanner/GamesBanner"
import Faq from "./Components/Faq/Faq"
import Footer from "./Components/Footer/Footer"
function App() {

  return (
    <>
    <GlobalStyle/>
    <NavBar></NavBar>
    <Home></Home>
    <About></About>
    <GamesBanner></GamesBanner>
    <Faq></Faq>
    <Footer></Footer>
    </>

  
  )
}

export default App
