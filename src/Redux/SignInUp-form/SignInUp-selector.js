import { createSelector } from "@reduxjs/toolkit";

const selectSignInUpForm = (state) => state.signInUpForm;

export const selectName = createSelector(
    [selectSignInUpForm],
    (signInUpForm) => signInUpForm.name
);

export const selectEmail = createSelector(
    [selectSignInUpForm],
    (signInUpForm) => signInUpForm.email
);

export const selectPassword = createSelector(
    [selectSignInUpForm],
    (signInUpForm) => signInUpForm.password
);

export const selectConfirmPassword = createSelector(    
    [selectSignInUpForm],
    (signInUpForm) => signInUpForm.confirmPassword
)