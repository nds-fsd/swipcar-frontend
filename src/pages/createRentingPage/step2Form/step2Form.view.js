import React, { useContext, useState, useEffect } from 'react';
import styles from '../createRentingPage.module.css';
import stylesPure from '../../../components/pureComponents/pureComponents.module.css';
import InputComponent from '../../../components/pureComponents/inputComponent';
import SelectComponent from '../../../components/pureComponents/selectComponent';
import ButtonComponent from '../../../components/pureComponents/buttonComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import useWindowSize from '../../../constants/useWindowSize';
import { useForm } from 'react-hook-form';

import DATADOMIE from '../dataDomie';
import { StoreContext } from '../../../store/StoreProvider';
import { types } from '../../../store/StoreReducer';

const Step2Form = ({ stepPagePrev, stepPageNext }) => {
  // const [inputData, setInputData] = useState({
  //   toggleButton: false,
  // });
  const windowSize = useWindowSize();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [store, dispatch] = useContext(StoreContext);


  const Step2Data = store.Step2Data;
  const {
    ecoMark,
    cvMotor,
    puertas,
    emisionMotor,
    color,
    cilindradaMotor,
    consumo,
    maletero,
    dimensionesLargo,
    dimensionesAlto,
    dimensionesAncho,
  } = Step2Data;

  const onSubmit = (data, e) => {
    dispatch({ type: types.add, key: 'Step2Data', data });
    stepPageNext();
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
              refs={ecoMark}
              label="Distintivo Eco"
              placeholder="Eco Mark"
              name="ecoMark"
              defaultValue={ecoMark}
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
              refs={cvMotor}
              label="CV del Motor"
              placeholder="CV"
              name="cvMotor"
              defaultValue={cvMotor}
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
              refs={Step2Data.puertas}
              label="Número de Puertas"
              placeholder="Puertas"
              defaultValue={puertas}
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
              refs={Step2Data.emisionMotor}
              label="Emisión en gramos por CO2/Km"
              placeholder="Emisión"
              defaultValue={emisionMotor}
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
              refs={color}
              label="Seleciona un Color"
              placeholder="Color"
              defaultValue={color}
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
              refs={cilindradaMotor}
              label="Cilindrada en cm3"
              placeholder="Cilindrada"
              defaultValue={cilindradaMotor}
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
              refs={consumo}
              label="Consumo medio litros/100km"
              placeholder="Consumo"
              defaultValue={consumo}
              name="consumo"
              type="number"
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
              refs={maletero}
              label="Capacidad de Maletero en litros"
              placeholder="Maletero"
              defaultValue={maletero}
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
              refs={dimensionesLargo}
              label="Largo del coche (cm)"
              placeholder="Largo"
              defaultValue={dimensionesLargo}
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
              refs={dimensionesAlto}
              label="Alto del coche (cm)"
              placeholder="Alto"
              defaultValue={dimensionesAlto}
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
              refs={dimensionesAncho}
              label="Ancho del coche (cm)"
              placeholder="Ancho"
              defaultValue={dimensionesAncho}
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

export default Step2Form;
