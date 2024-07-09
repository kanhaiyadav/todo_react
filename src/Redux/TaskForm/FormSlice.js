import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    description: "",
    category: "",
    date: "",
    display: false,
};

const FromSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        setDescription: (state, action) => {
            state.description = action.payload;
        },
        setCategory: (state, action) => {
            state.category = action.payload;
        },
        setDate: (state, action) => {
            state.date = action.payload;
        },
        setDisplay: (state, action) => {
            state.display = action.payload;
        },
    },
});

export const { setDescription, setCategory, setDate, setDisplay } = FromSlice.actions;

export default FromSlice.reducer;