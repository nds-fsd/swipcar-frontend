import React, { useState } from 'react';
import styles from './equipmentWrapper.module.css';
import { ReactComponent as CheckIcon } from '../assets/checkIcon.svg';

const EquipmentWrapper = ({ equipmentList, equipmentCategory }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={styles._equipment_wrapper}>
      <div className={styles._equipment_container}>
        <div className={styles._equipment_title}>{equipmentCategory}</div>
        <div onClick={() => setExpanded(!expanded)} className={styles._equipment_accordion_label}>
          {expanded ? 'cerrar' : `...ver más`}
        </div>
      </div>
      {expanded && (
        <>
          {equipmentList.map((techItem) => {
            return (
              <div className={styles._tech_item_container} key={techItem._id}>
                <div className={styles._arrow_icon_container}>
                  <CheckIcon className={styles._arrow_icon} />
                </div>
                <div className={styles._tech_item}>{techItem}</div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};
export default EquipmentWrapper;
