import React from "react";
import "./HomeNavItem.styles.scss";
import { NavLink } from "react-router-dom";

const HomeNavItem = ({ link, children }) => {
    
    const activeStyle = {
        backgroundColor: "#EE7214",
        color: "white",
        boxShadow: "2px 2px 3px 2px rgba(0, 0, 0, 0.2)",
    }
    return (
        <NavLink
            to={link}
            end
            style={({ isActive })=> isActive ? activeStyle : null}
            className={"home-nav-item"}
        >
            {children}
        </NavLink>
    )
};

export default HomeNavItem;