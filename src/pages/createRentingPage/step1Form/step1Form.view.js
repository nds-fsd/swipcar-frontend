import React, { useContext, useState, useEffect } from 'react';

import useWindowSize from '../../../constants/useWindowSize';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useForm } from 'react-hook-form';

import styles from '../createRentingPage.module.css';
import stylesPure from '../../../components/pureComponents/pureComponents.module.css';
import SelectComponent from '../../../components/pureComponents/selectComponent';
import ToggleButtonComponent from '../../../components/pureComponents/toggleButtonComponent';
import ButtonComponent from '../../../components/pureComponents/buttonComponent';

import DATADOMIE from '../dataDomie';
import { StoreContext } from '../../../store/StoreProvider';
import { types } from '../../../store/StoreReducer';

const Step1Form = ({ stepPagePrev, stepPageNext }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [stepForm1Data, setStepForm1Data] = useState([]);

  console.log('errors : ', errors);

  const [store, dispatch] = useContext(StoreContext);

  useEffect(() => {
    console.log('store effect : ', store);
  }, [store]);

  const Step1Data = store.Step1Data;
  const { carBrand, carModel, carVersion, carType, transmision, fuel } = Step1Data;

  const onSubmit = (data, e) => {
    console.log('data :', data);

    setStepForm1Data([...stepForm1Data, data]);

    dispatch({ type: types.add, key: 'Step1Data', data });
    // console.log('setInitial State : ', Step1Data);
    // stepPageNext();
    // limpiar campos
    // e.target.reset();
  };

  // const [inputData, setInputData] = useState({
  //   toggleButton: false,
  // });
  const windowSize = useWindowSize();

  return (
    <div className={`${styles._wrapper} ${styles._form_step_animation}`}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles._toggles_list}>
          {DATADOMIE.CarProfileDataEstate.map((value) => (
            <div key={value._id}>
              <div>
                <ToggleButtonComponent
                  name={value.name}
                  type="checkbox"
                  checked={value.isChecked}
                  label={value.name}
                />
              </div>
            </div>
          ))}
        </div>

        <div
          className={`${windowSize !== 'sm' && styles._row3_xlg}
      ${windowSize === 'sm' && styles._row3_sm}  
      `}
        >
          <div className={styles._boxElements}>
            <SelectComponent
              {...register('carBrand', { required: 'Marca de coche requerida' })}
              refs={Step1Data.carBrand}
              label="Selecciona una Marca"
              placeholder="Marca"
              name="carBrand"
              defaultValue={carBrand}
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
              refs={Step1Data.carModel}
              label="Modelo"
              placeholder="Selecciona un Modelo"
              name="carModel"
              defaultValue={carModel}
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
          
          <div className={styles._boxElements}>
            <SelectComponent
              {...register('carVersion', { required: 'Versión de coche requerida' })}
              refs={Step1Data.carVersion}
              label="Versión del Modelo"
              placeholder="Modelo"
              name="carVersion"
              defaultValue={carVersion}
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
        </div>

        <div
          className={`${windowSize !== 'sm' && styles._row3_xlg}
      ${windowSize === 'sm' && styles._row3_sm}  
      `}
        >
          <div className={styles._boxElements}>
            <SelectComponent
              {...register('carType', { required: 'Tipo de coche requerido' })}
              refs={Step1Data.carType}
              label="Selecciona un tipo"
              placeholder="Tipo"
              name="carType"
              defaultValue={carType}
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
              {...register('transmision', { required: 'Transmisión de coche requerida' })}
              refs={Step1Data.transmision}
              label="Selecciona un tipo de Transmisión"
              placeholder="Transmisión"
              name="transmision"
              defaultValue={transmision}
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
              refs={Step1Data.fuel}
              label="Selecciona un tipo de Combustible"
              placeholder="Combustible"
              name="fuel"
              defaultValue={fuel}
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
    </div>
  );
};

export default Step1Form;
