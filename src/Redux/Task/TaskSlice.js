import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    isloading: false,
    tasks: [],
    error: false
};


export const fetchTasks = createAsyncThunk(
    "task/fetchTasks",
    async () => {
        const response = await fetch("http://localhost:3000/api/v1/tasks/list");
        const data = await response.json();
        console.log(data);
        return data.tasks;
    }
);

export const createTask = createAsyncThunk(
    "task/createTask",
    async (task) => {
        const response = await fetch("http://localhost:3000/api/v1/tasks/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(task),
        });
        const data = await response.json();
        console.log(data);
        return data.data.task;
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
            })
            .addCase(createTask.pending, (state) => {
                state.isloading = true;
            })
            .addCase(createTask.fulfilled, (state, action) => {
                state.isloading = false;
                state.tasks = [...state.tasks, action.payload];
            })
    }
});

export const { addTask } = TaskSlice.actions;
export default TaskSlice.reducer;
