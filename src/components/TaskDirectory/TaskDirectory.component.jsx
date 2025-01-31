import React from "react";
import { TaskDirectoryContainer } from "./TaskDirectory.styles";
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
        dispatch(fetchTasks({ token}));
    }, [dispatch, token]);

    const tasks = useSelector(selectTypicalTasks(type));
    // console.log(tasks);

    return (
        <TaskDirectoryContainer>
            {
                tasks.map((task) => (
                    <Task
                        key={task._id}
                        id={task._id}
                        description={task.description}
                        category={task.category}
                        date={task.date}
                        type={type}
                        due={task.due}
                        important={task.important}
                    />
                ))
            }
            {
                tasks.length === 0 && <NoTask type={type} />
            }
        </TaskDirectoryContainer>
    );
};

export default React.memo(TaskDirectory);