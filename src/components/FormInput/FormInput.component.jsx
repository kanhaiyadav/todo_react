import React from "react";
import './FormInput.styles.scss';

const FormInput = ({type, name, placeholder, required, onChange, value}) => {
    return (
        <div className="form-input">
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                required={required} 
                onChange={onChange}
                value={value}
            />
        </div>
    )
}
export default React.memo(FormInput);