import { createSelector } from "@reduxjs/toolkit";

const selectTask = (state) => state.task;

export const selectAllTasks = createSelector(
    [selectTask],
    (task) => task.tasks
);

export const selectTypicalTasks = (type) => createSelector(
    [selectAllTasks],
    (tasks) => tasks.filter((task) => task.type === type)
)

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