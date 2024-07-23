import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

export const HomeNavItemContainer = styled(NavLink)`   
    text-decoration: none;
    color: ${({ theme }) => theme.colors.textColor};
    border-radius: ${({ theme }) => theme.space.base(3)};
    padding: 8px 10px;
    cursor: default;
    &:hover {
        filter: drop-shadow(2px 2px 3px #414141);
        background-color: ${({ theme }) => theme.colors.hoverColor};;
    }
    &:active {
        transform: scale(0.95);
    }
    
`