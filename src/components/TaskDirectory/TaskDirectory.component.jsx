import React from "react";
import "./TaskDirectory.styles.scss";
import Task from "../Task/Task.component";
import { useSelector } from "react-redux";
import { selectTasks } from "../../Redux/Task/TaskSelector";

const TaskDirectory = ({tasks}) => {
    return (
        <div className="task-directory">
            {useSelector(selectTasks).map((task) => (
                <Task
                    key={task.id}
                    description={task.description}
                    category={task.category}
                    date={task.date}
                />
            ))}
        </div>
    );
};

export default React.memo(TaskDirectory);