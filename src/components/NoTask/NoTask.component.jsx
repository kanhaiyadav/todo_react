import React from 'react';
import { NoTaskContainer } from './NoTask.styles';
import logo from '../../assets/NoTaskImg.png';
import NoCompleteTask from "../../assets/hand-drawn-no-data-illustration.png";

const imgPath = {
    due: logo,
    completed: NoCompleteTask
}

const greeting = {
    due: "Great job, you have completed all of your tasks...",
    completed: "You haven't completed any of your tasks yet..."
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