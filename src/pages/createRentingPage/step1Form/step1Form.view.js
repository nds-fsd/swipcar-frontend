import React, { useContext, useState, useEffect, useRef } from 'react';

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
import { CreateCarRequestAll } from '../../../utils/createCarRequestAll';

const Step1Form = ({ stepPagePrev, stepPageNext }) => {


  const {
    register,
    formState: { errors },
    handleSubmit,
    watch
  } = useForm();

  const [store, dispatch] = useContext(StoreContext);

  const Step1Data = store.Step1Data;
  const {
    nuevo,
    seminuevo,
    carBrand,
    carModel,
    carVersion,
    carType,
    transmision,
    fuel,
  } = Step1Data;

  const [dataFormOk, setDataFormOk] = useState(false);

  useEffect(() => {
    console.log('store effect : ', store);
    if (store.Step1Data.carBrand !== '') {
      setDataFormOk(true);
    }
  }, [store]);

  // useEffect(() => {
  //   console.log('store effect : ', store);
  // }, [store]);

  const onSubmit = (data) => {
    if (!errorNuevoSeminuevo) {
      data = { ...data, nuevo: isChecked.nuevo, seminuevo: isChecked.seminuevo };
      dispatch({ type: types.add, key: 'Step1Data', data });
      stepPageNext();
    }
  };

  const windowSize = useWindowSize();

  const nuevoRef = useRef();
  const seminuevoRef = useRef();

  //* Toggle Group (one selected) Logic
  const [isChecked, setIsChecked] = useState({
    nuevo,
    seminuevo,
  });
  const [errorNuevoSeminuevo, setErrorNuevoSeminuevo] = useState(false);
  useEffect(() => {
    if (!isChecked.nuevo && !isChecked.seminuevo) {
      setErrorNuevoSeminuevo(true);
    } else {
      setErrorNuevoSeminuevo(false);
    }
  }, [isChecked]);
  const _handleToggle = (e) => {
    if (e.target.name === 'nuevo') {
      if (seminuevoRef.current.checked) {
        setIsChecked({ ...isChecked, nuevo: e.target.checked, seminuevo: false });
        seminuevoRef.current.checked = false;
      } else {
        setIsChecked({ ...isChecked, nuevo: e.target.checked });
      }
    } else {
      if (nuevoRef.current.checked) {
        setIsChecked({ ...isChecked, seminuevo: e.target.checked, nuevo: false });
        nuevoRef.current.checked = false;
      } else {
        setIsChecked({ ...isChecked, seminuevo: e.target.checked });
      }
    }
  };
  useEffect(() => {
    if (!isChecked.nuevo && !isChecked.seminuevo) {
      setErrorNuevoSeminuevo(true);
    } else {
      setErrorNuevoSeminuevo(false);
    }
  }, [isChecked]);


  const [brands, setBrands] = useState();

  useEffect(() => {
    CreateCarRequestAll({ onSuccess: setBrands });
  }, []);

  const watchBrand = watch("carBrand");
  // const watchModel = watch("carModel");
  console.log('watchBrand : ', watchBrand);
  
  return (
    <div className={`${styles._wrapper} ${styles._form_step_animation}`}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles._toggles_list}>
          {DATADOMIE.CarProfileDataEstate.map((value) => (
            <div key={value._id}>
              <div>
                <ToggleButtonComponent
                  ref={value.name === 'nuevo' ? nuevoRef : seminuevoRef}
                  label={value.label}
                  name={value.name}
                  id={value.name}
                  type="checkbox"
                  defaultChecked={value.name === 'nuevo' ? nuevo : seminuevo}
                  onChange={(e) => {
                    _handleToggle(e);
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        {errorNuevoSeminuevo && (
          <p className={stylesPure._error_label}>
            <span className={stylesPure._error_label_icon}>
              <FontAwesomeIcon icon="exclamation-triangle" />
            </span>
            Selecciona una opción
          </p>
        )}
        <div
          className={`${windowSize !== 'sm' && styles._row3_xlg}
      ${windowSize === 'sm' && styles._row3_sm}  
      `}
        >
          <div className={styles._boxElements}>
            <SelectComponent
              {...register('carBrand', { required: 'Marca de coche requerida' })}
              refs={carBrand}
              // ref={carBrandRef}
              label="Selecciona una Marca"
              placeholder="Marca"
              name="carBrand"
              defaultValue={carBrand}
              dataoptions={brands}
              dataget="brandname"
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
              refs={carModel}
              // ref={carModelRef}
              label="Selecciona un Modelo"
              placeholder="Modelo"
              name="carModel"
              defaultValue={carModel}
              dataoptions={DATADOMIE.Model}
              disabled={watchBrand ? false : true}
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
              refs={carVersion}
              label="Versión del Modelo"
              placeholder="Versión"
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
              refs={carType}
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
              refs={transmision}
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
              refs={fuel}
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
