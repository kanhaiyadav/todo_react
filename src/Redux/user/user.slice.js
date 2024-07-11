import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    jwt: "",
    isloading: false,
    user: {},
    error: "",
};


export const register = createAsyncThunk(
    "user/register",
    async (user) => {
        let response = await fetch("http://localhost:3000/api/v1/users/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
        if (response.ok) {
            response = await response.json();
            console.log(response);
            return response.data.user;
        }
        else {
            response = await response.json();
            throw new Error(response.message);
        }
    }
)


export const createSession = createAsyncThunk(
    "user/createSession",
    async (user) => {
        try {
            let response = await fetch("http://localhost:3000/api/v1/users/login", {
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
            return response.data;
        } catch (error) {
            throw (error);
        }
    }
)

export const verify = createAsyncThunk(
    "user/verify",
    async (token) => {
        try {
            let response = await fetch("http://localhost:3000/api/v1/users/verify", {
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
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.isloading = true;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isloading = false;
                state.error = false;
                state.user = action.payload;
            })
            .addCase(register.rejected, (state) => {
                state.isloading = false;
                state.error = true;
            })
            .addCase(createSession.pending, (state) => {
                state.isloading = true;
            })
            .addCase(createSession.fulfilled, (state, action) => {
                state.isloading = false;
                state.error = ""; // Clear error state on successful login
                state.user = action.payload.user; // Assuming action.payload contains user data
                state.jwt = action.payload.token;
            })
            .addCase(createSession.rejected, (state, action) => {
                state.isloading = false;
                state.error = action.payload || "Failed to login";
            })
            .addCase(verify.pending, (state) => {
                state.isloading = true;
            })
            .addCase(verify.fulfilled, (state) => {
                state.isloading = false;
            })
            .addCase(verify.rejected, (state, action) => {
                state.isloading = false;
                state.error = action.payload || "failed to varify";
            });
    },
});

export const { setUser, setJwt } = UserSlice.actions;
export default UserSlice.reducer;