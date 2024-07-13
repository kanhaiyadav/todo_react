import React from "react";
import { HomeNavItemContainer } from "./HomeNavItem.styles";
const HomeNavItem = ({ link, children, style }) => {

    const activeStyle = {
        backgroundColor: "#EE7214",
        color: "white",
        boxShadow: "2px 2px 3px 2px rgba(0, 0, 0, 0.2)",
        ...style
    }
    return (
        <HomeNavItemContainer
            to={link}
            end
            style={({ isActive }) => isActive ? activeStyle : { ...style }}
            className={"home-nav-item"}
        >
            {children}
        </HomeNavItemContainer>
    )
};

export default React.memo(HomeNavItem);