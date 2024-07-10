import { createSelector } from "@reduxjs/toolkit";

const selectTask = (state) => state.task;

export const selectTasks = createSelector(
    [selectTask],
    (task) => task.tasks
);

export const selectIsLoading = createSelector(
    [selectTask],
    (task) => task.isloading
)

export const selectError = createSelector(
    [selectTask],
    (task) => task.error
)

export const selectUpdateTaskId = createSelector(
    [selectTask],
    (task) => task.updateTaskId
)