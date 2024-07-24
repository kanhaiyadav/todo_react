import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { flexCenter } from "../../styles/mixins";

export const NavContainer = styled.nav`
    box-sizing: content-box;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 40px;
    background: transparent;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    justify-content: baseline;
    padding: 10px;
    transition: width 0.1s linear;
    
    &:hover {
        width: 190px;
    }
    &:hover span {
        display: inline-block;
    }
    span{
        font-size: 1.1rem;
        margin: 0px 0px 0px 10px;
        display: none;
        white-space: nowrap;
    }
    .active{
        background-color: ${({ theme }) => theme.colors.primary};
        width: 100%;
    }
`

export const HeaderContainer = styled(Link)`
    text-decoration: none;
    position: relative;
    background-color: ${({ theme }) => theme.colors.secondary};
    border: 2px solid rgba(82, 81, 81, 0.685);
    min-width: 43px;
    width: 100%;
    border-radius: ${({ theme }) => theme.radii.md};
    padding: ${({ theme }) => theme.space.base()};
    flex-direction: row;
    ${flexCenter};
    img {
        width: 33px;
    }
    span {
        font-size: ${({ theme }) => theme.fontSizes.xxxl};
        position: relative;
        top: 4px;
        left: -8px;
        font-weight: ${({ theme }) => theme.fontWeights.black};
        font-style: italic;
        color: #3c4d5d;
        display: none;
    }
`