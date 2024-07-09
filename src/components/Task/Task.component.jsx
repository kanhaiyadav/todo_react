import React from "react";
import './Task.styles.scss';

const Task = ({description, category, date}) => {
    return (
        <div
            className="task"
        >
            <a href="delete">
                <i className="fa-solid fa-trash-can"></i>
            </a>
            <div>
                <div className="description">
                    <p className="task-description">
                        {description}
                    </p>
                </div>
                <div>
                    <i className="fa-solid fa-calendar-days"></i>
                    <p className="date">
                        {date}
                    </p>
                </div>
            </div>
            <p className="label">
                {category}
            </p>
        </div>
    )
}

export default React.memo(Task);