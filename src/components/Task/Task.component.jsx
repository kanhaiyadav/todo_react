import React from "react";
// import './Task.styles.scss';
import { TaskContainer, DeleteTaskButton, CheckboxContainer,    TaskBody, DescriptionContainer, DateContainer, CategoryContainer } from "./Task.styles";
import { useDispatch } from "react-redux";
import { setDisplay } from "../../Redux/TaskForm/TaskFormSlice";
import { setCategory, setDate, setDescription, setUpdateTaskId } from "../../Redux/TaskForm/TaskFormSlice";
import { useState } from "react";
import { deleteTask } from "../../Redux/Task/TaskSlice";
import { toast } from "react-toastify";
import completedSound from "../../assets/new-notification-on-your-device-138695.mp3"
import { setTaskType } from "../../Redux/Task/TaskSlice";
import CustomButton from "../CustomButton/CustomButton.component";

const Task = ({ id, description, category, date, type, style }) => {
    const audio = new Audio(completedSound);
    const dispatch = useDispatch();
    const [hover, setHover] = useState(false);
    const [checkbox_clicked, setCheckbox_clicked] = useState(false);
    const [soundPlayed, setSoundPlayed] = useState(false);
    const [imp, setImp] = useState(false);

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


    if (checkbox_clicked && !soundPlayed) {
        audio.play();
        setSoundPlayed(true);
    }


    return (
        <TaskContainer
            type={type}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={type !== "completed" ? handleClick : null}
            style={style}
        >
            <DeleteTaskButton onClick={handleDelete}>
                <i className="fa-solid fa-circle-xmark"></i>
            </DeleteTaskButton>
            {
                type !== "completed" ?
                    <CheckboxContainer
                        onClick={(event) => {
                            event.stopPropagation();
                            setCheckbox_clicked(!checkbox_clicked);
                            dispatch(setTaskType({ id: id, type: "completed" }));
                        }}
                    >
                        {
                            checkbox_clicked ? <i className="fa-solid fa-square-check"
                            ></i> : <i className={hover ? `fa-regular fa-square-check` : "fa-regular fa-square"}></i>
                        }

                    </CheckboxContainer>
                    : <div
                        style={{
                            justifySelf: "center"
                        }}
                    ><i className="fa-solid fa-square-check"></i></div>
            }

            <TaskBody>
                <DescriptionContainer checkbox_clicked={checkbox_clicked}>
                    <p>
                        {description}

                    </p>
                </DescriptionContainer>
                <DateContainer>
                    <i className="fa-solid fa-calendar-days"></i>
                    <p>{date}</p>
                </DateContainer>
                <CategoryContainer>
                    <span> {category}</span>
                </CategoryContainer>
            </TaskBody>

            <CustomButton shape="circular" effect="inverted" type='button'
                onClick={(event) => {
                    event.stopPropagation();
                    setImp(!imp)
                }}
                style={{
                    width: '40px',
                    height: '40px'
                }}
            >
            {
                imp ? <i className="fa-solid fa-star"></i> : <i className="fa-regular fa-star"></i>
            }
        </CustomButton>

        </TaskContainer >
    )
}

export default React.memo(Task);