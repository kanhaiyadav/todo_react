import { createSelector } from "@reduxjs/toolkit";
import { checkLate } from "../../components/Task/TaskUtils";

const selectTask = (state) => state.task;

export const selectAllTasks = createSelector(
    [selectTask],
    (task) => task.tasks.slice().reverse()
);

export const selectDueTasks = createSelector(
    [selectAllTasks],
    (tasks) => tasks.filter((task) => task.due)
);

export const selectTypicalTasks = (type) => {
    switch (type) {
        case "all": 
            return selectAllTasks;
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
        case "late": 
            return createSelector(
                [selectDueTasks],
                (tasks) => tasks.filter((task) => checkLate(new Date(task.date)))
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