import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import { flexCenter } from "../../styles/mixins";

export const NavItemContainer = styled(NavLink)`
    color: ${({ theme }) => theme.colors.textColor};
    width: 100%;
    margin: ${({ theme }) => theme.space.base(2)} 0px;
    font-size: ${({ theme }) => theme.fontSizes.xxxl};
    box-sizing: border-box;
    white-space: nowrap;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
    padding:${({ theme }) => theme.space.base()};
    border-radius: ${({ theme }) => theme.radii.sm};
    &:hover {
        justify-content: baseline;
        background-color: ${({ theme }) => theme.colors.hoverColor};
        box-shadow: 3px 3px 6px 3px rgba(0, 0, 0, 0.2);
        width: 100%;
    }
    &:active{
        transform: scale(0.95);
    }
    div{
        width: 27px;
        height:25px;
        ${flexCenter};
        margin-left: 2px;
    } 
`