import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

export const NavItemContainer = styled(NavLink)`
    color: black;
    width: 100%;
    margin: 10px 0px;
    font-size: 1.5rem;
    box-sizing: border-box;
    white-space: nowrap;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
    padding:5px;
    &:hover {
        justify-content: baseline;
        background-color: ${({ theme }) => theme.colors.secondary};
        box-shadow: 3px 3px 6px 3px rgba(0, 0, 0, 0.2);
        width: 100%;
    }
    &:active{
        transform: scale(0.95);
    }
    div{
        width: 27px;
        height:25px;
        display: grid;
        place-content: center;
    } 
`