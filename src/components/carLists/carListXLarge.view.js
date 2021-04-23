import React, { useContext } from 'react';
import styles from './carList.module.css';
import CarCardXLarge from '../carCards/carCardXLarge.view';
import { CarListContext } from '../../store/carListContext';

const CarListXLarge = ({ carcard, carprofile }) => {
  const { listOfCars } = useContext(CarListContext);

  return (
    <div className={styles.car_list}>
      {listOfCars.map((carcard) => {
        return (
          <CarCardXLarge
            key={carcard._id}
            brand={carcard.brand.brandname}
            model={carcard.model.modelname}
            fuel={carcard.fuel.fueltype}
            lowerprice={carcard.lowerprice.lowerprice}
            ecomark={carcard.ecomark.ecomarktype}
            photocar={carcard.photocar[0].photourl}
          />
        );
      })}
    </div>
  );
};

export default CarListXLarge;
