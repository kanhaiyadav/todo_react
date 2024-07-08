import React from "react";
import './FormInput.styles.scss';

const FormInput = ({type, name, placeholder, required}) => {
    return (
        <div className="form-input">
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                required={required} 
            />
        </div>
    )
}
export default FormInput;