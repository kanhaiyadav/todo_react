import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
};

const SignInUpFormSlice = createSlice({
    name: "signInUpForm",
    initialState,
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
        setConfirmPassword: (state, action) => {    
            state.confirmPassword = action.payload;
        },
    },
});

export const { setName, setEmail, setPassword, setConfirmPassword } = SignInUpFormSlice.actions;
export default SignInUpFormSlice.reducer;