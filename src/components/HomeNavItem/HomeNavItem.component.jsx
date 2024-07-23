import React from "react";
import { HomeNavItemContainer } from "./HomeNavItem.styles";
const HomeNavItem = ({ link, children, ...otherProps }) => {

    return (
        <HomeNavItemContainer
            to={link}
            end
            {...otherProps}
        >
            {children}
        </HomeNavItemContainer>
    )
};

export default React.memo(HomeNavItem);