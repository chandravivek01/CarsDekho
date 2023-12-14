import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeCar } from '../store';

const CarList = () => {

    const dispatch = useDispatch();

    const cars = useSelector((state) => {
        return state.cars.cardata;
    });

    const handleCarDelete = ( car ) => {
         dispatch( removeCar(car.id) );
    }

    const renderedCars = cars.map((car) => {

        const formattedCost = new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR'
        }).format(car.cost);

        return (
            <div key={car.id} className='panel'>
                <p>
                    {car.name} - {formattedCost}
                </p>
                <button className='button is-danger' onClick={ () => handleCarDelete(car) } >
                    Delete
                </button>
            </div>
        );
    });

    return (
        <div>
            {renderedCars}
        </div>
    )
}

export default CarList