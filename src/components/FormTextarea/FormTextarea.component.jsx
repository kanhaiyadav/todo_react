import React from "react";
import './FormTextarea.styles.scss';

const FormTextarea = ({name, rows, placeholder, required}) => {
    return (
        <div className="form-textarea" >
            <textarea
                name={name}
                rows={rows}
                placeholder={placeholder}
                required={required}
            />
        </div>
    )
}

export default FormTextarea;