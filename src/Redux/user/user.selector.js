import { createSelector } from "@reduxjs/toolkit";

export const selectUser = (state) => state.user;
export const selectJwt = createSelector([selectUser], (user) => user.jwt);
export const selectIsLoading = createSelector(
    [selectUser],
    (user) => user.isloading
);
export const selectError = createSelector(
    [selectUser],
    (user) => user.error
)

export const selectAvatar = createSelector(
    [selectUser],
    (user) => user.user.avatar
)

export const selectName = createSelector(
    [selectUser],
    (user) => user.user.name
)

export const selectEmail = createSelector(
    [selectUser],
    (user) => user.user.email
)

export const selectCompletedTasks = createSelector(
    [selectUser],
    (user) => user.user.taskCompleted
)
export const selectDeletedTasks = createSelector(
    [selectUser],
    (user) => user.user.taskDeleted
)
export const selectCreatetedTasks = createSelector(
    [selectUser],
    (user) => user.user.taskCreated
)