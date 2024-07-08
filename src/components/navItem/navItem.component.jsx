import React from "react";
import './navItem.styles.scss';
import { NavLink } from "react-router-dom";

const NavItem = ({ to, classname, children }) => {
    const activeStyle = {
        backgroundColor: "white",
        boxShadow: "3px 3px 6px 3px rgba(0, 0, 0, 0.2)",
        width: "100%",
        borderRadius: "10px",
    }
    return (
        <NavLink
            to={to}
            style={ ({ isActive }) => isActive ? activeStyle : null }
        >
            <li>
                <i className={classname}></i>
                <span>{children}</span>
            </li>
        </NavLink>
    )

}

export default NavItem;