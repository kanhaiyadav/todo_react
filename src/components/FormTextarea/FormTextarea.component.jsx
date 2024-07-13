import React from "react";
import { FormInputContainer } from "../FormInput/FormInput.styles";

const FormTextarea = ({ name, rows, placeholder, required, onChange, value, autoFocus }) => {
    return (
        <FormInputContainer
            as='textarea'
            name={name}
            rows={rows}
            placeholder={placeholder}
            required={required}
            onChange={onChange}
            value={value}
            style={{
                flexGrow: "1",
                flexBasis: "100%",
            }}
            autoFocus={autoFocus}
        />
    )
}

export default React.memo(FormTextarea);