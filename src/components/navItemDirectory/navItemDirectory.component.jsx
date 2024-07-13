import React from "react";
import { ItemsContainer } from "./navItemDirectory.styles";
import NavItem from "../navItem/navItem.component";

const NavItemDirectory = ({items}) => {
    return (
        <ItemsContainer>
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
        </ItemsContainer>
    
    )
}

export default NavItemDirectory;