import React, { useEffect, useState } from 'react';
import styles from './transmision.module.css';
import { newRequest } from '../../../utils/newRequest';
import Checkbox from '../../checkbox';

const Transmision = ({ entity, targetData, register }) => {
  const [transmisionList, setTransmisionList] = useState([]);

  useEffect(() => {
    newRequest({ url: `${entity}/`, onSuccess: setTransmisionList });
  }, [entity]);

  return (
    <div className={styles._transmission_container}>
      {transmisionList.map((entity) => {
        return (
          <Checkbox
            key={entity._id}
            name="transmision"
            targetdata={entity[targetData]}
            value={entity[targetData]}
            entity={entity}
            register={register}
          />
        );
      })}
    </div>
  );
};
export default Transmision;
