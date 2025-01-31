import { createSelector } from "@reduxjs/toolkit";

const selectForm = (state) => state.TaskForm;

export const selectDisplay = createSelector(
    [selectForm],
    (form) => form.display
)

export const selectDescription = createSelector(
    [selectForm],
    (form) => form.description
)

export const selectCategory = createSelector(
    [selectForm],
    (form) => form.category
)

export const selectDate = createSelector(
    [selectForm],
    (form) => form.date
)

export const selectUpdateTaskId = createSelector(
    [selectForm],
    (form) => form.updateTaskId
)
