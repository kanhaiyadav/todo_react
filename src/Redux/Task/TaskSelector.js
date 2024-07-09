import { createSelector } from "@reduxjs/toolkit";

const selectTask = (state) => state.task;

export const selectTasks = createSelector(
    [selectTask],
    (task) => task.tasks
);