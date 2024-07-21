import React from "react";
// import './CustomButton.styles.scss';
import { CustomButtonContainer } from "./CustomButton.Styles";

const CustomButton = ({ onClick, children, type, style,shape, effect, disabled}) => {
    return (
        <CustomButtonContainer
            $shape={shape}
            $effect={effect}
            onClick={onClick}
            style={style}
            type={type}
            disabled={disabled}
        >
            {children}
        </CustomButtonContainer>
    )
}

export default React.memo(CustomButton);