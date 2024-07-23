import { createGlobalStyle } from "styled-components";
// import summerImage from "../assets/summer.jpg";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box; 
        color: ${({ theme }) => theme.colors.text};
    }
    body{
        margin: 0px;
        padding: 0px;
        font-family: ${({ theme }) => theme.fontFamily.primary};
        background-image: url(${({ theme }) => theme.images.background1});
        overflow: hidden;
        backdrop-filter: blur(3px);
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
        height: 100vh;
    }
    div#root{
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: sans-serif;
}

    ::-webkit-scrollbar {
        width: 8px;
        height: 5px;
    }

    ::-webkit-scrollbar-corner {
        height: 0;
    }

    ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        border-radius: ${({theme})=>theme.radii.md};
        background-color: transparent;
    }
    
    ::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.colors.primary};
        border-radius: 10px;
    }
`;

export default GlobalStyle;