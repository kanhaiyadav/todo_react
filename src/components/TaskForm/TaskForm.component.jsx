import React from "react";
import './TaskForm.styles.scss';
import FormInput from "../FormInput/FormInput.component";
import CustomButton from "../CustomButton/CustomButton.component";
import FormTextarea from "../FormTextarea/FormTextarea.component";


const TaskForm = () => {
    return (
        <form id="add-task">
            <FormTextarea name='Description' placeholder={"Task Description..."} required={true} />
            <FormInput type='text' name='category' placeholder={"Choose Category..."} required={true} />
            <FormInput type='Date' name='Date' required={true} />
            <div className="buttons">
                <CustomButton type='submit'>Add Task</CustomButton>
                <CustomButton type='button'>Cancel</CustomButton>
            </div>
        </form>
    )
}

export default TaskForm;