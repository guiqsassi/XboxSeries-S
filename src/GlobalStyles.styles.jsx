import {createGlobalStyle} from "styled-components"
import keyframes from "styled-components"
export const GlobalStyle = createGlobalStyle`
    body{
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        background-color: #0D100C;
        overflow-x: hidden;
    }
    html{
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }
    #root{
        width: 100%;
        height: auto;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 96px;
    }
    @media (max-width: 1000px) {
        #root{
            gap: 48px;
        }
    }
    @media (max-width: 700px) {
        #root{
            gap: 32px;
        }
    }
    
`
   export const fade = keyframes.div`
        from{
            transform: translateY(-500px);
            opacity: 0
        }
        to{
            transform: translateY(0px);
            opacity: 1
        }
    `