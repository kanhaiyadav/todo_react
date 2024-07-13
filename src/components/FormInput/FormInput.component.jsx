import React from "react";
// import './FormInput.styles.scss';
import { FormInputContainer } from "./FormInput.styles";

const FormInput = ({type, name, placeholder, required, onChange, value}) => {
    return (
        <FormInputContainer
                type={type}
                name={name}
                placeholder={placeholder}
                required={required} 
                onChange={onChange}
                value={value}
            />
    )
}
export default React.memo(FormInput);