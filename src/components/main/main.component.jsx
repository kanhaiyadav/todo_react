import React from "react";
import "./main.styles.scss";

const Main = ({className, children, style}) => {
    return (
        <main className={className}
            style={style}
        >
            {
                children
            }
        </main>
    )
}

export default React.memo(Main);