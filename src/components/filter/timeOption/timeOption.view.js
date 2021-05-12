import React from 'react';
import styles from './timeOption.module.css';
import Checkbox from '../../checkbox';

const TimeOption = ({ entity, targetData, register }) => {
  return (
    <div className={styles._timeOption_container}>
      <Checkbox
        name="duracion"
        targetdata="24 Meses"
        value={'24 Meses'}
        entity="rentingOption"
        register={register}
      />
      <Checkbox
        name="duracion"
        targetdata="36 Meses"
        value={'36 Meses'}
        entity="rentingOption"
        register={register}
      />
      <Checkbox
        name="duracion"
        targetdata="48 Meses"
        value={'48 Meses'}
        entity="rentingOption"
        register={register}
      />
      <Checkbox
        name="duracion"
        targetdata="60 Meses"
        value={'60 Meses'}
        entity="rentingOption"
        register={register}
      />
    </div>
  );
};

export default TimeOption;
