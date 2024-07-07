import React from "react";
import './CustomButton.styles.scss';

const CustomButton = ({ onClick, children }) => {
    return (
        <div
            className="custom-button"
            onClick={onClick}
        >
            <button>{children}</button>
        </div>
    )
}

export default CustomButton;