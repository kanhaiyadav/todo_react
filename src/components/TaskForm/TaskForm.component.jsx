import React from "react";
import { Form } from './TaskFrom.styles';
import FormInput from "../FormInput/FormInput.component";
import CustomButton from "../CustomButton/CustomButton.component";
import FormTextarea from "../FormTextarea/FormTextarea.component";
import { useDispatch } from "react-redux";
import { selectDescription, selectCategory, selectDate } from "../../Redux/TaskForm/TaskFormSelector";
import { setDescription, setCategory, setDate, reset } from "../../Redux/TaskForm/TaskFormSlice";
import { useSelector } from "react-redux";
import { createTask, updateTask } from "../../Redux/Task/TaskSlice";
import { selectUpdateTaskId } from "../../Redux/TaskForm/TaskFormSelector";
import { selectJwt } from "../../Redux/user/user.selector";
import { toast } from "react-toastify";
import { checkLate } from "../Task/TaskUtils";
import audio from "../../assets/mixkit-message-pop-alert-2354 (1).mp3";
import error_audio from "../../assets/error.wav";
import { incCreatedTasks } from "../../Redux/user/user.slice";

const TaskForm = ({ type }) => {
    const dispatch = useDispatch();
    const jwt = useSelector(selectJwt);
    const notification = new Audio(audio);
    const error_notification = new Audio(error_audio);

    const handleTextareaChange = (event) => {
        dispatch(setDescription(event.target.value));
    }
    const handleCategoryChange = (event) => {
        dispatch(setCategory(event.target.value));
    }
    const handleDateChange = (event) => {
        console.log(event.target.value);
        dispatch(setDate(event.target.value));
    }

    const description = useSelector(selectDescription);
    const category = useSelector(selectCategory);
    const date = useSelector(selectDate);
    const updateTaskId = useSelector(selectUpdateTaskId);

    const taskCreate = (event) => {
        event.preventDefault();
        if (checkLate(new Date(date))) {
            toast.error('Date cannot be in the past',{
                position: "bottom-right",
            });
            error_notification.play();
            return;
        }
        dispatch(reset());
        const createPromise =
            dispatch(createTask({
                task: {
                    description: description,
                    category: category,
                    date: date,
                },
                token: jwt
            })).unwrap();
        dispatch(incCreatedTasks());

        toast.promise(createPromise,
            {
                pending: 'Creating task...',
                success: {
                    render({ data }) {
                        notification.play();
                        return data.message
                    },
                },
                error: {
                    render({ data }) {
                        error_notification.play();
                        return data.message
                    },
                }
            },
            {
                position: "bottom-right",
            }
        )
    }
    const taskUpdate = (event) => {
        event.preventDefault();
        dispatch(reset());
        const updatePromise =
            dispatch(updateTask({
                _id: updateTaskId,
                task: {
                    description: description,
                    category: category,
                    date: date,
                }
            })).unwrap();

        toast.promise(updatePromise, {
            pending: 'Updating task...',
            success: {
                render({ data }) {
                    notification.play();
                    return data.message
                },
            },
            error: {
                render({ data }) {
                    error_notification.play();
                    return data.message
                },
            }
        })
    }
    const actions = {
        create: taskCreate,
        update: taskUpdate
    }

    return (
        <Form
            onSubmit={actions[type]}
        >
            <FormTextarea
                name='Description'
                placeholder={"Task Description..."}
                required={true}
                onChange={handleTextareaChange}
                value={description}
                autoFocus
            />
            <FormInput type='text' name='category' placeholder={"Choose Category..."} required={true} value={category} onChange={handleCategoryChange} />
            <FormInput type='Date' name='Date' required={true} value={date} onChange={handleDateChange} />
            <div className="buttons">
                <CustomButton type='submit' shape='regular' effect='scale'>Done</CustomButton>
                <CustomButton type='button' shape='regular' effect='scale'
                    onClick={() => dispatch(reset())}
                >Cancel</CustomButton>
            </div>
        </Form>
    )
}

export default React.memo(TaskForm);