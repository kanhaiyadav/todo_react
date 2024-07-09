import React from "react";
import './TaskForm.styles.scss';
import FormInput from "../FormInput/FormInput.component";
import CustomButton from "../CustomButton/CustomButton.component";
import FormTextarea from "../FormTextarea/FormTextarea.component";
import { useDispatch } from "react-redux";
import { selectDescription, selectCategory, selectDate } from "../../Redux/TaskForm/TaskFormSelector";
import { setDescription, setCategory, setDate, setDisplay } from "../../Redux/TaskForm/FormSlice";
import { addTask } from "../../Redux/Task/TaskSlice";
import { useSelector } from "react-redux";
import{ v4 as uuidv4} from 'uuid';


const TaskForm = () => {
    const dispatch = useDispatch();
    const handleTextareaChange = (event) => {
        dispatch(setDescription(event.target.value));
    }
    const handleCategoryChange = (event) => {
        dispatch(setCategory(event.target.value));
    }
    const handleDateChange = (event) => {
        dispatch(setDate(event.target.value));
    }
    const description = useSelector(selectDescription);
    const category = useSelector(selectCategory);
    const date = useSelector(selectDate);
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(setDisplay(false));
        dispatch(addTask({
            id: uuidv4(),
            description: description,
            category: category,
            date: date
        }));
    }
    return (
        <form
            id="add-task"
            onSubmit={handleSubmit}
        >
            <FormTextarea
                name='Description'
                placeholder={"Task Description..."}
                required={true} 
                onChange={handleTextareaChange}
                value = {description}
                />
            <FormInput type='text' name='category' placeholder={"Choose Category..."} required={true} value = {category} onChange={handleCategoryChange}/>
            <FormInput type='Date' name='Date' required={true} value={date} onChange={handleDateChange}/>
            <div className="buttons">
                <CustomButton type='submit'>Add Task</CustomButton>
                <CustomButton type='button'>Cancel</CustomButton>
            </div>
        </form>
    )
}

export default React.memo(TaskForm);