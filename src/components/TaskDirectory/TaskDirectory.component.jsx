import React from "react";
import "./TaskDirectory.styles.scss";
import Task from "../Task/Task.component";
import { selectTasks } from "../../Redux/Task/TaskSelector";
import { useSelector } from "react-redux";
const TaskDirectory = () => {
    const tasks = useSelector(selectTasks)
    
    return (
        <div className="task-directory">
            {
                tasks.map((task) => (
                    <Task
                        key={task.id}
                        description={task.title}
                        category={"category"}
                        date={"21-11-2022"}
                    />
                ))
            }
        </div>
    );
};

export default React.memo(TaskDirectory);