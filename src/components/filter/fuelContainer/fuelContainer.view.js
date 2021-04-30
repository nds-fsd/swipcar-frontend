import React from 'react';
import styles from './fuelContainer.module.css';

const FuelContainer = () => {
  return (
    <>
      <div className={styles._fuel_item_container}>
        <div className={styles._fuel_item}>Electrico 100%</div>
        <div className={styles._fuel_car_count}>xx</div>
      </div>
      <div className={styles._fuel_item_container}>
        <div className={styles._fuel_item}>Híbrido</div>
        <div className={styles._fuel_car_count}>xx</div>
      </div>
      <div className={styles._fuel_item_container}>
        <div className={styles._fuel_item}>Hidrogeno</div>
        <div className={styles._fuel_car_count}>xx</div>
      </div>
      <div className={styles._fuel_item_container}>
        <div className={styles._fuel_item}>Eco (Gazolina)</div>
        <div className={styles._fuel_car_count}>xx</div>
      </div>
      <div className={styles._fuel_item_container}>
        <div className={styles._fuel_item}>Eco (Diesel)</div>
        <div className={styles._fuel_car_count}>xx</div>
      </div>
    </>
  );
};

export default FuelContainer;
