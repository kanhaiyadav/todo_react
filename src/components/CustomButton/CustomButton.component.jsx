import React from "react";
import './CustomButton.styles.scss';

const CustomButton = ({ onClick, children, type, style}) => {
    return (
        <div
            className="custom-button"
            onClick={onClick}
            style={style}
        >
            <button type={type} >{children}</button>
        </div>
    )
}

export default React.memo(CustomButton);