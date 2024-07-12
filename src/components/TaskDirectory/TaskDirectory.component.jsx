import React from "react";
import "./TaskDirectory.styles.scss";
import Task from "../Task/Task.component";
import NoTask from "../NoTask/NoTask.component";
import { selectJwt } from "../../Redux/user/user.selector";
import { fetchTasks } from "../../Redux/Task/TaskSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTypicalTasks } from "../../Redux/Task/TaskSelector";
// import { ReactComponent as NoTask } from "../../assets/noTask.svg";


const TaskDirectory = ({ type }) => {

    const dispatch = useDispatch();
    const token = useSelector(selectJwt);
    useEffect(() => {
        dispatch(fetchTasks({ token, type }));
    }, [dispatch, token, type]);

    const tasks = useSelector(selectTypicalTasks(type));
    // console.log(tasks);
    
    return (
        <div className="task-directory">
            {
                tasks.map((task) => (
                    <Task
                        key={task._id}
                        id={task._id}
                        description={task.description}
                        category={task.category}
                        date={task.date}
                        type= {task.type}
                    />
                ))
            }
            {
                tasks.length === 0 && <NoTask type = {type}/>
            }
        </div>
    );
};

export default React.memo(TaskDirectory);