import React, { useState, useRef } from 'react';
import styles from './priceMultirange.module.css';
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import FilterButton from '../filterButton';

const PriceMultirange = ({ setMinPriceFilter, setMaxPriceFilter }) => {
  const inputRef = useRef();
  const nodeRef = React.useRef(null);
  const [minValue, setMinValue] = useState(200);
  const [maxValue, setMaxValue] = useState(600);

  const handleReset = () => {
    setMinValue(200);
    setMaxValue(600);
    setMinPriceFilter('');
    setMaxPriceFilter('');
  };
  const handleApply = (minValue, maxValue) => {
    setMinPriceFilter(minValue);
    setMaxPriceFilter(maxValue);
  };

  return (
    <div className={styles._range_container}>
      <div className={styles._container_title}>
        <div className={styles._title}>Precio</div>
        <div className={styles._filter_cancelation} onClick={handleReset}>
          borrar
        </div>
      </div>
      <Range
        ref={inputRef}
        nodeRef={nodeRef}
        onChange={(value) => {
          setMinValue(value[0]);
          setMaxValue(value[1]);
        }}
        min={50}
        max={1000}
        step={5}
        value={[minValue, maxValue]}
        defaultValue={[200, 600]}
        allowCross={false}
        railStyle={{
          height: 4,
          backgroundColor: '#EBEBEB',
        }}
        trackStyle={[{ border: 'solid 2px #6a983c' }]}
        handleStyle={[
          {
            height: 22,
            width: 22,
            marginLeft: -10,
            marginTop: -10,
            border: 'solid 1px #d1d1d1',
            background: '#ffffff',
            cursor: 'pointer',
          },
          {
            height: 22,
            width: 22,
            marginLeft: -10,
            marginTop: -10,
            border: 'solid 1px #d1d1d1',
            background: '#ffffff',
            cursor: 'pointer',
          },
        ]}
      />
      <div className={styles._values_container}>
        <div className={styles._value_box}>{minValue} €</div>
        <div className={styles._value_box}>{maxValue} €</div>
      </div>
      <FilterButton
        buttonText="Filtar por precio"
        buttonStyle="filled"
        onClick={() => handleApply(minValue, maxValue)}
      />
    </div>
  );
};

export default PriceMultirange;
