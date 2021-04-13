import React, { useState } from 'react';
import styles from '../createRentingPage.module.css';
import useWindowSize from '../../../constants/useWindowSize';
import InputComponent from '../../../components/pureComponents/inputComponent';
// import DATADOMIE from '../dataDomie';
import ButtonActionIconComponent from '../../../components/pureComponents/buttonActionIconComponent';
const Step4Form = () => {
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
  const addTecnology = () => {
    // setInputData(e.target.value);
    alert('Add Technology!!');
  };
  const addConfort = () => {
    // setInputData(e.target.value);
    alert('Add Confort!!');
  };
  const addSegurity = () => {
    // setInputData(e.target.value);
    alert('Add Security!!');
  };
  const addExterior = () => {
    // setInputData(e.target.value);
    alert('Add Exterior!!');
  };

  return (
    <div  className={styles._form_step_animation}>
      <h2 className={styles._tittle}>Tecnología Incluida</h2>

      <div
        className={`${windowSize !== 'sm' && styles._row3_xlg}
    ${windowSize === 'sm' && styles._row3_sm}  
    `}
      >
        <div className={styles._boxElements}>
          <InputComponent
            placeholder="Añade una tecnología"
            name="cilindrada"
            type="text"
            onChange={handleInput}
          />
          <br/>
          <ButtonActionIconComponent actionButton={addTecnology} />
        </div>
      </div>

      <h2 className={styles._tittle}>Confort Incluido</h2>

      <div
        className={`${windowSize !== 'sm' && styles._row3_xlg}
    ${windowSize === 'sm' && styles._row3_sm}  
    `}
      >
        <div className={styles._boxElements}>
          <InputComponent
            placeholder="Añade un confort"
            name="cilindrada"
            type="text"
            onChange={handleInput}
          />
          <br/>
          <ButtonActionIconComponent actionButton={addConfort} />
        </div>
      </div>

      <h2 className={styles._tittle}>Seguridad Incluida</h2>

      <div
        className={`${windowSize !== 'sm' && styles._row3_xlg}
    ${windowSize === 'sm' && styles._row3_sm}  
    `}
      >
        <div className={styles._boxElements}>
          <InputComponent
            placeholder="Añade una seguridad"
            name="cilindrada"
            type="text"
            onChange={handleInput}
          />
          <br/>
          <ButtonActionIconComponent actionButton={addSegurity} />
        </div>
      </div>

      <h2 className={styles._tittle}>Exterior Incluida</h2>

      <div
        className={`${windowSize !== 'sm' && styles._row3_xlg}
    ${windowSize === 'sm' && styles._row3_sm}  
    `}
      >
        <div className={styles._boxElements}>
          <InputComponent
            placeholder="Añade un exterior"
            name="cilindrada"
            type="text"
            onChange={handleInput}
          />
          <br/>
          <ButtonActionIconComponent actionButton={addExterior} />
        </div>
      </div>
    </div>
  );
};

export default Step4Form;
