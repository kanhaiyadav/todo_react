import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [],
};

const TaskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload);
        },
    },
});

export const { addTask } = TaskSlice.actions;
export default TaskSlice.reducer;