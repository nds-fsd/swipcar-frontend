import React, { useState, useEffect } from 'react';
import styles from './fuelContainer.module.css';
import { newRequest } from '../../../utils/newRequest';

const FuelContainer = ({ setTabQuery }) => {
  const [fuelList, setFuelList] = useState([]);

  useEffect(() => {
    newRequest({ url: '/fuel/', onSuccess: setFuelList });
  }, []);

  const handleClick = (value) => {
    setTabQuery(`?fuel=${value}`);
  };

  const fuelCount = '50';
  return (
    <>
      <div className={styles._fuel_wrapper}>
        {fuelList.map((fuel) => {
          return (
            <div
              className={styles._fuel_item_container}
              key={fuel._id}
              value={fuel.fueltype}
              onClick={() => handleClick(fuel.fueltype)}
            >
              <input type="text" disabled className={styles._fuel_item} value={fuel.fueltype} />
              <div className={styles._fuel_car_count}>{fuelCount}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FuelContainer;
