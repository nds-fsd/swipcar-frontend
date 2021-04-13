import React, { useState } from 'react';
import styles from '../createRentingPage.module.css';
import useWindowSize from '../../../constants/useWindowSize';
import InputComponent from '../../../components/pureComponents/inputComponent';
import SelectComponent from '../../../components/pureComponents/selectComponent';
// import ToggleButtonComponent from '../../../components/pureComponents/toggleButtonComponent';
import DATADOMIE from '../dataDomie';
const Step2Form = () => {
  const rentingvalue = [
    {
      _id: 1,
      toggleLabel: 'Sin Entrada',
      iconLabel: 'piggy-bank',
      isChecked: true,
    },
    {
      _id: 2,
      toggleLabel: 'Seguro a todo riesgo sin franquicia',
      iconLabel: 'car-crash',
      isChecked: false,
    },
    {
      _id: 3,
      toggleLabel: 'Asistencia en carretera',
      iconLabel: 'truck-pickup',
      isChecked: true,
    },
    {
      _id: 4,
      toggleLabel: 'Mantenimiento y revisiones',
      iconLabel: 'air-freshener',
      isChecked: true,
    },
    {
      _id: 5,
      toggleLabel: 'Averías y reparaciones',
      iconLabel: 'tools',
      isChecked: false,
    },
  ];

  //   const carEstate = CarProfileDataEstate.map((value) => {
  // console.log('value[0]', Object.keys(value)[0]);
  // debugger;
  //   })

  const [inputData, setInputData] = useState({
    toggleButton: false,
  });
  const windowSize = useWindowSize();

  const handleInput = (e) => {
    // setInputData(e.target.value);
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles._form_step_animation} >
      <div
        className={`${windowSize !== 'sm' && styles._row3_xlg}
    ${windowSize === 'sm' && styles._row3_sm}  
    `}
      >
        <div className={styles._boxElements}>
          <SelectComponent
            placeholder="Distintivo Eco"
            name="ecoMark"
            onChange={handleInput}
            dataoptions={DATADOMIE.EcoMark}
          />
        </div>

        <div className={styles._boxElements}>
          <InputComponent
            placeholder="CV del Motor"
            name="cvMotor"
            type="text"
            onChange={handleInput}
          />
        </div>

        <div className={styles._boxElements}>
          <SelectComponent
            placeholder="Número de Puertas"
            name="puertas"
            onChange={handleInput}
            dataoptions={DATADOMIE.Puertas}
          />
        </div>
      </div>
      <div
        className={`${windowSize !== 'sm' && styles._row3_xlg}
      ${windowSize === 'sm' && styles._row3_sm}  
      `}
      >
        <div className={styles._boxElements}>
          <InputComponent
            placeholder="Emisión en gramos por CO2/Km"
            name="emisionMotor"
            type="number"
            onChange={handleInput}
          />
        </div>

        <div className={styles._boxElements}>
          <SelectComponent
            placeholder="Seleciona un Color"
            name="color"
            onChange={handleInput}
            dataoptions={DATADOMIE.Color}
          />
        </div>

        <div className={styles._boxElements}>
          <InputComponent
            placeholder="Cilindrada"
            name="cilindradaMotor"
            type="text"
            onChange={handleInput}
          />
        </div>

      </div>
    </div>
  );
};

export default Step2Form;
