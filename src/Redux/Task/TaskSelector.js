import { createSelector } from "@reduxjs/toolkit";

const selectTask = (state) => state.task;

export const selectAllTasks = createSelector(
    [selectTask],
    (task) => task.tasks
);

export const selectDueTasks = createSelector(
    [selectAllTasks],
    (tasks) => tasks.filter((task) => task.due)
);

export const selectTypicalTasks = (type) => {
    switch (type) {
        case "important":
            return createSelector(
                [selectDueTasks],
                (tasks) => {
                    console.log(tasks);
                    return tasks.filter((task) => task.important)
                }
            )

        case "completed":
            return createSelector(
                [selectAllTasks],
                (tasks) => tasks.filter((task) => !task.due)
            )
        default:
            return selectDueTasks;
    }
}

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