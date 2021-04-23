import React, { useContext } from 'react';
import styles from './carList.module.css';
import CarCardSmall from '../carCards/carCardSmall.view';
import { CarListContext } from '../../store/carListContext';

const CarListSmall = () => {
  const { listOfCars } = useContext(CarListContext);

  return (
    <div className={styles.car_list}>
      {listOfCars.map((carcard) => (
        <CarCardSmall
          key={carcard._id}
          brand={carcard.brand.brandname}
          model={carcard.model.modelname}
          fuel={carcard.fuel.fueltype}
          lowerprice={carcard.lowerprice.lowerprice}
          ecomark={carcard.ecomark.ecomarktype}
          photocar={carcard.photocar[0].photourl}
        />
      ))}
    </div>
  );
};

export default CarListSmall;
