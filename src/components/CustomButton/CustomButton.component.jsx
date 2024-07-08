import React from "react";
import './CustomButton.styles.scss';

const CustomButton = ({ onClick, children, type}) => {
    return (
        <div
            className="custom-button"
            onClick={onClick}
        >
            <button type={type}>{children}</button>
        </div>
    )
}

export default CustomButton;