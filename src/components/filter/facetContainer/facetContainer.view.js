import React, { useEffect, useState } from 'react';
import { newRequest } from '../../../utils/newRequest';
import Checkbox from '../../checkbox';
import styles from './facetContainer.module.css';

const FacetContainer = ({ entity, targetData, register }) => {
  const [entityList, setEntityList] = useState([]);

  useEffect(() => {
    newRequest({ url: `${entity}/`, onSuccess: setEntityList });
  }, [entity]);

  return (
    <div className={styles._facet_container}>
      {entityList.map((entity) => {
        return (
          <Checkbox
            key={entity._id}
            name="brand"
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

export default FacetContainer;
