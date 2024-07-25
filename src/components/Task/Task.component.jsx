import React, { useEffect } from "react";
// import './Task.styles.scss';
import { TaskContainer, DeleteTaskButton, CheckboxContainer, TaskBody, DescriptionContainer, DateContainer, CategoryContainer } from "./Task.styles";
import { useDispatch, useSelector } from "react-redux";
import { setDisplay } from "../../Redux/TaskForm/TaskFormSlice";
import { setCategory, setDate, setDescription, setUpdateTaskId } from "../../Redux/TaskForm/TaskFormSlice";
import { useState } from "react";
import { deleteTask, markImp, markAsComplete } from "../../Redux/Task/TaskSlice";
import { toast } from "react-toastify";
import completedSound from "../../assets/new-notification-on-your-device-138695.mp3"
import CustomButton from "../CustomButton/CustomButton.component";
import { checkLate } from "./TaskUtils";
import noti_audio from "../../assets/mixkit-message-pop-alert-2354 (1).mp3";
import error_audio from "../../assets/error.wav";
import { selectJwt } from "../../Redux/user/user.selector";
import { incCompletedTasks, incDeletedTasks } from "../../Redux/user/user.slice";

const Task = ({ id, description, category, date, type, style, due, important }) => {

    const notification = new Audio(noti_audio);
    const audio = new Audio(completedSound);
    const error = new Audio(error_audio);
    const dispatch = useDispatch();
    const [hover, setHover] = useState(false);
    const [checkbox_clicked, setCheckbox_clicked] = useState(false);
    const [soundPlayed, setSoundPlayed] = useState(false);
    const [late, setLate] = useState(false);
    const jwt = useSelector(selectJwt);

    useEffect(() => {
        setLate(checkLate(new Date(date)));
    }, [date])


    const handleClick = () => {
        dispatch(setDisplay(false));
        dispatch(setDescription(description));
        dispatch(setCategory(category));
        dispatch(setDate(date));
        dispatch(setUpdateTaskId(id));
    }

    const handleDelete = (event) => {
        event.stopPropagation();
        const deletePromise = dispatch(deleteTask({ id: id, token: jwt }));
        dispatch(incDeletedTasks());
        toast.promise(deletePromise,
            {
                pending: 'Deleting task...',
                success: {
                    render() {
                        notification.play();
                        return "Task deleted successfully"
                    }
                },
                error: {
                    render({ data }) {
                        error.play();
                        return data.message
                    },
                },
            },
            {
                position: "bottom-right",
            }
        )
    }


    if (checkbox_clicked && !soundPlayed) {
        audio.play();
        setSoundPlayed(true);
    }


    return (
        <TaskContainer
            $important={important}
            $late={late}
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
                            dispatch(markAsComplete({ id: id, token: jwt }));
                            dispatch(incCompletedTasks());
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
                <DescriptionContainer $checkbox_clicked={checkbox_clicked} $due={due}>
                    <p>{description}</p>
                </DescriptionContainer>

                <DateContainer>
                    <i className="fa-solid fa-calendar-days"></i>
                    <p>{date}</p>
                </DateContainer>

                <CategoryContainer>
                    <span> {category}</span>
                </CategoryContainer>
            </TaskBody>

            {
                type !== "completed" ?
                    <CustomButton shape="circular" effect="inverted" type='button'
                        onClick={(event) => {
                            event.stopPropagation();
                            dispatch(markImp({ id: id }));
                        }}
                        style={{
                            width: '40px',
                            height: '40px'
                        }}
                    >
                        {
                            important ? <i className="fa-solid fa-star"></i> : <i className="fa-regular fa-star"></i>
                        }
                    </CustomButton>
                    :
                    <CustomButton shape="circular" type='button' disabled={true}
                        style={{
                            width: '40px',
                            height: '40px'
                        }}
                    >
                        {
                            important ? <i className="fa-solid fa-star"></i> : <i className="fa-regular fa-star"></i>
                        }
                    </CustomButton>
            }
        </TaskContainer >
    )
}

export default React.memo(Task);