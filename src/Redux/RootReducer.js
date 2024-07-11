import { combineReducers } from "redux";
import SignInUpFormSlice from "./SignInUp-form/SignInUp-form.slice";

import FormSlice from "./TaskForm/FormSlice";
import TaskSlice from "./Task/TaskSlice";

const rootReducer = combineReducers({
    form: FormSlice,
    task: TaskSlice,
    signInUpForm: SignInUpFormSlice,
    
});

export default rootReducer;