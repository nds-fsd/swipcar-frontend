import React, { useState } from 'react';
import styles from './timeOption.module.css';

const TimeOption = ({ setTimeFilter }) => {
  const [isChecked, setIsChecked] = useState(false);
  const timeList = [
    {
      id: '1',
      targetdata: '12 Meses',
      value: 12,
    },
    {
      id: '2',
      targetdata: '18 Meses',
      value: 18,
    },
    {
      id: '3',
      targetdata: '24 Meses',
      value: 24,
    },
    {
      id: '4',
      targetdata: '36 Meses',
      value: 36,
    },
    {
      id: '5',
      targetdata: '48 Meses',
      value: 48,
    },
    {
      id: '6',
      targetdata: '60 Meses',
      value: 60,
    },
  ];
  const [activeTime, setActiveTime] = useState(timeList[0]);

  const handleSelectTime = (time, id) => {
    setActiveTime(id);
    setIsChecked(!isChecked);
    setTimeFilter(time.value);
  };

  const handleCancelTimeFilter = () => {
    setTimeFilter('');
    setActiveTime('');
  };
  return (
    <>
      <div className={styles._time_title_container}>
        <div className={styles._container_title}>
          <div className={styles._title}>Tiempo</div>
          <div className={styles._filter_cancelation} onClick={handleCancelTimeFilter}>
            borrar
          </div>
        </div>
      </div>
      <div className={styles._times_container}>
        {timeList.map((time, id) => {
          return (
            <div
              key={time.id}
              id={time.id}
              className={
                activeTime === id
                  ? `${styles._time_item_container} ${styles.time_item_active}`
                  : `${styles._time_item_container}`
              }
              type="text"
              value={time.value}
              onClick={() => handleSelectTime(time, id)}
            >
              <div className={styles._time_item}>{time.targetdata}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TimeOption;
