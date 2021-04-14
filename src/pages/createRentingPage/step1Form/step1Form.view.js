import React, { useState } from 'react';

import useWindowSize from '../../../constants/useWindowSize';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useForm } from 'react-hook-form';

import styles from '../createRentingPage.module.css';
import stylesPure from '../../../components/pureComponents/pureComponents.module.css';
import SelectComponent from '../../../components/pureComponents/selectComponent';
import ToggleButtonComponent from '../../../components/pureComponents/toggleButtonComponent';
import ButtonComponent from '../../../components/pureComponents/buttonComponent';

import DATADOMIE from '../dataDomie';

const Step1Form = ({ stepPagePrev, stepPageNext }) => {
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

  const [inputData, setInputData] = useState({
    toggleButton: false,
  });
  const windowSize = useWindowSize();

  const handleInput = (e) => {
    // setInputData(e.target.value);
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  return (
    <form className={styles._form_step_animation} onSubmit={handleSubmit(onSubmit)}>
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
            {...register('carType', { required: 'Tipo de coche requerido' })}
            placeholder="Selecciona un tipo"
            name="carType"
            onChange={handleInput}
            dataoptions={DATADOMIE.CarType}
          />
          {errors.carType && (
            <p className={stylesPure._error_label}>
              <span className={stylesPure._error_label_icon}>
                <FontAwesomeIcon icon="exclamation-triangle" />
              </span>
              {errors.carType.message}
            </p>
          )}
        </div>

        <div className={styles._boxElements}>
          <SelectComponent
            {...register('carBrand', { required: 'Marca de coche requerida' })}
            placeholder="Selecciona una Marca"
            name="carBrand"
            onChange={handleInput}
            dataoptions={DATADOMIE.Brand}
          />
          {errors.carBrand && (
            <p className={stylesPure._error_label}>
              <span className={stylesPure._error_label_icon}>
                <FontAwesomeIcon icon="exclamation-triangle" />
              </span>
              {errors.carBrand.message}
            </p>
          )}
        </div>

        <div className={styles._boxElements}>
          <SelectComponent
            {...register('carModel', { required: 'Modelo de coche requerido' })}
            placeholder="Selecciona un Modelo"
            name="carModel"
            onChange={handleInput}
            dataoptions={DATADOMIE.Model}
          />
          {errors.carModel && (
            <p className={stylesPure._error_label}>
              <span className={stylesPure._error_label_icon}>
                <FontAwesomeIcon icon="exclamation-triangle" />
              </span>
              {errors.carModel.message}
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
          <SelectComponent
            {...register('carVersion', { required: 'Versión de coche requerida' })}
            placeholder="Versión del Modelo"
            name="carVersion"
            onChange={handleInput}
            dataoptions={DATADOMIE.Version}
          />
          {errors.carVersion && (
            <p className={stylesPure._error_label}>
              <span className={stylesPure._error_label_icon}>
                <FontAwesomeIcon icon="exclamation-triangle" />
              </span>
              {errors.carVersion.message}
            </p>
          )}
        </div>

        <div className={styles._boxElements}>
          <SelectComponent
            {...register('transmision', { required: 'Transmisión de coche requerida' })}
            placeholder="Selecciona un tipo de Transmisión"
            name="transmision"
            onChange={handleInput}
            dataoptions={DATADOMIE.Transmision}
          />
          {errors.transmision && (
            <p className={stylesPure._error_label}>
              <span className={stylesPure._error_label_icon}>
                <FontAwesomeIcon icon="exclamation-triangle" />
              </span>
              {errors.transmision.message}
            </p>
          )}
        </div>

        <div className={styles._boxElements}>
          <SelectComponent
            {...register('fuel', { required: 'Tipo de combustible requerido' })}
            placeholder="Selecciona un tipo de Combustible"
            name="fuel"
            onChange={handleInput}
            dataoptions={DATADOMIE.Fuel}
          />
          {errors.fuel && (
            <p className={stylesPure._error_label}>
              <span className={stylesPure._error_label_icon}>
                <FontAwesomeIcon icon="exclamation-triangle" />
              </span>
              {errors.fuel.message}
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
  );
};

export default Step1Form;
