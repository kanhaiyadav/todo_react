import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }
    body{
        margin: 0px;
        padding: 0px;
        font-family: 'Poppins', sans-serif;
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
        border-radius: 10px;
        background-color: transparent;
    }
    
    ::-webkit-scrollbar-thumb {
        background-color: #ee7214;
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
            background-color: darken(#ee7214, 5%); /* Optional: Darken color on hover */
            border-radius: 10px;
        }
`;

export default GlobalStyle;