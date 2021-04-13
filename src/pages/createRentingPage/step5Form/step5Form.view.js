import React, { useState } from 'react';
import styles from '../createRentingPage.module.css';
import useWindowSize from '../../../constants/useWindowSize';
import InputComponent from '../../../components/pureComponents/inputComponent';
// import DATADOMIE from '../dataDomie';
import ButtonActionIconComponent from '../../../components/pureComponents/buttonActionIconComponent';
const Step5Form = () => {
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
  const addRenting = () => {
    // setInputData(e.target.value);
    alert('Add Renting!!');
  };

  return (
    <div className={styles._form_step_animation}>
      <h2 className={styles._tittle}>Opciones de renting</h2>

      <div
        className={`${windowSize !== 'sm' && styles._row3_xlg}
    ${windowSize === 'sm' && styles._row3_sm}  
    `}
      >
        <div className={styles._boxElements}>
          <InputComponent
            placeholder="Km anuales"
            name="kmAnuales"
            type="text"
            onChange={handleInput}
          />
        </div>

        <div className={styles._boxElements}>
          <InputComponent
            placeholder="Meses de pago"
            name="mesesRenting"
            type="number"
            onChange={handleInput}
          />
        </div>

        <div className={styles._boxElements}>
          <InputComponent
            placeholder="Precio de la opción"
            name="rentingPrice"
            type="number"
            onChange={handleInput}
          />
        </div>

      </div>

      <ButtonActionIconComponent actionButton={addRenting} />

    </div>
  );
};

export default Step5Form;
