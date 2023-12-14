import { configureStore } from "@reduxjs/toolkit";

import carsSlice from "./slices/carsSlice";
import { addCar, removeCar, changeSearchTerm } from "./slices/carsSlice";
import formSlice from "./slices/formSlice";
import { changeName, changeCost } from "./slices/formSlice";

const store = configureStore({
    reducer: {
        cars: carsSlice.reducer,
        form: formSlice.reducer
    }
});

export {
    store, changeName, changeCost, changeSearchTerm, addCar, removeCar
};