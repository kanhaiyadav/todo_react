import React from "react";
import "./TaskDirectory.styles.scss";
import Task from "../Task/Task.component";
import { selectTasks } from "../../Redux/Task/TaskSelector";
import { useSelector } from "react-redux";
const TaskDirectory = () => {
    const tasks = useSelector(selectTasks);
    console.log(tasks);
    
    return (
        <div className="task-directory">
            {
                tasks.map((task) => (
                    <Task
                        key={task.id}
                        description={task.description}
                        category={task.category}
                        date={task.date}
                    />
                ))
            }
        </div>
    );
};

export default React.memo(TaskDirectory);