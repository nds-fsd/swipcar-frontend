import React, { useContext } from 'react';
import styles from './carList.module.css';
import CarCard from '../carCards/carCard.view';
import { CarListContext } from '../../store/carListContext';

const CarList = () => {
  const { listOfCars } = useContext(CarListContext);

  return (
    <div className={styles.car_list}>
      {listOfCars.map((carcard) => {
        return (
          <CarCard
            key={carcard._id}
            brand={carcard.brand.brandname}
            model={carcard.model.modelname}
            fuel={carcard.fuel.fueltype}
            lowerprice={carcard.lowerprice.lowerprice}
            photocar={carcard.photocar[0].photourl}
            carprofile={carcard.carprofile._id}
          />
        );
      })}
    </div>
  );
};

export default CarList;
