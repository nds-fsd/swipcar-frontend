import React, { useState, useEffect, useRef } from 'react';
import useWindowSize from '../../../constants/useWindowSize';

import CarIcon from '../../assets/carEditIcon.gif';

import stylesPure from '../../pureComponents/pureComponents.module.css';
import SelectComponent from '../../pureComponents/selectComponent';
import ToggleButtonComponent from '../../pureComponents/toggleButtonComponent';

import styles from '../forms.module.css';

import { useForm } from 'react-hook-form';
import {
  CreateCarRequestAll,
  CreateCarRequestModel,
  CreateCarRequestVersion,
  GetDataCarProfile,
} from '../../../utils/createCarRequestAll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DATADOMIE } from '../../../pages/createRentingPage/dataDomie';
import ButtonComponent from '../../pureComponents/buttonComponent/buttonComponent.view';
import InputComponent from '../../pureComponents/inputComponent/index';
import ButtonActionIconComponent from '../../pureComponents/buttonActionIconComponent/buttonActionIconComponent.view';
import SelectMultiple from '../../selectMultiple/selectMultiple.view';

const RentingForm = ({ toEdit, handleCloseModal }) => {
  const [dataToEDit, setDataToEDit] = useState({});

  const {
    carBrand: carBrandOptions,
    Model: carModelOptions,
    carVersion: carVersionOptions,
    carType: carTypeOptions,
    transmision: transmisionOptions,
    fuel: fuelOptions,
    ecoMark: ecoMarkOptions,
    puertas: puertasOptions,
    color: colorOptions,
    Goodies: goodiesOptions,
    equipamiento: equipamientoOptions,
  } = dataOptions;

  const {
    nuevo,
    seminuevo,
    carBrand,
    carModel,
    carVersion,
    carType,
    transmision,
    fuel,
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
    goodiesData: goodies,
    equipamientoData: equipamiento,
    listSeguridad: seguridad,
    listExterior: exterior,
    listConfort: confort,
    listTecnologia: tecnologia,
  } = dataToEDit;

  // useEffect(() => {
  //   if (toEdit) {
  //     GetDataCarProfile({ toEdit, onSuccess: setDataToEDit });
  //     // setDataToEDit()
  //   }
  // }, []);

  const windowSize = useWindowSize();

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    watch,
  } = useForm();

  const [data, setData] = useState({});

  const [dataFly, setDataFly] = useState('');
  const [checkSave, setCheckSave] = useState(false);

  const [rentingOptions, setRentingOptions] = useState([]);
  const kmAnualesRef = useRef();
  const mesesRentingRef = useRef();
  const precioRentingRef = useRef();

  const addRentingOption = () => {
    if (
      kmAnualesRef.current.value !== '' &&
      mesesRentingRef.current.value !== '' &&
      precioRentingRef.current.value !== ''
    ) {
      setRentingOptions([
        ...rentingOptions,
        {
          kmAnuales: kmAnualesRef.current.value,
          mesesRenting: mesesRentingRef.current.value,
          precioRenting: precioRentingRef.current.value,
        },
      ]);
    }
    kmAnualesRef.current.value = '';
    mesesRentingRef.cursetValuerent.value = '';
    precioRentingRef.current.value = '';
  };
  const deleteRentingOption = (optionRent) => {
    setRentingOptions(rentingOptions.filter((item) => item !== optionRent));
  };

  const [dataOptions, setDataOptions] = useState({});
  const [dataOptionsAPI, setDataOptionsAPI] = useState({});
  useEffect(() => {
    setDataOptions({ ...dataOptions, ...dataOptionsAPI });
  }, [dataOptionsAPI]);

  // useEffect(() => {
  //   CreateCarRequestAll({ onSuccess: setDataOptionsAPI });
  // }, []);

  //* Watches
  const watchBrand = watch('carBrand');
  const watchModel = watch('carModel');
  useEffect(() => {
    if (watchBrand) CreateCarRequestModel({ watchBrand, onSuccess: setDataOptionsAPI });
  }, [watchBrand]);
  useEffect(() => {
    if (watchModel) CreateCarRequestVersion({ watchModel, onSuccess: setDataOptionsAPI });
  }, [watchModel]);
  //* Watches

  // console.log(goodiesOptions, equipamientoOptions);

  // const { newcar, carBrand, carModel, carVersion } = dataToEDit;

  const nuevoRef = useRef();
  const seminuevoRef = useRef();
  const [isChecked, setIsChecked] = useState({
    nuevo: false,
    seminuevo: false,
  });

  const onSubmit = (data) => {
    // setCheckSave(true);

    const dataAPI = {
      data,
    };
    console.log('dataAPI  : ', dataAPI);
  };

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

  const [goodiesData, setGoodiesData] = useState([]);
  const [equipamientoData, setEquipamientoData] = useState([]);
  const _handleToggle_goodies = (e) => {
    if (e.target.checked) {
      setGoodiesData([...goodiesData, e.target.id]);
    } else {
      setGoodiesData(goodiesData.filter((item) => item !== e.target.id));
    }
  };
  const _handleToggle_equipamiento = (e) => {
    if (e.target.checked) {
      setEquipamientoData([...equipamientoData, e.target.id]);
    } else {
      setEquipamientoData(equipamientoData.filter((item) => item !== e.target.id));
    }
  };

  const [editData, setEditData] = useState(false);
  const handleEdit = () => {
    setEditData(!editData);
  };

  const overrideStrings = {
    allItemsAreSelected: 'Todos los colores seleccionados',
    clearSearch: 'Limpiar búsqueda',
    noOptions: 'Ninguna opción',
    search: 'Buscar',
    selectAll: 'Selecciona todos',
    selectSomeItems: 'Selecciona un color',
  };

  const options = [
    { value: '60a12f9e1e0b813f8dacdf23', label: 'Rojo' },
    { value: '60a12f9e1e0b813f8dacdf24', label: 'Amarillo' },
    { value: '60a12f9e1e0b813f8dacdf25', label: 'Azul' },
    { value: '60a12f9e1e0b813f8dacdf26', label: 'Verde' },
  ];

  return (
    <div className={styles.carlist_page}>
      <div
        className={`${windowSize === 'xlg' && styles.scene_container_xlg} 
      ${windowSize === 'lg' && styles.scene_container_lg}
      ${windowSize === 'md' && styles.scene_container_md}
      ${styles.nav_croll}
      `}
      >
        <div className={styles._wrapper}>
          <div className={styles._title_group}>
            <div className={`${styles._boxElements} ${styles._title_group}`}>
              <img src={CarIcon} className={styles._icon_title} alt="Crea un Nuevo Renting" />
              <span className={styles._title}>
                {editData ? 'Editar un Renting' : 'Crea un Nuevo Renting'}
              </span>
            </div>

            <div className={styles._boxElements}>
              <div
                className={styles._row_buttons}
                style={{ display: 'flex', justifyContent: 'flex-end' }}
              >
                {!editData && (
                  <ButtonComponent
                    label="Editar Perfil"
                    alt="Editar Perfil"
                    typeButton="ok"
                    actionButton={() => handleEdit()}
                  />
                )}
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div
              className={`${windowSize !== 'sm' && styles._row3_xlg}
      ${windowSize === 'sm' && styles._row3_sm}  
      `}
            >
              <div className={styles._boxElements}>
                <SelectComponent
                  {...register('carBrand', { required: 'Marca de coche requerida' })}
                  refs={carBrand}
                  label="Selecciona una Marca"
                  placeholder="Marca"
                  name="carBrand"
                  defaultValue={carBrand}
                  dataoptions={carBrandOptions}
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
                  label="Selecciona un Modelo"
                  placeholder="Modelo"
                  name="carModel"
                  defaultValue={carModel}
                  dataoptions={carModelOptions}
                  dataget="modelname"
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
                  dataget="carVersion"
                  dataoptions={carVersionOptions}
                  disabled={watchModel ? false : true}
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
                <SelectMultiple overrideStrings={overrideStrings} options={options} />
              </div>
            </div>

            <h2 className={styles._tittle}>Este Renting incluye</h2>
            <div className={styles._toggles_list}>
              {goodiesOptions &&
                goodiesOptions.map((value) => (
                  <div key={value._id}>
                    <div>
                      <ToggleButtonComponent
                        id={value._id}
                        name={value.carGoodie}
                        type="checkbox"
                        checked={goodies?.filter((goodie) => goodie === value._id)}
                        label={value.carGoodie}
                        // checkedState={isChecked && true }
                        iconlabel={value.iconGoodie}
                        onChange={(e) => {
                          _handleToggle_goodies(e);
                        }}
                      />
                    </div>
                  </div>
                ))}
            </div>
            {checkSave && goodiesData.length === 0 && (
              <p
                className={stylesPure._error_label}
                style={{ textAlign: 'center', marginBottom: '30px' }}
              >
                <span className={stylesPure._error_label_icon}>
                  <FontAwesomeIcon icon="exclamation-triangle" />
                </span>
                Ha de seleccionar al menos una opción
              </p>
            )}

            <h2 className={styles._tittle}>Equipamiento Destacado</h2>

            <div className={styles._toggles_list}>
              {equipamientoOptions &&
                equipamientoOptions.map((value) => (
                  <div key={value._id}>
                    <div>
                      <ToggleButtonComponent
                        id={value._id}
                        name={value.carEquipment}
                        type="checkbox"
                        label={value.carEquipment}
                        onChange={(e) => {
                          _handleToggle_equipamiento(e);
                        }}
                      />
                    </div>
                  </div>
                ))}
            </div>
            {checkSave && equipamientoData.length === 0 && (
              <p
                className={stylesPure._error_label}
                style={{ textAlign: 'center', marginBottom: '30px' }}
              >
                <span className={stylesPure._error_label_icon}>
                  <FontAwesomeIcon icon="exclamation-triangle" />
                </span>
                Ha de seleccionar al menos una opción
              </p>
            )}

            <h2 className={styles._tittle}>Precios del Renting</h2>

            <div
              className={`${windowSize !== 'sm' && styles._row3_xlg}
    ${windowSize === 'sm' && styles._row3_sm}  
    `}
            >
              <div className={styles._boxElements_groups}>
                <div className={styles._input_group}>
                  <InputComponent
                    ref={kmAnualesRef}
                    name="kmAnuales"
                    label="Km Anuales"
                    placeholder="Km"
                    type="number"
                  />
                  <InputComponent
                    ref={mesesRentingRef}
                    name="mesesRenting"
                    label="Meses del renting"
                    placeholder="Meses"
                    type="number"
                  />
                  <InputComponent
                    ref={precioRentingRef}
                    name="precioRenting"
                    label="Precio Renting"
                    placeholder="Precio"
                    type="number"
                  />
                </div>
                <ButtonActionIconComponent
                  actionButton={() => addRentingOption()}
                  className={styles._button_group}
                />
              </div>
              <div className={`${styles._boxElements} ${styles._list_add}`}>
                {rentingOptions.length === 0 && (
                  <h2 className={styles._title_list}>
                    <FontAwesomeIcon icon="hand-holding-usd" className={styles._icon_title_list} />
                    No se ha añadido Opciones de Renting
                  </h2>
                )}
                {rentingOptions.length > 0 && (
                  <>
                    <h2 className={styles._title_list}>
                      <FontAwesomeIcon
                        icon="hand-holding-usd"
                        className={styles._icon_title_list}
                      />
                      Opciones de Renting
                    </h2>
                    <ul>
                      {rentingOptions.map((optionRent, index) => (
                        <li className={styles._list_li_priceRenting} key={index}>
                          <b>{optionRent.kmAnuales}</b> <i> km anuales, </i> en
                          <b>{optionRent.mesesRenting}</b> <i> meses, </i> a
                          <b>{optionRent.precioRenting}</b> <i> € al mes. </i>
                          <button
                            className={styles._list_delete}
                            type="button"
                            title="Eliminar Opción del Renting"
                            alt="Eliminar Opción del Renting"
                            onClick={() => deleteRentingOption(optionRent)}
                          >
                            <FontAwesomeIcon icon="times-circle" />
                          </button>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
            {checkSave && rentingOptions.length === 0 && (
              <p
                className={stylesPure._error_label}
                style={{ textAlign: 'center', marginBottom: '30px' }}
              >
                <span className={stylesPure._error_label_icon}>
                  <FontAwesomeIcon icon="exclamation-triangle" />
                </span>
                Ha de añadir al menos una opción de renting
              </p>
            )}

            <ButtonComponent label="Guardar" type="submit" alt="Guardar" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default RentingForm;
