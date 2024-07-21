export const checkLate = (dueDate) => {
    const currDate = new Date();
    currDate.setHours(0, 0, 0, 0);
    dueDate.setHours(0, 0, 0, 0);
    return currDate.getTime() > dueDate.getTime();
}