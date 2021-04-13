import React, { useState } from 'react';
import styles from '../createRentingPage.module.css';
import useWindowSize from '../../../constants/useWindowSize';
// import InputComponent from '../../../components/pureComponents/inputComponent';
import SelectComponent from '../../../components/pureComponents/selectComponent';
import ToggleButtonComponent from '../../../components/pureComponents/toggleButtonComponent';
import DATADOMIE from '../dataDomie';
const Step1Form = () => {
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
    <div className={styles._form_step_animation}>
      <div className={styles._toggles_list}>
        {DATADOMIE.CarProfileDataEstate.map((value) => (
          <div key={value._id}>
            <div>
              <ToggleButtonComponent
                name={value.name}
                type="checkbox"
                checked={value.isChecked}
                label={value.name}
                iconlabel={value.name}
              />
              {/* onChange={_handleToggle} */}
            </div>
          </div>
        ))}
      </div>

      <div
        className={`${windowSize !== 'sm' && styles._row3_xlg}
      ${windowSize === 'sm' && styles._row3_sm}  
      `}
      >
        {/* <div className={styles._boxElements}>
          <InputComponent placeholder="Input 1" name="input1" type="text" onChange={handleInput} />
          <legend>{inputData && inputData.input1}</legend>
        </div> */}
        
        <div className={styles._boxElements}>
          <SelectComponent
            placeholder="Selecciona un tipo"
            name="carType"
            onChange={handleInput}
            dataoptions={DATADOMIE.CarType}
          />
        </div>
        
        <div className={styles._boxElements}>
          <SelectComponent
            placeholder="Selecciona una Marca"
            name="carBrand"
            onChange={handleInput}
            dataoptions={DATADOMIE.Brand}
          />
        </div>
        
        <div className={styles._boxElements}>
          <SelectComponent
            placeholder="Selecciona un Modelo"
            name="carModel"
            onChange={handleInput}
            dataoptions={DATADOMIE.Model}
          />
        </div>

      </div>

      <div
        className={`${windowSize !== 'sm' && styles._row3_xlg}
      ${windowSize === 'sm' && styles._row3_sm}  
      `}
      >        
        <div className={styles._boxElements}>
          <SelectComponent
            placeholder="Versión del Modelo"
            name="carVersion"
            onChange={handleInput}
            dataoptions={DATADOMIE.Version}
          />
        </div>
        
        <div className={styles._boxElements}>
          <SelectComponent
            placeholder="Selecciona un tipo de Transmisión"
            name="transmision"
            onChange={handleInput}
            dataoptions={DATADOMIE.Transmision}
          />
        </div>
        
        <div className={styles._boxElements}>
          <SelectComponent
            placeholder="Selecciona un tipo de Carburante"
            name="fuel"
            onChange={handleInput}
            dataoptions={DATADOMIE.Fuel}
          />
        </div>

      </div>


    </div>
  );
};

export default Step1Form;
