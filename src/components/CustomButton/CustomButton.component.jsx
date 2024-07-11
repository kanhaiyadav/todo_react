import React from "react";
import './CustomButton.styles.scss';

const CustomButton = ({ onClick, children, type, style, buttonStyle}) => {
    return (
        <div
            className="custom-button"
            onClick={onClick}
            style={style}
        >
            <button type={type}
                style={buttonStyle}
            >{children}</button>
        </div>
    )
}

export default React.memo(CustomButton);