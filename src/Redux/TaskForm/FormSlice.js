import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    description: "",
    category: "",
    date: "",
    display: false,
    updateTaskId: null,
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

        setUpdateTaskId: (state, action) => {
            state.updateTaskId = action.payload;
        },
        reset: (state) => {
            state.description = "";
            state.category = "";
            state.date = "";
            state.display = false;
            state.updateTaskId = null;
        },
    },
});

export const { setDescription, setCategory, setDate, setDisplay, reset, setUpdateTaskId } = FromSlice.actions;

export default FromSlice.reducer;