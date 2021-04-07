import React from 'react';
import styles from './carList.module.css';
import CarCardData from '../carCards/carCardsData';
import CarCardSmall from '../carCards/carCardSmall.view';
import useWindowSize from '../../constants/useWindowSize';

const CarListSmall = () => {
  const windowSize = useWindowSize();
  return (
    <div className={styles.car_list}>
      {CarCardData.map(({ id, brandname, modelname, fuel, lowerprice, ecomarktype, photourl }) => (
        <CarCardSmall
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

export default CarListSmall;
