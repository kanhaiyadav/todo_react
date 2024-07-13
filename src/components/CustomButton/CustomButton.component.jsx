import React from "react";
// import './CustomButton.styles.scss';
import { CustomButtonContainer } from "./CustomButton.Styles";

const CustomButton = ({ onClick, children, type, style,shape, effect}) => {
    return (
        <CustomButtonContainer
            shape={shape}
            effect={effect}
            onClick={onClick}
            style={style}
            type={type}
        >
            {children}
        </CustomButtonContainer>
    )
}

export default React.memo(CustomButton);