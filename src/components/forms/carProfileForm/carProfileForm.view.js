import React, { useState, useEffect, useRef } from 'react';
import useWindowSize from '../../../constants/useWindowSize';
import { useForm } from 'react-hook-form';

import {
  CreateCarRequestAll,
  CreateCarRequestModel,
  CreateCarRequestVersion,
  GetDataCarProfile,
  GetDataVersion,
} from '../../../utils/createCarRequestAll';

import stylesPure from '../../pureComponents/pureComponents.module.css';
import styles from '../forms.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ButtonComponent from '../../pureComponents/buttonComponent/buttonComponent.view';
import InputComponent from '../../pureComponents/inputComponent/index';
import ButtonActionIconComponent from '../../pureComponents/buttonActionIconComponent/buttonActionIconComponent.view';
import SelectMultiple from '../../selectMultiple/selectMultiple.view';
import SelectComponent from '../../pureComponents/selectComponent';

import CarIcon from '../../assets/carEditIcon.gif';
import { CreateVersion, UpdateVersion } from '../../../utils/dashBoardCalls';

const CarProfileForm = ({ toEdit, handleModal, systemMessage, updateSuccess }) => {
  const [dataToEdit, setDataToEdit] = useState({});

  const [newCar, setNewCar] = useState(false);
  const [editData, setEditData] = useState(false);
  const handleEdit = () => {
    setEditData(!editData);
  };

  const overrideStringsColors = {
    allItemsAreSelected: 'Todos los colores seleccionados',
    noOptions: 'Ninguna opción',
    selectAll: 'Selecciona todos',
    selectSomeItems: 'Selecciona un color',
  };
  const overrideStringsTransmision = {
    allItemsAreSelected: 'Todas las transmisiones seleccionadas',
    noOptions: 'Ninguna opción',
    selectAll: 'Selecciona todas',
    selectSomeItems: 'Selecciona una transmisión',
  };
  const overrideStringsFuel = {
    allItemsAreSelected: 'Todos los combustibles seleccionados',
    noOptions: 'Ninguna opción',
    selectAll: 'Selecciona todos',
    selectSomeItems: 'Selecciona un tipo de combustible',
  };

  useEffect(() => {
    CreateCarRequestAll({ toEdit, onSuccess: setDataOptionsAPI });
    if (toEdit) {
      GetDataVersion({ toEdit, onSuccess: setDataToEdit });
      setNewCar(false);
    } else {
      setEditData(true);
      setNewCar(true);
    }
  }, []);

  const windowSize = useWindowSize();

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  const [dataFly, setDataFly] = useState('');
  const [checkSave, setCheckSave] = useState(false);

  const [selectedColor, setSelectedColor] = useState([]);
  const [selectedTransmision, setSelectedTransmision] = useState([]);
  const [selectedFuel, setSelectedFuel] = useState([]);
  const [dataOptions, setDataOptions] = useState({});
  const [dataOptionsAPI, setDataOptionsAPI] = useState({});

  useEffect(() => {
    setDataOptions({ ...dataOptions, ...dataOptionsAPI });
    mountMultiples();
  }, [dataOptionsAPI]);

  const [optionsColors, setOptionsColors] = useState([]);
  const [optionsTransmision, setOptionsTransmision] = useState([]);
  const [optionsFuel, setOptionsFuel] = useState([]);

  const mountMultiples = () => {
    if (dataOptionsAPI && dataOptionsAPI.color) {
      setOptionsColors(
        dataOptionsAPI.color.map((color) => ({
          value: color._id,
          label: color.colorname,
        }))
      );
    }
    if (dataOptionsAPI && dataOptionsAPI.transmision) {
      setOptionsTransmision(
        dataOptionsAPI.transmision.map((transmision) => ({
          value: transmision._id,
          label: transmision.transmisiontype,
        }))
      );
    }
    if (dataOptionsAPI && dataOptionsAPI.fuel) {
      setOptionsFuel(
        dataOptionsAPI.fuel.map((fuel) => ({
          value: fuel._id,
          label: fuel.fueltype,
        }))
      );
    }
  };

  const tecnologiaRef = useRef();
  const confortRef = useRef();
  const seguridadRef = useRef();
  const exteriorRef = useRef();
  const [technologies, setTechnologies] = useState([]);
  const [conforts, setConforts] = useState([]);
  const [securities, setSecurities] = useState([]);
  const [exteriors, setExteriors] = useState([]);

  const handleTecnologia = (e) => {
    setDataFly(e.target.value);
  };
  const addTecnology = () => {
    setTechnologies([...technologies, dataFly]);
    tecnologiaRef.current.value = '';
    setDataFly('');
  };
  const deleteTecnologia = (tecnologia) => {
    setTechnologies(technologies.filter((item) => item !== tecnologia));
  };

  const handleConfort = (e) => {
    setDataFly(e.target.value);
  };
  const addConfort = () => {
    setConforts([...conforts, dataFly]);
    confortRef.current.value = '';
    setDataFly('');
  };
  const deleteConfort = (confort) => {
    setConforts(conforts.filter((item) => item !== confort));
  };

  const handleSeguridad = (e) => {
    setDataFly(e.target.value);
  };
  const addSeguridad = () => {
    setSecurities([...securities, dataFly]);
    seguridadRef.current.value = '';
    setDataFly('');
  };
  const deleteSeguridad = (seguridad) => {
    setSecurities(securities.filter((item) => item !== seguridad));
  };

  const handleExterior = (e) => {
    setDataFly(e.target.value);
  };
  const addExterior = () => {
    setExteriors([...exteriors, dataFly]);
    exteriorRef.current.value = '';
    setDataFly('');
  };
  const deleteExterior = (exterior) => {
    setExteriors(exteriors.filter((item) => item !== exterior));
  };

  //* Watches
  const watchBrand = watch('brand');
  useEffect(() => {
    if (watchBrand) CreateCarRequestModel({ watchBrand, onSuccess: setDataOptionsAPI });
  }, [watchBrand]);

  const {
    brand,
    model,
    version,
    cartype,
    transmision,
    fuel,
    color,
    ecomark,
    motor,
    doors,
    emission,
    displacement,
    comsumption,
    trunk,
    dimensionsheight,
    dimensionslength,
    dimensionswidth,
  } = dataOptions;

  const {
    _id,
    brand: brandEdit,
    model: modelEdit,
    cartype: cartypeEdit,
    transmision: transmisionEdit,
    fuel: fuelEdit,
    ecomark: ecomarkEdit,
    motor: motorEdit,
    doors: doorsEdit,
    emission: emissionEdit,
    color: colorEdit,
    displacement: displacementEdit,
    comsumption: comsumptionEdit,
    trunk: trunkEdit,
    dimensionsheight: dimensionsheightEdit,
    dimensionslength: dimensionslengthEdit,
    dimensionswidth: dimensionswidthEdit,
    securities: securitiesEdit,
    exteriors: exteriorsEdit,
    conforts: confortsEdit,
    technologies: technologiesEdit,
  } = dataToEdit;

  useEffect(() => {
    if (transmision && transmisionEdit) {
      setSelectedTransmision(
        transmisionEdit.map((transmisions) => ({
          value: transmisions,
          label: transmision.find(({ _id }) => _id === `${transmisions}`)?.transmisiontype,
        }))
      );
    }
    if (fuel && fuelEdit) {
      setSelectedFuel(
        fuelEdit.map((fuels) => ({
          value: fuels,
          label: fuel.find(({ _id }) => _id === `${fuels}`)?.fueltype,
        }))
      );
    }
    if (color && colorEdit) {
      setSelectedColor(
        colorEdit.map((colors) => ({
          value: colors,
          label: color.find(({ _id }) => _id === `${colors}`)?.colorname,
        }))
      );
    }
    if (exteriorsEdit) {
      setExteriors(exteriorsEdit);
    }
    if (confortsEdit) {
      setConforts(confortsEdit);
    }
    if (technologiesEdit) {
      setTechnologies(technologiesEdit);
    }
    if (securitiesEdit) {
      setSecurities(securitiesEdit);
    }
  }, [
    transmision,
    transmisionEdit,
    fuel,
    fuelEdit,
    color,
    colorEdit,
    securitiesEdit,
    exteriorsEdit,
    confortsEdit,
    technologiesEdit,
  ]);

  const _handleSuccess = (res) => {
    handleModal();
    updateSuccess(res);
    if (_id === undefined) {
      systemMessage({
        message: ' Versión creada correctamente',
        typeAlert: 'ok',
      });
    } else {
      systemMessage({
        message: ' Versión editada correctamente',
        typeAlert: 'ok',
      });
    }
  };

  const onSubmit = (data) => {
    if (_id === undefined) {
      if (
        selectedColor.length !== 0 &&
        selectedTransmision.length !== 0 &&
        selectedFuel.length !== 0 &&
        technologies.length !== 0 &&
        conforts.length !== 0 &&
        securities.length !== 0 &&
        exteriors.length !== 0
      ) {
        let color = selectedColor.map((color) => color.value);
        let transmision = selectedTransmision.map((transmision) => transmision.value);
        let fuel = selectedFuel.map((fuel) => fuel.value);

        const versionData = {
          ...data,
          color,
          transmision,
          fuel,
          exteriors,
          securities,
          conforts,
          technologies,
        };
        CreateVersion({
          versionData,
          onSuccess: (res) => _handleSuccess(res),
          onError: () =>
            systemMessage({
              message: ' No se ha podido crear correctamente',
              typeAlert: 'error',
            }),
        });
      }
    } else {
      if (
        selectedColor.length !== 0 &&
        selectedTransmision.length !== 0 &&
        selectedFuel.length !== 0 &&
        technologies.length !== 0 &&
        conforts.length !== 0 &&
        securities.length !== 0 &&
        exteriors.length !== 0
      ) {
        let color = selectedColor.map((color) => color.value);
        let transmision = selectedTransmision.map((transmision) => transmision.value);
        let fuel = selectedFuel.map((fuel) => fuel.value);

        const versionData = {
          ...data,
          color,
          transmision,
          fuel,
          exteriors,
          securities,
          conforts,
          technologies,
        };
        UpdateVersion({
          versionId: _id,
          versionData,
          onSuccess: (res) => _handleSuccess(res),
          onError: () =>
            systemMessage({
              message: ' No se ha podido editar correctamente',
              typeAlert: 'error',
            }),
        });
      }
    }
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
              <img src={CarIcon} className={styles._icon_title} alt="Renting" />
              <span className={styles._title}>
                {editData && !newCar && 'Editar vehículo'}
                {editData && newCar && 'Crea un nuevo vehículo'}
                {!editData && !newCar && 'Información vehículo'}
              </span>
            </div>

            <div className={styles._boxElements}>
              <div
                className={styles._row_buttons}
                style={{ display: 'flex', justifyContent: 'flex-end' }}
              >
                {!editData && (
                  <>
                    <ButtonComponent
                      label="Editar Vehículo"
                      alt="Editar Vehículo"
                      typeButton="ok"
                      actionButton={() => handleEdit()}
                    />
                  </>
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
                {editData ? (
                  <SelectComponent
                    {...register('brand', { required: 'Marca de coche requerida' })}
                    refs={brand}
                    label="Selecciona una Marca"
                    placeholder="Marca"
                    name="brand"
                    defaultValue={brandEdit ? brandEdit._id : ''}
                    dataoptions={brand}
                    dataget="brandname"
                  />
                ) : (
                  <>
                    <label className={styles._label_show_info}>Marca</label>
                    <h3 className={styles._show_info}>
                      {brandEdit && brandEdit.brandname}
                      {/* {brandEdit && brand?.filter((value) => value._id === brandEdit)[0].brandname} */}
                    </h3>
                  </>
                )}
                {errors.brand && (
                  <p className={stylesPure._error_label}>
                    <span className={stylesPure._error_label_icon}>
                      <FontAwesomeIcon icon="exclamation-triangle" />
                    </span>
                    {errors.brand.message}
                  </p>
                )}
              </div>

              <div className={styles._boxElements}>
                {editData ? (
                  <SelectComponent
                    {...register('model', { required: 'Modelo de coche requerido' })}
                    refs={model}
                    label="Selecciona un Modelo"
                    placeholder="Modelo"
                    name="model"
                    defaultValue={modelEdit ? modelEdit._id : ''}
                    dataoptions={model}
                    dataget="modelname"
                    disabled={watchBrand || modelEdit ? false : true}
                  />
                ) : (
                  <>
                    <label className={styles._label_show_info}>Modelo</label>
                    <h3 className={styles._show_info}>{modelEdit && modelEdit.modelname}</h3>
                  </>
                )}
                {errors.model && (
                  <p className={stylesPure._error_label}>
                    <span className={stylesPure._error_label_icon}>
                      <FontAwesomeIcon icon="exclamation-triangle" />
                    </span>
                    {errors.model.message}
                  </p>
                )}
              </div>

              <div className={styles._boxElements}>
                {editData ? (
                  <InputComponent
                    {...register('version', { required: 'Versión de coche requerida' })}
                    refs={version}
                    label="Versión del Modelo"
                    placeholder="Versión"
                    name="version"
                    defaultValue={dataToEdit && dataToEdit.version}
                  />
                ) : (
                  <>
                    <label className={styles._label_show_info}>Versión</label>
                    <h3 className={styles._show_info}>{dataToEdit && dataToEdit.version}</h3>
                  </>
                )}
                {errors.version && (
                  <p className={stylesPure._error_label}>
                    <span className={stylesPure._error_label_icon}>
                      <FontAwesomeIcon icon="exclamation-triangle" />
                    </span>
                    {errors.version.message}
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
                {editData ? (
                  <SelectComponent
                    {...register('cartype', { required: 'Tipo de coche requerido' })}
                    refs={cartype}
                    label="Selecciona un tipo"
                    placeholder="Tipo"
                    name="cartype"
                    defaultValue={modelEdit ? modelEdit.cartype._id : ''}
                    dataget="cartype"
                    dataoptions={cartype}
                  />
                ) : (
                  <>
                    <label className={styles._label_show_info}>Tipo</label>
                    <h3 className={styles._show_info}>{modelEdit && modelEdit.cartype.cartype}</h3>
                  </>
                )}
                {errors.cartype && (
                  <p className={stylesPure._error_label}>
                    <span className={stylesPure._error_label_icon}>
                      <FontAwesomeIcon icon="exclamation-triangle" />
                    </span>
                    {errors.cartype.message}
                  </p>
                )}
              </div>

              <div className={styles._boxElements}>
                {editData ? (
                  <SelectMultiple
                    overrideStrings={overrideStringsTransmision}
                    options={optionsTransmision.length > 0 && optionsTransmision}
                    label="Selecciona un tipo de Transmisión"
                    name="transmision"
                    value={selectedTransmision}
                    onChange={setSelectedTransmision}
                    labelledBy="SelectTransmision"
                  />
                ) : (
                  <>
                    <label className={styles._label_show_info}>Transmisión</label>
                    <h3 className={styles._show_info}>
                      {selectedTransmision && selectedTransmision.map((value) => value.label)}
                    </h3>
                  </>
                )}
                {checkSave && selectedTransmision.length === 0 && (
                  <p className={stylesPure._error_label}>
                    <span className={stylesPure._error_label_icon}>
                      <FontAwesomeIcon icon="exclamation-triangle" />
                    </span>
                    Selecciona al menos una transmisión
                  </p>
                )}
              </div>

              <div className={styles._boxElements}>
                {editData ? (
                  <SelectMultiple
                    overrideStrings={overrideStringsFuel}
                    options={optionsFuel.length > 0 && optionsFuel}
                    label="Selecciona un tipo de Combustible"
                    name="fuel"
                    value={selectedFuel}
                    onChange={setSelectedFuel}
                    labelledBy="SelectFuel"
                  />
                ) : (
                  <>
                    <label className={styles._label_show_info}>Combustible</label>
                    <h3 className={styles._show_info}>
                      {selectedFuel && selectedFuel.map((value) => value.label)}
                    </h3>
                  </>
                )}
                {checkSave && selectedFuel.length === 0 && (
                  <p className={stylesPure._error_label}>
                    <span className={stylesPure._error_label_icon}>
                      <FontAwesomeIcon icon="exclamation-triangle" />
                    </span>
                    Selecciona al menos un tipo de combustible
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
                {editData ? (
                  <SelectMultiple
                    overrideStrings={overrideStringsColors}
                    options={optionsColors.length > 0 && optionsColors}
                    label="Colores Disponibles"
                    name="color"
                    value={selectedColor}
                    onChange={setSelectedColor}
                    labelledBy="SelectColors"
                  />
                ) : (
                  <>
                    <label className={styles._label_show_info}>Colores</label>
                    <h3
                      className={`${styles._show_info} ${
                        selectedColor.length > 4 && styles._many_colors
                      }`}
                    >
                      {selectedColor && selectedColor.map((value) => `${value.label} , `)}
                    </h3>
                  </>
                )}
                {checkSave && selectedColor.length === 0 && (
                  <p className={stylesPure._error_label}>
                    <span className={stylesPure._error_label_icon}>
                      <FontAwesomeIcon icon="exclamation-triangle" />
                    </span>
                    Selecciona al menos un color
                  </p>
                )}
              </div>

              <div className={styles._boxElements}>
                {editData ? (
                  <SelectComponent
                    {...register('ecomark', { required: 'Distintivo Eco requerido' })}
                    refs={ecomark}
                    label="Distintivo Eco"
                    placeholder="Eco Mark"
                    name="ecomark"
                    defaultValue={ecomarkEdit ? ecomarkEdit._id : ''}
                    dataget="ecomarktype"
                    dataoptions={ecomark}
                  />
                ) : (
                  <>
                    <label className={styles._label_show_info}>Distintivo Eco</label>
                    <h3 className={styles._show_info}>{ecomarkEdit && ecomarkEdit.ecomarktype}</h3>
                  </>
                )}
                {errors.ecomark && (
                  <p className={stylesPure._error_label}>
                    <span className={stylesPure._error_label_icon}>
                      <FontAwesomeIcon icon="exclamation-triangle" />
                    </span>
                    {errors.ecomark.message}
                  </p>
                )}
              </div>

              <div className={styles._boxElements}>
                {editData ? (
                  <InputComponent
                    {...register('doors', { required: 'Número de puertas requerido' })}
                    refs={doors}
                    name="doors"
                    label="Número de Puertas"
                    placeholder="Puertas"
                    defaultValue={doorsEdit}
                  />
                ) : (
                  <>
                    <label className={styles._label_show_info}>Puertas</label>
                    <h3 className={styles._show_info}>{doorsEdit}</h3>
                  </>
                )}
                {errors.doors && (
                  <p className={stylesPure._error_label}>
                    <span className={stylesPure._error_label_icon}>
                      <FontAwesomeIcon icon="exclamation-triangle" />
                    </span>
                    {errors.doors.message}
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
                {editData ? (
                  <InputComponent
                    {...register('emission', { required: 'Emisión requerida' })}
                    refs={emission}
                    label="Emisión en gramos por CO2/Km"
                    placeholder="Emisión"
                    defaultValue={emissionEdit}
                    name="emission"
                    type="number"
                  />
                ) : (
                  <>
                    <label className={styles._label_show_info}>Emisión</label>
                    <h3 className={styles._show_info}>
                      {`${emissionEdit}  `}
                      <span className={styles._units}>
                        CO<sub>2</sub> / Km
                      </span>
                    </h3>
                  </>
                )}
                {errors.emission && (
                  <p className={stylesPure._error_label}>
                    <span className={stylesPure._error_label_icon}>
                      <FontAwesomeIcon icon="exclamation-triangle" />
                    </span>
                    {errors.emission.message}
                  </p>
                )}
              </div>

              <div className={styles._boxElements}>
                {editData ? (
                  <InputComponent
                    {...register('motor', {
                      required: 'Número de CV requerido',
                    })}
                    refs={motor}
                    label="CV del Motor"
                    placeholder="CV"
                    name="motor"
                    defaultValue={motorEdit}
                    type="Number"
                  />
                ) : (
                  <>
                    <label className={styles._label_show_info}>Motor</label>
                    <h3 className={styles._show_info}>
                      {`${motorEdit}  `}
                      <span className={styles._units}>CV</span>
                    </h3>
                  </>
                )}
                {errors.motor && (
                  <p className={stylesPure._error_label}>
                    <span className={stylesPure._error_label_icon}>
                      <FontAwesomeIcon icon="exclamation-triangle" />
                    </span>
                    {errors.motor.message}
                  </p>
                )}
              </div>

              <div className={styles._boxElements}>
                {editData ? (
                  <InputComponent
                    {...register('displacement', { required: 'Cilindrada requerida' })}
                    refs={displacement}
                    label="Cilindrada en cm3"
                    placeholder="Cilindrada"
                    defaultValue={displacementEdit}
                    name="displacement"
                    type="number"
                  />
                ) : (
                  <>
                    <label className={styles._label_show_info}>Cilindrada</label>
                    <h3 className={styles._show_info}>
                      {`${displacementEdit}  `}
                      <span className={styles._units}>
                        cm<sup>3</sup>
                      </span>
                    </h3>
                  </>
                )}
                {errors.displacement && (
                  <p className={stylesPure._error_label}>
                    <span className={stylesPure._error_label_icon}>
                      <FontAwesomeIcon icon="exclamation-triangle" />
                    </span>
                    {errors.displacement.message}
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
                {editData ? (
                  <InputComponent
                    {...register('comsumption', { required: 'Consumo requerido' })}
                    refs={comsumption}
                    label="Consumo medio litros/100km"
                    placeholder="Consumo"
                    defaultValue={comsumptionEdit}
                    name="comsumption"
                    type="number"
                    step="any"
                  />
                ) : (
                  <>
                    <label className={styles._label_show_info}>Consumo</label>
                    <h3 className={styles._show_info}>
                      {`${comsumptionEdit}  `}
                      <span className={styles._units}>litros / 100 Km</span>
                    </h3>
                  </>
                )}
                {errors.comsumption && (
                  <p className={stylesPure._error_label}>
                    <span className={stylesPure._error_label_icon}>
                      <FontAwesomeIcon icon="exclamation-triangle" />
                    </span>
                    {errors.comsumption.message}
                  </p>
                )}
              </div>
              <div className={styles._boxElements}>
                {editData ? (
                  <InputComponent
                    {...register('trunk', { required: 'Capacidad maletero requerida' })}
                    refs={trunk}
                    label="Capacidad de Maletero en litros"
                    placeholder="Maletero"
                    defaultValue={trunkEdit}
                    name="trunk"
                    type="number"
                  />
                ) : (
                  <>
                    <label className={styles._label_show_info}>Maletero</label>
                    <h3 className={styles._show_info}>
                      {`${trunkEdit}  `}
                      <span className={styles._units}>litros</span>
                    </h3>
                  </>
                )}
                {errors.trunk && (
                  <p className={stylesPure._error_label}>
                    <span className={stylesPure._error_label_icon}>
                      <FontAwesomeIcon icon="exclamation-triangle" />
                    </span>
                    {errors.trunk.message}
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
                {editData ? (
                  <InputComponent
                    {...register('dimensionslength', { required: 'Largo requerido' })}
                    refs={dimensionslength}
                    label="Largo del coche (cm)"
                    placeholder="Largo"
                    defaultValue={dimensionslengthEdit}
                    name="dimensionslength"
                    type="number"
                    step="any"
                  />
                ) : (
                  <>
                    <label className={styles._label_show_info}>Largo</label>
                    <h3 className={styles._show_info}>
                      {`${dimensionslengthEdit}  `}
                      <span className={styles._units}>cm</span>
                    </h3>
                  </>
                )}
                {errors.dimensionslength && (
                  <p className={stylesPure._error_label}>
                    <span className={stylesPure._error_label_icon}>
                      <FontAwesomeIcon icon="exclamation-triangle" />
                    </span>
                    {errors.dimensionslength.message}
                  </p>
                )}
              </div>
              <div className={styles._boxElements}>
                {editData ? (
                  <InputComponent
                    {...register('dimensionsheight', { required: 'Alto requerido' })}
                    refs={dimensionsheight}
                    label="Alto del coche (cm)"
                    placeholder="Alto"
                    defaultValue={dimensionsheightEdit}
                    name="dimensionsheight"
                    type="number"
                    step="any"
                  />
                ) : (
                  <>
                    <label className={styles._label_show_info}>Alto</label>
                    <h3 className={styles._show_info}>
                      {`${dimensionsheightEdit}  `}
                      <span className={styles._units}>cm</span>
                    </h3>
                  </>
                )}
                {errors.dimensionsheight && (
                  <p className={stylesPure._error_label}>
                    <span className={stylesPure._error_label_icon}>
                      <FontAwesomeIcon icon="exclamation-triangle" />
                    </span>
                    {errors.dimensionsheight.message}
                  </p>
                )}
              </div>
              <div className={styles._boxElements}>
                {editData ? (
                  <InputComponent
                    {...register('dimensionswidth', { required: 'Ancho requerido' })}
                    refs={dimensionswidth}
                    label="Ancho del coche (cm)"
                    placeholder="Ancho"
                    defaultValue={dimensionswidthEdit}
                    name="dimensionswidth"
                    type="number"
                    step="any"
                  />
                ) : (
                  <>
                    <label className={styles._label_show_info}>Ancho</label>
                    <h3 className={styles._show_info}>
                      {`${dimensionswidthEdit}  `}
                      <span className={styles._units}>cm</span>
                    </h3>
                  </>
                )}
                {errors.dimensionswidth && (
                  <p className={stylesPure._error_label}>
                    <span className={stylesPure._error_label_icon}>
                      <FontAwesomeIcon icon="exclamation-triangle" />
                    </span>
                    {errors.dimensionswidth.message}
                  </p>
                )}
              </div>
            </div>

            <h2 className={styles._tittle}>Información del vehículo</h2>

            {editData ? (
              <>
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
                    {technologies.length === 0 && (
                      <h2 className={styles._title_list}>
                        <FontAwesomeIcon icon="microchip" className={styles._icon_title_list} />
                        No se han añadido Tecnologías
                      </h2>
                    )}
                    {technologies.length > 0 && (
                      <>
                        <h2 className={styles._title_list}>
                          <FontAwesomeIcon icon="microchip" className={styles._icon_title_list} />
                          Listado de Tecnologías
                        </h2>
                        <ul>
                          {technologies.map((tecnologia, index) => (
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
                {checkSave && technologies.length === 0 && (
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
                    {conforts.length === 0 && (
                      <h2 className={styles._title_list}>
                        <FontAwesomeIcon icon="thumbs-up" className={styles._icon_title_list} />
                        No se han añadido Confort
                      </h2>
                    )}
                    {conforts.length > 0 && (
                      <>
                        <h2 className={styles._title_list}>
                          <FontAwesomeIcon icon="thumbs-up" className={styles._icon_title_list} />
                          Listado de Confort
                        </h2>
                        <ul>
                          {conforts.map((confort, index) => (
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
                {checkSave && conforts.length === 0 && (
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
                    {securities.length === 0 && (
                      <h2 className={styles._title_list}>
                        <FontAwesomeIcon icon="shield-alt" className={styles._icon_title_list} />
                        No se ha añadido Seguridad
                      </h2>
                    )}
                    {securities.length > 0 && (
                      <>
                        <h2 className={styles._title_list}>
                          <FontAwesomeIcon icon="shield-alt" className={styles._icon_title_list} />
                          Listado de Seguridad
                        </h2>
                        <ul>
                          {securities.map((seguridad, index) => (
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
                {checkSave && securities.length === 0 && (
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
                    {exteriors.length === 0 && (
                      <h2 className={styles._title_list}>
                        <FontAwesomeIcon icon="air-freshener" className={styles._icon_title_list} />
                        No se ha añadido Exterior
                      </h2>
                    )}
                    {exteriors.length > 0 && (
                      <>
                        <h2 className={styles._title_list}>
                          <FontAwesomeIcon
                            icon="air-freshener"
                            className={styles._icon_title_list}
                          />
                          Listado de Exterior
                        </h2>
                        <ul>
                          {exteriors.map((exterior, index) => (
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
                {checkSave && exteriors.length === 0 && (
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
              </>
            ) : (
              <>
                <div
                  className={`${windowSize !== 'sm' && styles._row3_xlg}
    ${windowSize === 'sm' && styles._row3_sm}  
    `}
                >
                  <div className={styles._boxElements}>
                    <h2 className={styles._title_list}>
                      <FontAwesomeIcon icon="microchip" className={styles._icon_title_list} />
                      Listado de Tecnologías
                    </h2>
                    <ul>
                      {technologies.map((tecnologia, index) => (
                        <li className={styles._list_li} key={index}>
                          {tecnologia}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles._boxElements}>
                    <h2 className={styles._title_list}>
                      <FontAwesomeIcon icon="thumbs-up" className={styles._icon_title_list} />
                      Listado de Confort
                    </h2>
                    <ul>
                      {conforts.map((confort, index) => (
                        <li className={styles._list_li} key={index}>
                          {confort}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div
                  className={`${windowSize !== 'sm' && styles._row3_xlg}
    ${windowSize === 'sm' && styles._row3_sm}  
    `}
                >
                  <div className={styles._boxElements}>
                    <h2 className={styles._title_list}>
                      <FontAwesomeIcon icon="shield-alt" className={styles._icon_title_list} />
                      Listado de Seguridad
                    </h2>
                    <ul>
                      {securities.map((seguridad, index) => (
                        <li className={styles._list_li} key={index}>
                          {seguridad}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles._boxElements}>
                    <h2 className={styles._title_list}>
                      <FontAwesomeIcon icon="air-freshener" className={styles._icon_title_list} />
                      Listado de Exterior
                    </h2>
                    <ul>
                      {exteriors.map((exterior, index) => (
                        <li className={styles._list_li} key={index}>
                          {exterior}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </>
            )}

            <div className={styles._row_buttons}>
              {editData && !newCar && (
                <>
                  <ButtonComponent
                    label="Cancelar"
                    alt="Cancelar"
                    typeButton="cancel"
                    actionButton={() => setEditData(false)}
                  />
                  <ButtonComponent
                    label="Guardar"
                    type="submit"
                    alt="Guardar"
                    typeButton="ok"
                    actionButton={() => {
                      handleSubmit(onSubmit);
                      setCheckSave(true);
                    }}
                  />
                </>
              )}
              {editData && newCar && (
                <>
                  <ButtonComponent
                    label="Cancelar"
                    alt="Cancelar"
                    typeButton="cancel"
                    actionButton={() => handleModal()}
                  />
                  <ButtonComponent
                    label="Guardar"
                    type="submit"
                    alt="Guardar"
                    typeButton="ok"
                    actionButton={() => {
                      handleSubmit(onSubmit);
                      setCheckSave(true);
                    }}
                  />
                </>
              )}
              {!editData && !newCar && (
                <ButtonComponent
                  label="Cerrar"
                  alt="Cerrar"
                  typeButton="cancel"
                  actionButton={() => handleModal()}
                />
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CarProfileForm;
