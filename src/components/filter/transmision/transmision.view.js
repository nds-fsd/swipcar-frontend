import React, { useState } from 'react';
import styles from './transmision.module.css';

const Transmision = ({ setTransmisionFilter }) => {
  const [isChecked, setIsChecked] = useState(false);

  const transmisionList = [
    {
      id: '1',
      targetdata: 'Manual',
      value: 'Manual',
    },
    {
      id: '2',
      targetdata: 'Automático',
      value: 'Automático',
    },
  ];
  const [activeTransmision, setActiveTransmision] = useState(transmisionList[0]);

  const handleSelectTransmision = (transmision, id) => {
    setActiveTransmision(id);
    setIsChecked(!isChecked);
    setTransmisionFilter(transmision);
  };

  const handleCancelTransmisionFilter = () => {
    setTransmisionFilter('');
    setActiveTransmision('');
  };
  return (
    <>
      <div className={styles._transmision_wrapper}>
        <div className={styles._container_title}>
          <div className={styles._title}>Transmisión</div>
          <div className={styles._filter_cancelation} onClick={handleCancelTransmisionFilter}>
            borrar
          </div>
        </div>
        {transmisionList.map((transmision, id) => {
          return (
            <div
              key={transmision.id}
              id={transmision.id}
              className={
                activeTransmision === id
                  ? `${styles._transmision_item_container} ${styles.transmision_item_active}`
                  : `${styles._transmision_item_container}`
              }
              type="text"
              value={transmision.value}
              onClick={() => handleSelectTransmision(transmision.value, id)}
            >
              <div className={styles._transmision_item}>{transmision.targetdata}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Transmision;
