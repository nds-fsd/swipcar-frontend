import React, { useState } from 'react';
import styles from '../createRentingPage.module.css';
import stylesPure from '../../../components/pureComponents/pureComponents.module.css';
import useWindowSize from '../../../constants/useWindowSize';
import InputComponent from '../../../components/pureComponents/inputComponent';
// import DATADOMIE from '../dataDomie';
import ButtonActionIconComponent from '../../../components/pureComponents/buttonActionIconComponent';
import ButtonComponent from '../../../components/pureComponents/buttonComponent';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Step5Form = ({ stepPagePrev, stepPageNext }) => {
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
        <h2 className={styles._tittle}>Opciones de renting</h2>

        <div
          className={`${windowSize !== 'sm' && styles._row3_xlg}
    ${windowSize === 'sm' && styles._row3_sm}  
    `}
        >
          <div className={styles._boxElements}>
            <InputComponent
              {...register('kmAnuales', { required: 'Km Anuales requeridos' })}
              placeholder="Km anuales"
              name="kmAnuales"
              type="text"
            />
            {errors.kmAnuales && (
              <p className={stylesPure._error_label}>
                <span className={stylesPure._error_label_icon}>
                  <FontAwesomeIcon icon="exclamation-triangle" />
                </span>
                {errors.kmAnuales.message}
              </p>
            )}
          </div>

          <div className={styles._boxElements}>
            <InputComponent
              {...register('mesesRenting', { required: 'Meses requeridos' })}
              placeholder="Meses de pago"
              name="mesesRenting"
              type="number"
            />
            {errors.mesesRenting && (
              <p className={stylesPure._error_label}>
                <span className={stylesPure._error_label_icon}>
                  <FontAwesomeIcon icon="exclamation-triangle" />
                </span>
                {errors.mesesRenting.message}
              </p>
            )}
          </div>

          <div className={styles._boxElements}>
            <InputComponent
              {...register('rentingPrice', { required: 'Precio requerido' })}
              placeholder="Precio de la opción"
              name="rentingPrice"
              type="number"
            />
            {errors.rentingPrice && (
              <p className={stylesPure._error_label}>
                <span className={stylesPure._error_label_icon}>
                  <FontAwesomeIcon icon="exclamation-triangle" />
                </span>
                {errors.rentingPrice.message}
              </p>
            )}
          </div>
        </div>

        <ButtonActionIconComponent actionButton={addRenting} />

        <div className={styles._row_buttons}>
          <ButtonComponent
            label="Paso Anterior"
            alt="Paso Anterior"
            type="cancel"
            actionButton={stepPagePrev}
          />
          <ButtonComponent label="Guardar coche de renting" type="submit" alt="Guardar coche de renting" />
        </div>
      </form>
    </div>
  );
};

export default Step5Form;
