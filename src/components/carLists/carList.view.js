import React from 'react';
import styles from './carList.module.css';
import CarCard from '../carCards/carCard.view';

const CarList = ({ listOfCars }) => {
  //console.log('listOfCars:', listOfCars);
  return (
    <div className={styles.car_list}>
      {listOfCars.map((carProfile) => {
        // console.log('carProfile:', carProfile);

        return (
          <CarCard
            key={carProfile._id}
            brand={carProfile.carCard.brand.brandname}
            model={carProfile.carCard.model.modelname}
            fuel={carProfile.carCard.fuel.fueltype}
            lowerprice={carProfile.carCard.lowerprice.lowerprice}
            photocar={carProfile.carCard.photocar[0].photourl}
            carProfile={carProfile._id}
          />
        );
      })}
    </div>
  );
};

export default CarList;
