import React from 'react';
import styles from './carList.module.css';
import CarCardData from '../carCards/carCardsData';
import CarCardXLarge from '../carCards/carCardXLarge.view';

const CarListXLarge = () => {
  return (
    <div className={styles.car_list}>
      {CarCardData.map(({ id, brandname, modelname, fuel, lowerprice, ecomarktype, photourl }) => (
        <CarCardXLarge
          key={id}
          brandname={brandname}
          modelname={modelname}
          fuel={fuel}
          lowerprice={lowerprice}
          ecomarktype={ecomarktype}
          photourl={photourl}
        />
      ))}
    </div>
  );
};

export default CarListXLarge;
