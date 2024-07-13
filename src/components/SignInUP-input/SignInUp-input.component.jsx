import React from "react";
import { InputContainer, Label, Input } from "./SignInUp-input.styles";

const SignInUpInput = ({ type, name, required, onChange, value, autoFocus, label }) => {
    return (
        <InputContainer>
            <Input type={type} name={name} required={required} onChange={onChange} value={value} autoFocus={autoFocus}
                style={value ? {
                    border: "1px solid #EE7214",
                    backgroundColor: "#fff78a63",
                } : null}
            />
            <Label
                htmlFor={name}
                style={value ? {
                    zIndex: "1",
                    top: "-3px",
                    fontSize: "0.9rem",
                    color: "white",
                    backgroundColor: "#EE7214",
                    borderRadius: "5px",
                } : null
                }
            >
                {label}
            </Label>
        </InputContainer>
    )
}

export default SignInUpInput;