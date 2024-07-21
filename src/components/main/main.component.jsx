import React from "react";
import { MainContainer } from "./mainContainer";

const Main = ({children, style, ...otherProps}) => {
    return (
        <MainContainer
            style={style}
            {...otherProps}
        >
            {
                children
            }
        </MainContainer>
    )
}

export default React.memo(Main);