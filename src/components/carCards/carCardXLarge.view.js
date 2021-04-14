import React from 'react';
//import { useLocation, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from './carCard.module.css';
import { ReactComponent as GasPumpIcon } from '../assets/gasPumpIcon.svg';

const CarCardXLarge = ({ id, brand, model, fuel, lowerprice, ecomark, photocar, carprofile }) => {
  return (
    <div className={styles.card_wrapper_xlarge}>
      <Link to="/renting-car" style={{ textDecoration: 'none' }}>
        <div className={styles.card_header}>
          <div className={styles.card_header_left}>
            <div className={styles.card_title}>
              {brand} {model}
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
        <img className={styles.car_picture} alt="carPicture" src={photocar} />
      </Link>
    </div>
  );
};

export default CarCardXLarge;
