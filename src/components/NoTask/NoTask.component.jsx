import React from 'react';
import { NoTaskContainer } from './NoTask.styles';
import logo from '../../assets/NoTaskImg.png';
import NoImportantTask from "../../assets/3d-render-todo-check-list-with-ticks-task-test.png";
import NoCompleteTask from "../../assets/hand-drawn-no-data-illustration.png";
import LateTask from "../../assets/Work time-pana.png";

const imgPath = {
    due: logo,
    important: NoImportantTask,
    completed: NoCompleteTask,
    late: LateTask
}

const greeting = {
    due: "Great job, you have completed all of your tasks...",
    important: "You haven't marked any of your tasks as important yet...",
    completed: "You haven't completed any of your tasks yet...",
    late: "Great, you're not late for any of your tasks...",
}


const NoTask = ({ type }) => {
    return (
        <NoTaskContainer>
            <img src={imgPath[type]} alt="No Task" />
            <p>{greeting[type]}</p>
            <p className='motivation'>A new task is a new opportunity. Add one and seize the day!</p>
        </NoTaskContainer>
    )
}

export default NoTask;