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