import { createSlice } from "@reduxjs/toolkit";
import { stat } from "fs";

const formSlice = createSlice({
    name: 'form',
    initialState: {
        name: '',
        cost: 0
    },
    reducers: {
        changeName(state, action) {
            state.name = action.payload;
        },
        changeCost(state, action) {
            state.cost = action.payload;
        }
    }
});

export const { changeName, changeCost } = formSlice.actions;
export default formSlice;