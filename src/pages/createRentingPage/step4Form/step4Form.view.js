import React, { useState } from 'react';
import styles from '../createRentingPage.module.css';
import stylesPure from '../../../components/pureComponents/pureComponents.module.css';
import useWindowSize from '../../../constants/useWindowSize';
import InputComponent from '../../../components/pureComponents/inputComponent';
// import DATADOMIE from '../dataDomie';
import ButtonActionIconComponent from '../../../components/pureComponents/buttonActionIconComponent';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ButtonComponent from '../../../components/pureComponents/buttonComponent';

const Step4Form = ({ stepPagePrev, stepPageNext }) => {
  const [inputData, setInputData] = useState({
    toggleButton: false,
  });
  const windowSize = useWindowSize();

  const handleInput = (e) => {
    // setInputData(e.target.value);
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  //! Rehacer con swhitch case
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

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [entradas, setentradas] = useState([]);


  const onSubmit = (data, e) => {
    setentradas([...entradas, data]);
    stepPageNext();
    // limpiar campos
    e.target.reset();
  };

  return (
    <div className={`${styles._wrapper} ${styles._form_step_animation}`}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className={styles._tittle}>Tecnología Incluida</h2>

        <div
          className={`${windowSize !== 'sm' && styles._row3_xlg}
    ${windowSize === 'sm' && styles._row3_sm}  
    `}
        >
          <div className={styles._boxElements}>
            <InputComponent
              {...register('tecnologia', { required: 'Tecnología requerida' })}
              placeholder="Añade una tecnología"
              name="tecnologia"
              type="text"
            />
            {errors.tecnologia && (
              <p className={stylesPure._error_label}>
                <span className={stylesPure._error_label_icon}>
                  <FontAwesomeIcon icon="exclamation-triangle" />
                </span>
                {errors.tecnologia.message}
              </p>
            )}
            <br />
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
              {...register('confort', { required: 'Confort requerida' })}
              placeholder="Añade un confort"
              name="confort"
              type="text"
            />
            {errors.confort && (
              <p className={stylesPure._error_label}>
                <span className={stylesPure._error_label_icon}>
                  <FontAwesomeIcon icon="exclamation-triangle" />
                </span>
                {errors.confort.message}
              </p>
            )}
            <br />
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
              {...register('seguridad', { required: 'Seguridad requerida' })}
              placeholder="Añade una seguridad"
              name="seguridad"
              type="text"
            />
            {errors.seguridad && (
              <p className={stylesPure._error_label}>
                <span className={stylesPure._error_label_icon}>
                  <FontAwesomeIcon icon="exclamation-triangle" />
                </span>
                {errors.seguridad.message}
              </p>
            )}
            <br />
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
              {...register('exterior', { required: 'Exterior requerido' })}
              placeholder="Añade un exterior"
              name="exterior"
              type="text"
            />
            {errors.exterior && (
              <p className={stylesPure._error_label}>
                <span className={stylesPure._error_label_icon}>
                  <FontAwesomeIcon icon="exclamation-triangle" />
                </span>
                {errors.exterior.message}
              </p>
            )}
            <br />
            <ButtonActionIconComponent actionButton={addExterior} />
          </div>
        </div>

        <div className={styles._row_buttons}>
          <ButtonComponent
            label="Paso Anterior"
            alt="Paso Anterior"
            type="cancel"
            actionButton={stepPagePrev}
          />
          <ButtonComponent label="Paso Siguiente" type="submit" alt="Paso Siguiente" />
        </div>
      </form>
    </div>
  );
};

export default Step4Form;
