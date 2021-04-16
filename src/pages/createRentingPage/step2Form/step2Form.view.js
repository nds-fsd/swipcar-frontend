import React, { useState } from 'react';
import styles from '../createRentingPage.module.css';
import stylesPure from '../../../components/pureComponents/pureComponents.module.css';
import InputComponent from '../../../components/pureComponents/inputComponent';
import SelectComponent from '../../../components/pureComponents/selectComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import useWindowSize from '../../../constants/useWindowSize';
import { useForm } from 'react-hook-form';

import DATADOMIE from '../dataDomie';
import ButtonComponent from '../../../components/pureComponents/buttonComponent';

const Step2Form = ({stepPagePrev, stepPageNext}) => {
  const [inputData, setInputData] = useState({
    toggleButton: false,
  });
  const windowSize = useWindowSize();

  const handleInput = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });

    console.log('inputData   : ' , inputData);
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [entradas, setentradas] = useState([]);

  console.log('errors : ', errors);

  const onSubmit = (data, e) => {
    console.log('data :', data);
    setentradas([...entradas, data]);
    console.log('entradas : ', entradas);
    stepPageNext();
    // limpiar campos
    e.target.reset();
  };

  return (
    <div className={`${styles._wrapper} ${styles._form_step_animation}`}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          className={`${windowSize !== 'sm' && styles._row3_xlg}
    ${windowSize === 'sm' && styles._row3_sm}  
    `}
        >
          <div className={styles._boxElements}>
            <SelectComponent
              {...register('ecoMark', { required: 'Distintivo Eco requerido' })}
              placeholder="Distintivo Eco"
              name="ecoMark"
              dataoptions={DATADOMIE.EcoMark}
            />
            {errors.ecoMark && (
              <p className={stylesPure._error_label}>
                <span className={stylesPure._error_label_icon}>
                  <FontAwesomeIcon icon="exclamation-triangle" />
                </span>
                {errors.ecoMark.message}
              </p>
            )}
          </div>

          <div className={styles._boxElements}>
            <InputComponent
              {...register('cvMotor', {
                required: 'Número de CV requerido',
                maxLength: {
                  value: 3,
                  message: 'Número de CV superior al requerido',
                },
                minLength: {
                  value: 2,
                  message: 'Mínimo 2 carácteres',
                },
              })}
              placeholder="CV del Motor"
              name="cvMotor"
              id="cvMotor"
              type="number"
            />
            {errors.cvMotor && (
              <p className={stylesPure._error_label}>
                <span className={stylesPure._error_label_icon}>
                  <FontAwesomeIcon icon="exclamation-triangle" />
                </span>
                {errors.cvMotor.message}
              </p>
            )}
          </div>

          <div className={styles._boxElements}>
            <SelectComponent
              {...register('puertas', { required: 'Número de puertas requerido' })}
              placeholder="Número de Puertas"
              name="puertas"
              dataoptions={DATADOMIE.Puertas}
            />
            {errors.puertas && (
              <p className={stylesPure._error_label}>
                <span className={stylesPure._error_label_icon}>
                  <FontAwesomeIcon icon="exclamation-triangle" />
                </span>
                {errors.puertas.message}
              </p>
            )}
          </div>
        </div>
         <div
          className={`${windowSize !== 'sm' && styles._row3_xlg}
      ${windowSize === 'sm' && styles._row3_sm}  
      `}
        >
          <div className={styles._boxElements}>
            <InputComponent
              {...register('emisionMotor', { required: 'Emisión requerida' })}
              placeholder="Emisión en gramos por CO2/Km"
              name="emisionMotor"
              type="number"
            />
            {errors.emisionMotor && (
              <p className={stylesPure._error_label}>
                <span className={stylesPure._error_label_icon}>
                  <FontAwesomeIcon icon="exclamation-triangle" />
                </span>
                {errors.emisionMotor.message}
              </p>
            )}
          </div>

          <div className={styles._boxElements}>
            <SelectComponent
              {...register('color', { required: 'Color requerido' })}
              placeholder="Seleciona un Color"
              name="color"
              dataoptions={DATADOMIE.Color}
            />
            {errors.color && (
              <p className={stylesPure._error_label}>
                <span className={stylesPure._error_label_icon}>
                  <FontAwesomeIcon icon="exclamation-triangle" />
                </span>
                {errors.color.message}
              </p>
            )}
          </div>

          <div className={styles._boxElements}>
            <InputComponent
              {...register('cilindradaMotor', { required: 'Cilindrada requerida' })}
              placeholder="Cilindrada en cm3"
              name="cilindradaMotor"
              type="number"
            />
            {errors.cilindradaMotor && (
              <p className={stylesPure._error_label}>
                <span className={stylesPure._error_label_icon}>
                  <FontAwesomeIcon icon="exclamation-triangle" />
                </span>
                {errors.cilindradaMotor.message}
              </p>
            )}
          </div>
        </div>

        <div
          className={`${windowSize !== 'sm' && styles._row3_xlg}
    ${windowSize === 'sm' && styles._row3_sm}  
    `}
        >          
          <div className={styles._boxElements}>
            <InputComponent
              {...register('consumo', { required: 'Consumo requerido' })}
              placeholder="Consumo medio litros/100km"
              name="consumo"
              type="text"
            />
            {errors.consumo && (
              <p className={stylesPure._error_label}>
                <span className={stylesPure._error_label_icon}>
                  <FontAwesomeIcon icon="exclamation-triangle" />
                </span>
                {errors.consumo.message}
              </p>
            )}
          </div>
          <div className={styles._boxElements}>
            <InputComponent
              {...register('maletero', { required: 'Capacidad maletero requerida' })}
              placeholder="Capacidad de Maletero en litros"
              name="maletero"
              type="number"
            />
            {errors.maletero && (
              <p className={stylesPure._error_label}>
                <span className={stylesPure._error_label_icon}>
                  <FontAwesomeIcon icon="exclamation-triangle" />
                </span>
                {errors.maletero.message}
              </p>
            )}
          </div>
        </div>

        <h2 className={styles._tittle}>Medidas del coche</h2>

        <div
          className={`${windowSize !== 'sm' && styles._row3_xlg}
    ${windowSize === 'sm' && styles._row3_sm}
    `}
        >
          <div className={styles._boxElements}>
            <InputComponent
              {...register('dimensionesLargo', { required: 'Largo requerido' })}
              placeholder="Largo (cm)"
              name="dimensionesLargo"
              type="number"
            />
            {errors.dimensionesLargo && (
              <p className={stylesPure._error_label}>
                <span className={stylesPure._error_label_icon}>
                  <FontAwesomeIcon icon="exclamation-triangle" />
                </span>
                {errors.dimensionesLargo.message}
              </p>
            )}
          </div>
          <div className={styles._boxElements}>
            <InputComponent
              {...register('dimensionesAlto', { required: 'Alto requerido' })}
              placeholder="Alto (cm)"
              name="dimensionesAlto"
              type="number"
            />
            {errors.dimensionesAlto && (
              <p className={stylesPure._error_label}>
                <span className={stylesPure._error_label_icon}>
                  <FontAwesomeIcon icon="exclamation-triangle" />
                </span>
                {errors.dimensionesAlto.message}
              </p>
            )}
          </div>
          <div className={styles._boxElements}>
            <InputComponent
              {...register('dimensionesAncho', { required: 'Ancho requerido' })}
              placeholder="Ancho (cm)"
              name="dimensionesAncho"
              type="number"
            />
            {errors.dimensionesAncho && (
              <p className={stylesPure._error_label}>
                <span className={stylesPure._error_label_icon}>
                  <FontAwesomeIcon icon="exclamation-triangle" />
                </span>
                {errors.dimensionesAncho.message}
              </p>
            )}
          </div>
        </div>

        <div className={styles._row_buttons}>
            <ButtonComponent label="Paso Anterior" alt="Paso Anterior" type="cancel" actionButton={stepPagePrev}/>
            <ButtonComponent label="Paso Siguiente" type="submit" alt="Paso Siguiente" />
          </div>

      </form>
    </div>
  );
};

export default Step2Form;
