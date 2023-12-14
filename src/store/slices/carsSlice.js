import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        searchTerm: '',
        cardata: []
    },
    reducers: {
        changeSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
        addCar(state, action) {
            state.cardata.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid()
            });
        },
        removeCar(state, action) {

            const updated = state.cardata.filter( (car) => car.id !== action.payload );
            state.cardata = updated;
        }
    }
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export default carsSlice;