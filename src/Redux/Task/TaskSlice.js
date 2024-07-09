import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    isloading: false,
    tasks: [],
    error: false
};


export const fetchTasks = createAsyncThunk(
    "task/fetchTasks",
    async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");
        const data = await response.json();
        console.log(data);
        return data;
    }
);

const TaskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload);
        },
    },

    //this reducers if for making asynchronus requests
    extraReducers: (builder) => {
        builder
            .addCase(fetchTasks.pending, (state) => {
                state.isloading = true;
            })
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.isloading = false;
                state.tasks = action.payload;
            })
            .addCase(fetchTasks.rejected, (state) => {
                state.isloading = false;
                state.error = true;
            });
    }
});

export const { addTask } = TaskSlice.actions;
export default TaskSlice.reducer;