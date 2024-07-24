import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    isloading: false,
    tasks: [],
    error: "",
    taskCreated: 0,
    taskCompleted: 0,
    taskDeleted: 0
};


export const fetchTasks = createAsyncThunk(
    "task/fetchTasks",
    async ({token}) => {
        try {
            const response = await fetch(`https://serverfortodoreactapp.onrender.com/api/v1/tasks/list`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token,
                },
            });
            if(!response.ok) {
                const responce = await response.json();
                throw new Error(responce.message);
            }
            const data = await response.json();
            return data;
        }catch (error) {
            throw (error);
        }
    }
);

export const createTask = createAsyncThunk(
    "task/createTask",
    async ({ task, token }) => {
        try {
            const response = await fetch("https://serverfortodoreactapp.onrender.com/api/v1/tasks/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token,
                },
                body: JSON.stringify(task),
            });
            if (!response.ok)
            {
                const responce = await response.json();
                throw new Error(responce.message);
            }

            const data = await response.json();
            return data;
            
        }
        catch (error) {
            throw (error);
        }
    }
);

export const updateTask = createAsyncThunk(
    "task/updateTask",
    async ({ _id, task }) => {
        try {
            const response = await fetch(`https://serverfortodoreactapp.onrender.com/api/v1/tasks/update/${_id}`, {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(task),
            })
            if (!response.ok) {
                const responce = await response.json();
                throw new Error(responce.message);
            }
            const data = await response.json();
            return data;
            
        } catch (error) {
            throw (error);
        }
    }
);

export const deleteTask = createAsyncThunk(
    "task/deleteTask",
    async ({id, token}) => {
        try {
            const response = await fetch(`https://serverfortodoreactapp.onrender.com/api/v1/tasks/delete/${id}`, {
                method: "delete",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token,
                },
            });
            if(!response.ok) {
                const responce = await response.json();
                throw new Error(responce.message);
            }
            const data = await response.json();
            return data;
        }
        catch (error) {
            throw (error);
        }
    }
);

export const markAsComplete = createAsyncThunk(
    "task/markAsComplete",
    async ({ id, token }) => {
        try {
            let responce = await fetch(`https://serverfortodoreactapp.onrender.com/api/v1/tasks/mark_complete/${id}`, {
                method: "get",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token,
                },
            })
            if(!responce.ok) {
                responce = await responce.json();
                throw new Error(responce.message);
            }
            responce = await responce.json();
            return responce;
        }
        catch (error) {
            throw (error);
        }
    }
);


export const markImp = createAsyncThunk(
    "task/markImp",
    async ({ id }) => {
        try {
            let responce = await fetch(`https://serverfortodoreactapp.onrender.com/api/v1/tasks/mark_imp/${id}`)
            if(!responce.ok) {
                responce = await responce.json();
                throw new Error(responce.message);
            }
            responce = await responce.json();
            return responce;
        }
        catch (error) {
            throw (error);
        }
    }
);


const TaskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload);
        }
    },

    //this reducers if for making asynchronus requests
    extraReducers: (builder) => {
        builder
            .addCase(fetchTasks.pending, (state) => {
                state.isloading = true;
            })
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.isloading = false;
                state.error = "";
                state.tasks = action.payload.data.tasks;
            })
            .addCase(fetchTasks.rejected, (state, action) => {
                state.isloading = false;
                state.error = action.error.message;
            })


            .addCase(createTask.pending, (state) => {
                state.isloading = true;
            })
            .addCase(createTask.fulfilled, (state, action) => {
                state.isloading = false;
                state.error = "";
                state.tasks = [...state.tasks, action.payload.data.task];
            })
            .addCase(createTask.rejected, (state, action) => {
                state.isloading = false;
                state.error = action.error.message || "Failed to create task";
            })


            .addCase(updateTask.pending, (state) => {
                state.isloading = true;
            })
            .addCase(updateTask.fulfilled, (state, action) => {
                state.isloading = false;
                state.error = "";
                const index = state.tasks.findIndex((task) => task._id === action.payload.data.task._id)
                state.tasks[index] = action.payload.data.task;
            })
            .addCase(updateTask.rejected, (state, action) => {
                state.isloading = false;
                state.error = action.error.message || "Failed to update task";
            })


            .addCase(deleteTask.pending, (state) => {
                state.isloading = true;
            })
            .addCase(deleteTask.fulfilled, (state, action) => {
                state.isloading = false;
                state.error = "";
                state.tasks = state.tasks.filter((task) => task._id !== action.payload.data._id);
            })
            .addCase(deleteTask.rejected, (state, action) => {
                state.isloading = false;
                state.error = action.error.message || "Failed to delete task";
            })
        
            .addCase(markAsComplete.pending, (state) => {
                state.isloading = true;
            })
            .addCase(markAsComplete.fulfilled, (state, action) => {
                state.isloading = false;
                state.error = "";
                const index = state.tasks.findIndex((task) => task._id === action.payload.data.id)
                state.tasks[index].due = false;
            })
            .addCase(markAsComplete.rejected, (state, action) => {
                state.isloading = false;
                state.error = action.error.message || "Failed to mark the task as complete";
            })

            .addCase(markImp.pending, (state) => {
                state.isloading = true;
            })
            .addCase(markImp.fulfilled, (state, action) => {
                state.isloading = false;
                state.error = "";
                const index = state.tasks.findIndex((task) => task._id === action.payload.data.id)
                state.tasks[index].important = !state.tasks[index].important;
            })
            .addCase(markImp.rejected, (state, action) => {
                state.isloading = false;
                state.error = action.error.message || "Failed to mark the task as important";
            });
    }
});

export const { addTask, setUpdateTaskId } = TaskSlice.actions;
export default TaskSlice.reducer;
