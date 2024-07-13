import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

export const HomeNavItemContainer = styled(NavLink)`   
    text-decoration: none;
    color: black;
    border-radius: ${({ theme }) => theme.space.base(3)};
    padding: 8px 10px;
    &:hover {
        background-color: white;
        box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.2);

    }
    &:active {
        transform: scale(0.95);
    }
`