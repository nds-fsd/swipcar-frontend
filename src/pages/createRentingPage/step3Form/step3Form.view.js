import React, { useState } from 'react';
import styles from '../createRentingPage.module.css';
import useWindowSize from '../../../constants/useWindowSize';
import InputComponent from '../../../components/pureComponents/inputComponent';
import SelectComponent from '../../../components/pureComponents/selectComponent';
// import ToggleButtonComponent from '../../../components/pureComponents/toggleButtonComponent';
import DATADOMIE from '../dataDomie';
import ToggleButtonComponent from '../../../components/pureComponents/toggleButtonComponent';
const Step3Form = () => {
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
      <div
        className={`${windowSize !== 'sm' && styles._row3_xlg}
    ${windowSize === 'sm' && styles._row3_sm}  
    `}
      >
        <div className={styles._boxElements}>
          <InputComponent
            placeholder="Cilindrada en cm3"
            name="cilindrada"
            type="text"
            onChange={handleInput}
          />
        </div>
        <div className={styles._boxElements}>
          <InputComponent
            placeholder="Consumo medio litros/100km"
            name="consumo"
            type="text"
            onChange={handleInput}
          />
        </div>
        <div className={styles._boxElements}>
          <InputComponent
            placeholder="Capacidad de Maletero en litros"
            name="maletero"
            type="text"
            onChange={handleInput}
          />
        </div>
        <div className={styles._boxElements}>
          <InputComponent
            placeholder="Dimensiones"
            name="dimensiones"
            type="text"
            onChange={handleInput}
          />
        </div>
      </div>

      <h2 className={styles._tittle}>Renting Goodies</h2>

      <div className={styles._toggles_list}>
        {DATADOMIE.Googies.map((value) => (
          <div key={value._id}>
            <div>
              <ToggleButtonComponent
                name={value.name}
                type="checkbox"
                checked={value.isChecked}
                label={value.name}
                iconlabel={value.iconlabel}
              />
              {/* onChange={_handleToggle} */}
            </div>
          </div>
        ))}
      </div>

      <h2 className={styles._tittle}>Equipamiento Destacado</h2>

      <div className={styles._toggles_list}>
        {DATADOMIE.EquipamientoDestacado.map((value) => (
          <div key={value._id}>
            <div>
              <ToggleButtonComponent
                name={value.name}
                type="checkbox"
                checked={value.isChecked}
                label={value.name}
                iconlabel={value.iconlabel}
              />
              {/* onChange={_handleToggle} */}
            </div>
          </div>
        ))}
      </div>


    </div>
  );
};

export default Step3Form;
