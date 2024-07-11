import { combineReducers } from "redux";
import SignInUpFormSlice from "./SignInUp-form/SignInUp-form.slice";

import TaskFormSlice from "./TaskForm/TaskFormSlice";
import TaskSlice from "./Task/TaskSlice";
import userSlice from "./user/user.slice";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
    TaskForm: TaskFormSlice,
    task: TaskSlice,
    signInUpForm: SignInUpFormSlice,
    user: userSlice    
});

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;