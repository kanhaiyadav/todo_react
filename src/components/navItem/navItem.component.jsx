import React from "react";
import { NavItemContainer } from "./navItem.styles";

const NavItem = ({ to, classname, children }) => {
    return (
        <NavItemContainer
            to={to}
        >
            <div><i className={classname}></i></div>
            <span>{children}</span>
        </NavItemContainer>
    )

}

export default React.memo(NavItem);