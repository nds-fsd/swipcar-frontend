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

const CarProfileForm = ({ toEdit, handleCloseModal }) => {
  const [dataToEDit, setDataToEDit] = useState({});

  useEffect(() => {
    if (toEdit) {
      GetDataCarProfile({ toEdit, onSuccess: setDataToEDit });
      // setDataToEDit()
    }
  }, []);

  const windowSize = useWindowSize();

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  const [data, setData] = useState({});

  const [dataFly, setDataFly] = useState('');
  const [checkSave, setCheckSave] = useState(false);

  const tecnologiaRef = useRef();
  const confortRef = useRef();
  const seguridadRef = useRef();
  const exteriorRef = useRef();
  const [listTecnologia, setListTecnologia] = useState([]);
  const [listConfort, setListConfort] = useState([]);
  const [listSeguridad, setListSeguridad] = useState([]);
  const [listExterior, setListExterior] = useState([]);

  const handleTecnologia = (e) => {
    setDataFly(e.target.value);
  };
  const addTecnology = () => {
    setListTecnologia([...listTecnologia, dataFly]);
    tecnologiaRef.current.value = '';
    setDataFly('');
  };
  const deleteTecnologia = (tecnologia) => {
    setListTecnologia(listTecnologia.filter((item) => item !== tecnologia));
  };

  const handleConfort = (e) => {
    setDataFly(e.target.value);
  };
  const addConfort = () => {
    setListConfort([...listConfort, dataFly]);
    confortRef.current.value = '';
    setDataFly('');
  };
  const deleteConfort = (confort) => {
    setListConfort(listConfort.filter((item) => item !== confort));
  };

  const handleSeguridad = (e) => {
    setDataFly(e.target.value);
  };
  const addSeguridad = () => {
    setListSeguridad([...listSeguridad, dataFly]);
    seguridadRef.current.value = '';
    setDataFly('');
  };
  const deleteSeguridad = (seguridad) => {
    setListSeguridad(listSeguridad.filter((item) => item !== seguridad));
  };

  const handleExterior = (e) => {
    setDataFly(e.target.value);
  };
  const addExterior = () => {
    setListExterior([...listExterior, dataFly]);
    exteriorRef.current.value = '';
    setDataFly('');
  };
  const deleteExterior = (exterior) => {
    setListExterior(listExterior.filter((item) => item !== exterior));
  };

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
    mesesRentingRef.current.value = '';
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
  useEffect(() => {
    CreateCarRequestAll({ onSuccess: setDataOptionsAPI });
  }, []);

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

  // console.log(goodiesOptions, equipamientoOptions);

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

  const nuevoRef = useRef();
  const seminuevoRef = useRef();
  const [isChecked, setIsChecked] = useState({
    nuevo: false,
    seminuevo: false,
  });

  const onSubmit = (data) => {
    // setCheckSave(true);

    if (
      !errorNuevoSeminuevo &&
      equipamientoData.length !== 0 &&
      goodiesData.length !== 0 &&
      listTecnologia.length !== 0 &&
      listConfort.length !== 0 &&
      listSeguridad.length !== 0 &&
      listExterior.length !== 0 &&
      rentingOptions.length !== 0
    ) {
      const dataAPI = {
        ...data,
        nuevo: isChecked.nuevo,
        seminuevo: isChecked.seminuevo,
        goodiesData,
        equipamientoData,
        rentingOptions,
        listExterior,
        listSeguridad,
        listConfort,
        listTecnologia,
      };
      console.log('dataAPI  : ', dataAPI);
    } else {
      console.log('algo falta gachon!!');
    }
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
            <div className={`${styles._toggles_list} ${styles._toggles_list_nuevoSemi}`}>
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
            {checkSave && errorNuevoSeminuevo && (
              <p
                className={stylesPure._error_label}
                style={{ textAlign: 'center', marginBottom: '30px' }}
              >
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
                <SelectComponent
                  {...register('carType', { required: 'Tipo de coche requerido' })}
                  refs={carType}
                  label="Selecciona un tipo"
                  placeholder="Tipo"
                  name="carType"
                  defaultValue={carType}
                  dataget="carType"
                  dataoptions={carTypeOptions}
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
                  defaultValue={carType}
                  dataget="transmisiontype"
                  dataoptions={transmisionOptions}
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
                  dataget="fueltype"
                  dataoptions={fuelOptions}
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

            <h2 className={styles._tittle}>Información básica del Modelo</h2>

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
                  dataget="ecomarktype"
                  dataoptions={ecoMarkOptions}
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
                <SelectComponent
                  {...register('color', { required: 'Color requerido' })}
                  refs={color}
                  name="color"
                  label="Seleciona un Color"
                  placeholder="Color"
                  defaultValue={color}
                  dataget="label"
                  dataoptions={colorOptions}
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
                <SelectComponent
                  {...register('puertas', { required: 'Número de puertas requerido' })}
                  refs={puertas}
                  name="puertas"
                  label="Número de Puertas"
                  placeholder="Puertas"
                  defaultValue={puertas}
                  dataget="label"
                  dataoptions={puertasOptions}
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
                  refs={emisionMotor}
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
                <InputComponent
                  {...register('cvMotor', {
                    required: 'Número de CV requerido',
                  })}
                  refs={cvMotor}
                  label="CV del Motor"
                  placeholder="CV"
                  name="cvMotor"
                  defaultValue={cvMotor}
                  id="cvMotor"
                  type="Number"
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

            <h2 className={styles._tittle}>Opciones del Renting</h2>

            <div
              className={`${windowSize !== 'sm' && styles._row3_xlg}
    ${windowSize === 'sm' && styles._row3_sm}  
    `}
            >
              <div className={styles._boxElements_groups}>
                <div className={styles._input_group}>
                  <InputComponent
                    ref={tecnologiaRef}
                    name="tecnologia"
                    label="Añade una tecnología"
                    placeholder="Tecnología"
                    type="text"
                    onChange={(e) => handleTecnologia(e)}
                  />
                </div>
                <ButtonActionIconComponent
                  actionButton={() => addTecnology()}
                  className={styles._button_group}
                />
              </div>
              <div className={`${styles._boxElements} ${styles._list_add}`}>
                {listTecnologia.length === 0 && (
                  <h2 className={styles._title_list}>
                    <FontAwesomeIcon icon="microchip" className={styles._icon_title_list} />
                    No se han añadido Tecnologías
                  </h2>
                )}
                {listTecnologia.length > 0 && (
                  <>
                    <h2 className={styles._title_list}>
                      <FontAwesomeIcon icon="microchip" className={styles._icon_title_list} />
                      Listado de Tecnologías
                    </h2>
                    <ul>
                      {listTecnologia.map((tecnologia, index) => (
                        <li className={styles._list_li} key={index}>
                          {tecnologia}
                          <button
                            className={styles._list_delete}
                            type="button"
                            title={`ELIMINAR: ${tecnologia}`}
                            alt={`ELIMINAR: ${tecnologia}`}
                            onClick={() => deleteTecnologia(tecnologia)}
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
            {checkSave && listTecnologia.length === 0 && (
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

            <hr className={styles._hr_line} />

            <div
              className={`${windowSize !== 'sm' && styles._row3_xlg}
    ${windowSize === 'sm' && styles._row3_sm}  
    `}
            >
              <div className={styles._boxElements_groups}>
                <div className={styles._input_group}>
                  <InputComponent
                    ref={confortRef}
                    name="confort"
                    label="Añade un Confort"
                    placeholder="Confort"
                    type="text"
                    onChange={(e) => handleConfort(e)}
                  />
                </div>
                <ButtonActionIconComponent
                  actionButton={() => addConfort()}
                  className={styles._button_group}
                />
              </div>
              <div className={`${styles._boxElements} ${styles._list_add}`}>
                {listConfort.length === 0 && (
                  <h2 className={styles._title_list}>
                    <FontAwesomeIcon icon="thumbs-up" className={styles._icon_title_list} />
                    No se han añadido Confort
                  </h2>
                )}
                {listConfort.length > 0 && (
                  <>
                    <h2 className={styles._title_list}>
                      <FontAwesomeIcon icon="thumbs-up" className={styles._icon_title_list} />
                      Listado de Confort
                    </h2>
                    <ul>
                      {listConfort.map((confort, index) => (
                        <li className={styles._list_li} key={index}>
                          {confort}
                          <button
                            className={styles._list_delete}
                            type="button"
                            title={`ELIMINAR: ${confort}`}
                            alt={`ELIMINAR: ${confort}`}
                            onClick={() => deleteConfort(confort)}
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
            {checkSave && listConfort.length === 0 && (
              <p
                className={stylesPure._error_label}
                style={{ textAlign: 'center', marginBottom: '30px' }}
              >
                <span className={stylesPure._error_label_icon}>
                  <FontAwesomeIcon icon="exclamation-triangle" />
                </span>
                Ha de añadir al menos una opción de confort
              </p>
            )}

            <hr className={styles._hr_line} />

            <div
              className={`${windowSize !== 'sm' && styles._row3_xlg}
    ${windowSize === 'sm' && styles._row3_sm}  
    `}
            >
              <div className={styles._boxElements_groups}>
                <div className={styles._input_group}>
                  <InputComponent
                    ref={seguridadRef}
                    name="seguridad"
                    label="Añade una Seguridad"
                    placeholder="Seguridad"
                    type="text"
                    onChange={(e) => handleSeguridad(e)}
                  />
                </div>
                <ButtonActionIconComponent
                  actionButton={() => addSeguridad()}
                  className={styles._button_group}
                />
              </div>
              <div className={`${styles._boxElements} ${styles._list_add}`}>
                {listSeguridad.length === 0 && (
                  <h2 className={styles._title_list}>
                    <FontAwesomeIcon icon="shield-alt" className={styles._icon_title_list} />
                    No se ha añadido Seguridad
                  </h2>
                )}
                {listSeguridad.length > 0 && (
                  <>
                    <h2 className={styles._title_list}>
                      <FontAwesomeIcon icon="shield-alt" className={styles._icon_title_list} />
                      Listado de Seguridad
                    </h2>
                    <ul>
                      {listSeguridad.map((seguridad, index) => (
                        <li className={styles._list_li} key={index}>
                          {seguridad}
                          <button
                            className={styles._list_delete}
                            type="button"
                            title={`ELIMINAR: ${seguridad}`}
                            alt={`ELIMINAR: ${seguridad}`}
                            onClick={() => deleteSeguridad(seguridad)}
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
            {checkSave && listSeguridad.length === 0 && (
              <p
                className={stylesPure._error_label}
                style={{ textAlign: 'center', marginBottom: '30px' }}
              >
                <span className={stylesPure._error_label_icon}>
                  <FontAwesomeIcon icon="exclamation-triangle" />
                </span>
                Ha de añadir al menos una opción de seguridad
              </p>
            )}

            <hr className={styles._hr_line} />

            <div
              className={`${windowSize !== 'sm' && styles._row3_xlg}
    ${windowSize === 'sm' && styles._row3_sm}  
    `}
            >
              <div className={styles._boxElements_groups}>
                <div className={styles._input_group}>
                  <InputComponent
                    ref={exteriorRef}
                    name="exterior"
                    label="Añade un Exterior"
                    placeholder="Exterior"
                    type="text"
                    onChange={(e) => handleExterior(e)}
                  />
                </div>
                <ButtonActionIconComponent
                  actionButton={() => addExterior()}
                  className={styles._button_group}
                />
              </div>
              <div className={`${styles._boxElements} ${styles._list_add}`}>
                {listExterior.length === 0 && (
                  <h2 className={styles._title_list}>
                    <FontAwesomeIcon icon="air-freshener" className={styles._icon_title_list} />
                    No se ha añadido Exterior
                  </h2>
                )}
                {listExterior.length > 0 && (
                  <>
                    <h2 className={styles._title_list}>
                      <FontAwesomeIcon icon="air-freshener" className={styles._icon_title_list} />
                      Listado de Exterior
                    </h2>
                    <ul>
                      {listExterior.map((exterior, index) => (
                        <li className={styles._list_li} key={index}>
                          {exterior}
                          <button
                            className={styles._list_delete}
                            type="button"
                            title={`ELIMINAR: ${exterior}`}
                            alt={`ELIMINAR: ${exterior}`}
                            onClick={() => deleteExterior(exterior)}
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
            {checkSave && listExterior.length === 0 && (
              <p
                className={stylesPure._error_label}
                style={{ textAlign: 'center', marginBottom: '30px' }}
              >
                <span className={stylesPure._error_label_icon}>
                  <FontAwesomeIcon icon="exclamation-triangle" />
                </span>
                Ha de añadir al menos una opción de exterior
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
                      <FontAwesomeIcon icon="hand-holding-usd" className={styles._icon_title_list} />
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

            <div className={styles._row_buttons}>
              <ButtonComponent
                label="Cancelar"
                alt="Cancelar"
                typeButton="cancel"
                actionButton={() => handleCloseModal()}
              />
              <ButtonComponent
                label="Guardar"
                type="submit"
                alt="Guardar"
                actionButton={() => {
                  handleSubmit(onSubmit);
                  setCheckSave(true);
                }}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CarProfileForm;
