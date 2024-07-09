import { combineReducers } from "redux";

import FormSlice from "./TaskForm/FormSlice";
import TaskSlice from "./Task/TaskSlice";

const rootReducer = combineReducers({
    form: FormSlice,
    task: TaskSlice
});

export default rootReducer;