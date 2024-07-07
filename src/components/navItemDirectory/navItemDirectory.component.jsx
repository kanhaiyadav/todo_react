import React from "react";
import "./navItemDirectory.styles.scss";
import NavItem from "../navItem/navItem.component";

const NavItemDirectory = ({items}) => {
    return (
        <div className="nav-item-directory">
            {
                items.map((item, index) => (
                    <NavItem
                        key={index}
                        to={item.link}
                        classname={item.icon}
                    >
                        {item.title}
                    </NavItem>
                ))
            }
        </div>
    
    )
}

export default NavItemDirectory;