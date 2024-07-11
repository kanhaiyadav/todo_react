import React from "react";
import "./SignInUP-input.styles.scss";
import { useSelector } from "react-redux";

const SignInUpInput = ({ type, name, required, onChange, value, autoFocus, label }) => {
    return (
        <div className="SignInUp-input"
        >
            <input type={type} name={name} required={required} onChange={onChange} value={value} autoFocus={autoFocus}
                style={value ? {
                    border: "1px solid #EE7214",
                    backgroundColor: "#fff78a63",
                }:null}
            />
            <label
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
            >{label}</label>
        </div>
    )
}

export default SignInUpInput;