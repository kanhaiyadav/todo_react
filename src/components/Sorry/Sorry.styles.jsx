import styled from "styled-components";
import Main from "../main/main.component";
import { flexCenter } from "../../styles/mixins"


export const Info = styled.section`
    background-color: ${props => props.theme.colors.secondary};
    font-family: ${props => props.theme.fontFamily.primary};
    padding: ${props => props.theme.space.md};
    border-radius: ${props => props.theme.space.md};
    border:3px dashed ${props => props.theme.colors.primary};
    ul{
        margin-left: 20px;
        li{
            margin: 10px 0px;
        }
        button{
            font-size: ${props => props.theme.fontSizes.md};
            padding: 2px 10px;
        }
    }
`;


export const SorryContainer = styled(Main)`
    height: 84vh;
    width: 68vw;
    h1{
        color: ${props => props.theme.colors.textColor};
        font-size: 3rem;
        margin: 10px 0px;
    }
    div{
        height: 50%;
        overflow: hidden;
        ${flexCenter}
        img{
            margin-top: -50px;
            height: 150%;
        }
    }
`;