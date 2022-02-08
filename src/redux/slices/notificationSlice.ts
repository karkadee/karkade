import { createSlice } from "@reduxjs/toolkit";

export interface Notification {
    type: null | string;
    message: null | string;
}

const initialState: Notification = {
    type: null,
    message: null,
}

export const notificationSlice = createSlice({
    name: "notification",
    initialState,
    reducers: {
        setNotification: (state, action) => {
            state.type = action.payload.type;
            state.message = action.payload.message;
        },
        clearNotification: (state) => {
            state.type = null;
            state.message = null;
        },
    },
});

export const {
    setNotification,
    clearNotification,
} = notificationSlice.actions;

export const selectNotification = (state: any) => state.notification;

export default notificationSlice.reducer;