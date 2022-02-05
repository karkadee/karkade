import { createSlice } from "@reduxjs/toolkit";

export interface Category{
    _id: string;
    text: string;
}

export interface Product{
    _id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    sold: number;
    category: string;
    images: string[];
}

interface State{
    products: Product[] | null;
    categories: Category[] | null;
}

const initialState: State = {
    products: null,
    categories: null
}

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },
        setCategories: (state, action) => {
            state.categories = action.payload;
        },
    },
});

export const {
    setProducts,
    setCategories
} = appSlice.actions;

export const selectApp = (state: any) => state.app;

export default appSlice.reducer;