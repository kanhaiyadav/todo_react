import React from "react";
import { InputContainer, Label, Input } from "./SignInUp-input.styles";
import { useTheme } from "styled-components";

const SignInUpInput = ({ type, name, required, onChange, value, autoFocus, label }) => {
    const theme = useTheme();
    return (
        <InputContainer>
            <Input type={type} name={name} required={required} onChange={onChange} value={value} autoFocus={autoFocus}
                style={value ? {
                    border: `1px solid ${theme.colors.primary}`,
                    backgroundColor: `${theme.colors.secondary}`,
                } : null}
            />
            <Label
                htmlFor={name}
                style={value ? {
                    zIndex: "1",
                    top: "-3px",
                    fontSize: "0.9rem",
                    color: "white",
                    backgroundColor: `${theme.colors.primary}`,
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