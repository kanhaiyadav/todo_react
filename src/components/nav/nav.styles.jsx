import { Link } from "react-router-dom";
import { styled } from "styled-components";

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
        border-left: 5px solid #EE7214;
        box-shadow: 3px 3px 6px 3px rgba(0, 0, 0, 0.2);
        width: 100%;
    }
`

export const HeaderContainer = styled(Link)`
    text-decoration: none;
    position: relative;
    background-color: ghostwhite;
    border: 2px solid rgba(82, 81, 81, 0.685);
    min-width: 43px;
    width: 100%;
    border-radius: 10px;
    padding: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    img {
        width: 33px;
    }
    span {
        font-size: 1.5rem;
        position: relative;
        top: 4px;
        font-weight: 900;
        font-style: italic;
        color: #3c4d5d;
        display: none;
    }
`