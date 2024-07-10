import React from "react";
import './TaskForm.styles.scss';
import FormInput from "../FormInput/FormInput.component";
import CustomButton from "../CustomButton/CustomButton.component";
import FormTextarea from "../FormTextarea/FormTextarea.component";
import { useDispatch } from "react-redux";
import { selectDescription, selectCategory, selectDate } from "../../Redux/TaskForm/TaskFormSelector";
import { setDescription, setCategory, setDate, reset } from "../../Redux/TaskForm/FormSlice";
import { useSelector } from "react-redux";
import { createTask, updateTask } from "../../Redux/Task/TaskSlice";
import { selectUpdateTaskId } from "../../Redux/TaskForm/TaskFormSelector";

const TaskForm = ({type}) => {
    const dispatch = useDispatch();
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
        dispatch(reset());
        dispatch(createTask({
            description: description,
            category: category,
            date: date,
        }));
    }
    const taskUpdate = (event) => {
        event.preventDefault();
        dispatch(reset());
        dispatch(updateTask({
            _id: updateTaskId,
            task: {
                description: description,
                category: category,
                date: date,
            }
        }));
    }
    const actions = {
        create: taskCreate,
        update: taskUpdate
    }
    
    return (
        <form
            id="add-task"
            onSubmit={actions[type]}
        >
            <FormTextarea
                name='Description'
                placeholder={"Task Description..."}
                required={true}
                onChange={handleTextareaChange}
                value={description}
            />
            <FormInput type='text' name='category' placeholder={"Choose Category..."} required={true} value={category} onChange={handleCategoryChange} />
            <FormInput type='Date' name='Date' required={true} value={date} onChange={handleDateChange} />
            <div className="buttons">
                <CustomButton type='submit'>Done</CustomButton>
                <CustomButton type='button'
                    onClick={() => dispatch(reset())}
                >Cancel</CustomButton>
            </div>
        </form>
    )
}

export default React.memo(TaskForm);