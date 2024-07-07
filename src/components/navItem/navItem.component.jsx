import React from "react";
import './navItem.styles.scss';
import { NavLink } from "react-router-dom";

const NavItem = ({ to, classname, children }) => {
    return(
        <NavLink
            to={to}
        >
            <li>
                <i className={classname}></i>
                <span>{children}</span>
            </li>
        </NavLink>
    )

}

export default NavItem;