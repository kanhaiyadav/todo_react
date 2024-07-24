import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    jwt: "",
    isloading: false,
    user: {},
    error: "",
};


export const register = createAsyncThunk(
    "user/register",
    async (user) => {
        try {
            let response = await fetch("https://serverfortodoreactapp.onrender.com/api/v1/users/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });
            if (!response.ok) {
                response = await response.json();
                throw new Error(response.message);
            }
            response = await response.json();
            return response;

        }
        catch (error) {
            throw (error);
        }
    }
)


export const createSession = createAsyncThunk(
    "user/createSession",
    async (user) => {
        try {
            let response = await fetch("https://serverfortodoreactapp.onrender.com/api/v1/users/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(user),
                },
            );
            if (!response.ok) {
                response = await response.json();
                throw new Error(response.message);
            }
            response = await response.json();
            return response;
        } catch (error) {
            toast.error(error);
            throw (error);
        }
    }
)

export const verify = createAsyncThunk(
    "user/verify",
    async (token) => {
        try {
            let response = await fetch("https://serverfortodoreactapp.onrender.com/api/v1/users/verify", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token,
                },
            });
            if (!response.ok) {
                response = await response.json();
                throw new Error(response.message);
            }
            return await response.json();

        } catch (error) {
            throw (error);
        }

    }
)

export const changeUsername = createAsyncThunk(
    "user/changeUsername",
    async ({ token, username }) => {
        try {
            let response = await fetch("https://serverfortodoreactapp.onrender.com/api/v1/users/change_username", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token,
                },
                body: JSON.stringify({ username }),
            });
            if (!response.ok) {
                response = await response.json();
                throw new Error(response.message);
            }
            return await response.json();
        } catch (error) {
            throw (error);
        }
    }
)


export const DeleteUser = createAsyncThunk(
    "user/DeleteUser",
    async ({ token }) => {
        try {
            let response = await fetch("https://serverfortodoreactapp.onrender.com/api/v1/users/delete", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token,
                },
            });
            if (!response.ok) {
                response = await response.json();
                throw new Error(response.message);
            }
            return await response.json();
        } catch (error) {
            console.log(error);
            throw (error);
        }
    }
)


const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setJwt: (state, action) => {
            state.jwt = action.payload;
        },
        incCreatedTasks: (state) => {
            state.user.taskCreated++;
        },
        incDeletedTasks: (state) => {
            state.user.taskDeleted++;
        },
        incCompletedTasks: (state) => {
            state.user.taskCompleted++;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.isloading = true;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isloading = false;
                state.error = "";
                state.user = action.payload.data.user;
            })
            .addCase(register.rejected, (state, action) => {
                state.isloading = false;
                state.error = action.error.message || "Failed to register";
            })
            .addCase(createSession.pending, (state) => {
                state.isloading = true;
            })
            .addCase(createSession.fulfilled, (state, action) => {
                state.isloading = false;
                state.error = ""; // Clear error state on successful login
                state.user = action.payload.data.user; // Assuming action.payload contains user data
                state.jwt = action.payload.data.token;
            })
            .addCase(createSession.rejected, (state, action) => {
                state.isloading = false;
                state.error = action.error.message || "Failed to login";
            })
            .addCase(verify.pending, (state) => {
                state.isloading = true;
            })
            .addCase(verify.fulfilled, (state) => {
                state.isloading = false;
                state.error = "";
            })
            .addCase(verify.rejected, (state, action) => {
                state.isloading = false;
                state.jwt = "";
                state.error = action.error.message || "failed to varify";
            })
        .addCase(changeUsername.pending, (state) => {
            state.isloading = true; 
        })
        .addCase(changeUsername.fulfilled, (state, action) => {
            state.isloading = false;
            state.error = "";
            state.user.name = action.payload.data.name;
        })
        .addCase(changeUsername.rejected, (state, action) => {
            state.isloading = false;
            state.error = action.error.message || "Failed to change username";
        })
        .addCase(DeleteUser.pending, (state) => {
            state.isloading = true;
        })
        .addCase(DeleteUser.fulfilled, (state, action) => {
            state.isloading = false;
            state.error = "";
            state.user = null;
        })
        .addCase(DeleteUser.rejected, (state, action) => {
            state.isloading = false;
            state.error = action.error.message || "Failed to delete user";
        })
    },
});

export const { setUser, setJwt, incCreatedTasks, incDeletedTasks, incCompletedTasks } = UserSlice.actions;
export default UserSlice.reducer;