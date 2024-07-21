import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

export const HomeNavItemContainer = styled(NavLink)`   
    text-decoration: none;
    color: black;
    border-radius: ${({ theme }) => theme.space.base(3)};
    padding: 8px 10px;
    cursor: default;
    &:hover {
        background-color: white;
    filter: drop-shadow(2px 2px 3px rgb(0, 0, 0));
    }
    &:active {
        transform: scale(0.95);
    }
`