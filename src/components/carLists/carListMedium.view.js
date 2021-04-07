import React from 'react';
import styles from './carList.module.css';
import CarCardData from '../carCards/carCardsData';
import CarCardMedium from '../carCards/carCardMedium.view';

const CarListMedium = () => {
  return (
    <div className={styles.car_list}>
      {CarCardData.map(({ id, brandname, modelname, fuel, lowerprice, ecomarktype, photourl }) => (
        <CarCardMedium
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

export default CarListMedium;
