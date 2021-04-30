import React from 'react';
import { Link } from 'react-router-dom';
import styles from './carCard.module.css';

const CarCardXLarge = ({ brand, model, fuel, lowerprice, photocar, carprofile }) => {
  return (
    <div className={styles._card_wrapper}>
      <Link
        to={{
          pathname: `/renting-car/${brand}/${model}/${carprofile}`,
          state: { carId: carprofile },
        }}
        style={{ textDecoration: 'none' }}
      >
        <div className={styles._card_header}>
          <div className={styles._card_title}>
            {brand} {model}
          </div>
          <div className={styles._card_fuel}>{fuel}</div>
        </div>
        <img className={styles._car_picture} alt="carPicture" src={photocar} />
        <div className={styles._card_footer}>
          <div className={styles._card_price_container}>
            <div className={styles._price_text}>Desde</div>
            <div className={styles._lowerprice}>{lowerprice} €</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CarCardXLarge;
