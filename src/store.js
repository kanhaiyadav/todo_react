import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./Redux/RootReducer";

export const store = configureStore({
    reducer: rootReducer,
});

export default store;