import { createSlice } from "@reduxjs/toolkit";
import { Product } from "./appSlice";

export interface User{
    _id: string;
    name: string;
    email: string;
    phoneNumber: string;
    password: string;
    role: string;
    cart: Product[];
}

interface State{
    loggedIn: boolean,
    token: string,
    info: User | null,
    loading: boolean,
}

const initialState: State = {
    loggedIn: false,
    token: "",
    info: null,
    loading: true,
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state) => {
            state.loggedIn = true;
        },
        setUserInfo: (state, action) => {
            state.info = action.payload;
        },
        setToken: (state, action) => {
            state.token = action.payload;
        },
        logout: (state) => {
            state.info = null;
            state.token = "";
            state.loggedIn = false;
        },
        loaded: (state) => {
            state.loading = false;
        },
    },
});

export const {
    login,
    setUserInfo,
    setToken,
    loaded,
    logout
} = userSlice.actions;

export const selectUser = (state: any) => state.user;

export default userSlice.reducer;