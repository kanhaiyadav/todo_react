import React from "react";
import './FormTextarea.styles.scss';

const FormTextarea = ({name, rows, placeholder, required, onChange, value}) => {
    return (
        <div className="form-textarea" >
            <textarea
                name={name}
                rows={rows}
                placeholder={placeholder}
                required={required}
                onChange={onChange}
                value={value}
            />
        </div>
    )
}

export default React.memo(FormTextarea);