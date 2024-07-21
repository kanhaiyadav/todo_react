import React from "react";
import { HomeNavItemContainer } from "./HomeNavItem.styles";
const HomeNavItem = ({ link, children, style }) => {

    const activeStyle = {
        backgroundColor: "#EE7214",
        color: "white",
        filter: "drop-shadow(3px 3px 2px #414141)",
        ...style
    }
    return (
        <HomeNavItemContainer
            to={link}
            end
            style={({ isActive }) => isActive ? activeStyle : { ...style }}
        >
            {children}
        </HomeNavItemContainer>
    )
};

export default React.memo(HomeNavItem);