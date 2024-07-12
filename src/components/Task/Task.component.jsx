import React from "react";
import './Task.styles.scss';
import { useDispatch } from "react-redux";
import { setDisplay } from "../../Redux/TaskForm/TaskFormSlice";
import { setCategory, setDate, setDescription, setUpdateTaskId } from "../../Redux/TaskForm/TaskFormSlice";
import { useState } from "react";
import { deleteTask } from "../../Redux/Task/TaskSlice";
import { toast } from "react-toastify";
import completedSound from "../../assets/new-notification-on-your-device-138695.mp3"
import { setTaskType } from "../../Redux/Task/TaskSlice";

const Task = ({ id, description, category, date, type, style }) => {
    const audio = new Audio(completedSound);
    const dispatch = useDispatch();
    const [hover, setHover] = useState(false);
    const [checkbox_clicked, setCheckbox_clicked] = useState(false);
    const [soundPlayed, setSoundPlayed] = useState(false);
    
    const handleClick = () => {
        dispatch(setDisplay(false));
        dispatch(setDescription(description));
        dispatch(setCategory(category));
        dispatch(setDate(date));
        dispatch(setUpdateTaskId(id));
    }

    const handleDelete = (event) => {
        event.stopPropagation();
        const deletePromise = dispatch(deleteTask(id));

        toast.promise(deletePromise, {
            pending: 'Deleting task...',
            success: "Task deleted successfully",
            error: {
                render({ data }) {
                    return data.message
                },
            },
        })
    }


    if(checkbox_clicked && !soundPlayed) {
        audio.play();
        setSoundPlayed(true);
        dispatch(setTaskType({ id: id, type: "completed" }));
    }

    
    return (
        <div
            className="task"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={handleClick}
            style={
                type === "completed" || checkbox_clicked ? {
                    backgroundColor: "#8cff8a63",
                    textDecoration: "line-through",
                    border: "2px solid #8cff8a"
                } : null
            }
        >
            <div className="delete-task-button"
                onClick={handleDelete}
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
                    checkbox_clicked ? <i className="fa-solid fa-square-check"></i> : <i className={hover ? `fa-regular fa-square-check` : "fa-regular fa-square"}></i>
                }

            </div>

            <div>
                <div className="description">
                    <p className="task-description"
                        style={
                            checkbox_clicked ? {
                                transition: "1s ease-in-out",
                                textDecoration: 'line-through',
                            }
                                : null
                        }
                    >
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