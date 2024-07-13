import React from "react";
import { NavItemContainer } from "./navItem.styles";

const NavItem = ({ to, classname, children }) => {
    const activeStyle = {
        backgroundColor: "white",
        boxShadow: "3px 3px 6px 3px rgba(0, 0, 0, 0.2)",
        width: "100%",
        borderRadius: "10px",
    }
    return (
        <NavItemContainer
            to={to}
            style={({ isActive }) => isActive ? activeStyle : null}
        >
            <div><i className={classname}></i></div>
            <span>{children}</span>
        </NavItemContainer>
    )

}

export default React.memo(NavItem);