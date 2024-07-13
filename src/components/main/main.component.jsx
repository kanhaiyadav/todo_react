import React from "react";
import { MainContainer } from "./mainContainer";

const Main = ({children, style}) => {
    return (
        <MainContainer
            style={style}
        >
            {
                children
            }
        </MainContainer>
    )
}

export default React.memo(Main);