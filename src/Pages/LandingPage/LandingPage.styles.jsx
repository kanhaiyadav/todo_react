import styled from "styled-components";
import { flexCenter } from "../../styles/mixins";

export const NavContainer = styled.nav`
    box-sizing: content-box;
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    margin: auto;
    width: 80%;
    background-color: ${({ theme }) => theme.colors.secondary};
    padding: 10px 20px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    gap: 30px;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    span{
        font-size: ${({ theme }) => theme.fontSizes.xxl};
        position: relative;
        cursor: default;
        &::before{
            content: "";
            position: absolute;
            width: 100%;
            height: 3px;
            background-color: ${({ theme }) => theme.colors.primary};
            top: 100%;
            transform: scale(0);
            transition: all 0.3s ease;
        }
        &:hover{
            &::before{
                transform: scale(1);
            }
        }
    }
`

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 0;
    z-index: 1000;
    div{
        ${flexCenter}
        flex-direction: column;
        h1{
            font-size: 90px;
        }
        i{
            font-size: 30px;
            color: white;
        }
        button{
            margin: 30px;
            font-size: 30px;
            padding: 15px 25px;
            border-radius: 10px;
            background-color: ${({ theme }) => theme.colors.primary};
            color: ${({ theme }) => theme.colors.textColor};
            border: none;
            cursor: pointer;
            box-shadow: 6px 6px  5px black; /* Add box shadow to raise the button */
            transition: all 0.3s ease;
            font-weight: ${({ theme }) => theme.fontWeights.bold};
            &:hover{
                transform: scale(1.05);
                background-color: ${({ theme }) => theme.colors.hoverColor};
            }
        }
    }
    img {
        width: 55%;
    }
`

export const FeaturesText = styled.div`
    h1{
        color: ${({ theme }) => theme.colors.textColor};
        font-size: 50px;
        margin: 20px 0px;
    }
    ul{
        margin-left: 50px;
        li{
            font-size: 25px;
            margin: 15px 0px;
            padding: 15px 0px;
            box-shadow: 3px 3px 5px black;
            border-radius: 10px;
            padding-left: 20px;
            background-color: #dadada62;
            span{
                font-weight: ${({ theme }) => theme.fontWeights.bold};
            }
        }
    }
`

export const Features = styled.div`
    display: flex;
    justify-content: space-between;
    img{
        width: 46%; 
    }
`


export const LandingPageContainer = styled.div`
    width: 100%;
    height: 100%;
    overflow: auto;
    padding: ${({ theme }) => theme.space.md};
`