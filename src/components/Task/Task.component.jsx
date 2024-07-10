import React from "react";
import './Task.styles.scss';
import { useDispatch } from "react-redux";
import { setDisplay } from "../../Redux/TaskForm/FormSlice";
import { setCategory, setDate, setDescription, setUpdateTaskId } from "../../Redux/TaskForm/FormSlice";
import { useState } from "react";

const Task = ({ id, description, category, date }) => {
    const dispatch = useDispatch();
    const [hover, setHover] = useState(false);
    const [checkbox_clicked, setCheckbox_clicked] = useState(false);
    return (
        <div
            className="task"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() => {
                dispatch(setDisplay(false));
                dispatch(setDescription(description));
                dispatch(setCategory(category));
                dispatch(setDate(date));
                dispatch(setUpdateTaskId(id));
            }}
        >
            <div className="delete-task-button"
                onClick={(event) => {
                    event.stopPropagation();
                    console.log("hello");
                }
                }
            >
                <i className="fa-solid fa-circle-xmark"></i>
            </div>
            <div className="checkbox"
                onClick={(event) => {
                    event.stopPropagation();
                    setCheckbox_clicked(!checkbox_clicked);
                }}
            >
                {
                    checkbox_clicked? <i className="fa-solid fa-square-check"></i> :<i className={hover ? `fa-regular fa-square-check` : "fa-regular fa-square"}></i>
                }
                
            </div>
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