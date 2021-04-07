import React from 'react';
import styles from './carCard.module.css';
import { ReactComponent as GasPumpIcon } from '../assets/gasPumpIcon.svg';

const CarCardSmall = ({ id, brandname, modelname, fuel, lowerprice, ecomarktype, photourl }) => {
  return (
    <div className={styles.card_wrapper_small}>
      <div className={styles.card_header}>
        <div className={styles.card_header_left}>
          <div className={styles.card_title}>
            {brandname} {modelname}
          </div>
          <div className={styles.card_fuel_container}>
            <GasPumpIcon className={styles.gas_pump_icon} />
            <div className={styles.card_fuel}>{fuel}</div>
          </div>
        </div>
        <div className={styles.card_header_right}>
          <div className={styles.price_text}>Desde</div>
          <div className={styles.lowerprice}>{lowerprice} €</div>
          <div className={styles.price_text}>mes - IVA Incluido</div>
        </div>
      </div>

      <img className={styles.car_picture} alt="carPicture" src={photourl} />
    </div>
  );
};

export default CarCardSmall;
