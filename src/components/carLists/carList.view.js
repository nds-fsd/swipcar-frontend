import React from 'react';
import styles from './carList.module.css';
import CarCard from '../carCards/carCard.view';

const CarList = ({ listOfCars }) => {
  //console.log('listOfCars:', listOfCars);
  return (
    <div className={styles.car_list}>
      {listOfCars.map((rentingoffer) => {
        return (
          <CarCard
            key={rentingoffer._id}
            brand={rentingoffer.version.brand.brandname}
            model={rentingoffer.version.model.modelname}
            version={rentingoffer.version.version}
            fuel={rentingoffer.fuel}
            lowerprice="229"
            photocar={rentingoffer.version.model.photocar.photourl}
            carProfile={rentingoffer.carProfile._id}
          />
        );
      })}
    </div>
  );
};

export default CarList;
