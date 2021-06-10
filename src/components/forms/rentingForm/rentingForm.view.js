import React, { useState, useEffect, useRef } from 'react';
import useWindowSize from '../../../constants/useWindowSize';

import GearIcon from '../../assets/gears.gif';

import stylesPure from '../../pureComponents/pureComponents.module.css';
import SelectComponent from '../../pureComponents/selectComponent';
import ToggleButtonComponent from '../../pureComponents/toggleButtonComponent';

import styles from '../forms.module.css';

import { ReactComponent as Exclamation } from '../../assets/engineExclamation.svg';

import { useForm } from 'react-hook-form';
import {
  RentingGetDataOptions,
  GetDataRenting,
  CreateCarRequestModel,
  CreateCarRequestVersion,
  GetModelVersion,
  RentingGetOwnOptionsTransmision,
  RentingGetOwnOptionsFuel,
  RentingGetOwnOptionsColor,
  UpdateDataRentingOffer,
  CreateRentingOptionsVersion,
  CreateRentingOffer,
  DeleteRentingOffer,
} from '../../../utils/dashBoardCalls';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DATADOMIE } from '../../../pages/createRentingPage/dataDomie';
import ButtonComponent from '../../pureComponents/buttonComponent/buttonComponent.view';
import InputComponent from '../../pureComponents/inputComponent/index';
import { API_DEV } from '../../../utils/api.constants';
import SelectComponentRentingOffer from '../../pureComponents/selectComponentRentingOffer/selectComponentRentingOffer.view';

const RentingForm = ({ toEdit, dataProvider, handleModal, systemMessage, updateSuccess }) => {
  const [dataToEdit, setDataToEdit] = useState({});
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  // const [provider, setProvider] = useState('');
  // useEffect(() => {
  //   if (dataProvider) {
  //     setProvider(dataProvider._id);
  //   }
  //   // console.log('dataToEdit  => ', dataToEdit);
  // }, [dataProvider]);

  const [checkSave, setCheckSave] = useState(false);
  const [deleteRenting, setDeleteRenting] = useState(false);
  const [dataOptions, setDataOptions] = useState({});
  const [dataOptionsAPI, setDataOptionsAPI] = useState({});
  const [transmisionOptions, setTransmisionOptions] = useState([]);
  const [fuelOptions, setFuelOptions] = useState([]);
  const [colorOptions, setColorOptions] = useState([]);
  const [errorNuevoSeminuevo, setErrorNuevoSeminuevo] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const nuevoRef = useRef();
  const seminuevoRef = useRef();

  const [newRenting, setNewRenting] = useState(false);
  const [editData, setEditData] = useState(false);
  const handleEdit = () => {
    setEditData(!editData);
  };

  const {
    brand,
    transmision,
    fuel,
    color,
    model,
    version,
    km,
    price,
    time,
    goody,
    equipment,
  } = dataOptions;

  const {
    _id: rentingOfferId,
    newcar,
    version: versionEdit,
    km: kmEdit,
    price: priceEdit,
    time: timeEdit,
    transmision: transmisionEdit,
    fuel: fuelEdit,
    color: colorEdit,
    goodies: goodiesEdit,
    equipments: equipmentEdit,
  } = dataToEdit;

  const [goodiesData, setGoodiesData] = useState([]);
  const [equipamientoData, setEquipamientoData] = useState([]);

  useEffect(() => {
    if (goodiesEdit !== undefined) {
      setGoodiesData(goodiesEdit?.map((value) => value._id));
    }
    console.log('goodiesEdit  => ', goodiesEdit);
  }, [goodiesEdit]);

  useEffect(() => {
    if (equipmentEdit !== undefined) {
      setEquipamientoData(equipmentEdit?.map((value) => value._id));
    }
  }, [equipmentEdit]);

  useEffect(() => {
    setTransmisionOptions(
      versionEdit?.transmision.map((transmision) => ({
        endpoint: API_DEV.TRANSMISION + transmision,
        key: 'transmision',
      }))
    );
    setFuelOptions(
      versionEdit?.fuel.map((fuel) => ({
        endpoint: API_DEV.FUEL + fuel,
        key: 'fuel',
      }))
    );
    setColorOptions(
      versionEdit?.color.map((color) => ({
        endpoint: API_DEV.COLOR + color,
        key: 'color',
      }))
    );
  }, [versionEdit]);

  useEffect(() => {
    if (transmisionOptions && fuelOptions && colorOptions) {
      RentingGetOwnOptionsTransmision({
        transmisionOptions,
        onSuccess: setDataOptionsAPI,
      });
      RentingGetOwnOptionsFuel({ fuelOptions, onSuccess: setDataOptionsAPI });
      RentingGetOwnOptionsColor({ colorOptions, onSuccess: setDataOptionsAPI });
    }
  }, [transmisionOptions, fuelOptions, colorOptions]);

  useEffect(() => {
    RentingGetDataOptions({ onSuccess: setDataOptionsAPI });
    if (toEdit) {
      GetDataRenting({ toEdit, onSuccess: setDataToEdit });
      setNewRenting(false);
    } else {
      setEditData(true);
      setNewRenting(true);
    }
  }, []);

  const watchBrand = watch('brand');
  const watchModel = watch('model');
  const watchVersion = watch('version');

  useEffect(() => {
    if (versionEdit !== undefined) {
      GetModelVersion({
        brand: watchBrand || versionEdit?.brand._id,
        model: watchModel || versionEdit?.model._id,
        onSuccess: setDataOptionsAPI,
      });
    }
    if (newcar !== undefined) {
      setIsChecked(newcar);
    }
  }, [dataToEdit]);

  useEffect(() => {
    setDataOptions({ ...dataOptions, ...dataOptionsAPI });
    // mountMultiples();
  }, [dataOptionsAPI]);

  const windowSize = useWindowSize();

  const _handleVersionOptions = (res) => {
    if (versionEdit === undefined) {
      CreateRentingOptionsVersion({ watchVersion, onSuccess: setDataToEdit });
    } else {
      let color = res.version.color;
      let fuel = res.version.fuel;
      let transmision = res.version.transmision;

      let flyDataToEdit = versionEdit;
      console.log('_flyDataToEdit => ', flyDataToEdit);

      flyDataToEdit = { ...flyDataToEdit, fuel: fuel, color: color, transmision: transmision };

      setDataToEdit({
        ...dataToEdit,
        version: flyDataToEdit,
      });
    }

    // console.log('res createrentingoptions => ',res);
  };

  const _handleToggle = (e) => {
    if (e.target.name === 'nuevo') {
      if (seminuevoRef.current.checked) {
        seminuevoRef.current.checked = false;
        setIsChecked(true);
      } else {
        setIsChecked(false);
      }
    } else {
      if (nuevoRef.current.checked) {
        nuevoRef.current.checked = false;
        setIsChecked(false);
      } else {
        setIsChecked(false);
      }
    }
  };

  useEffect(() => {
    if (isChecked) {
      nuevoRef.current.checked = true;
      seminuevoRef.current.checked = false;
    } else {
      seminuevoRef.current.checked = true;
      nuevoRef.current.checked = false;
    }

    if (nuevoRef.current.checked === false && seminuevoRef.current.checked === false) {
      setErrorNuevoSeminuevo(true);
    } else {
      setErrorNuevoSeminuevo(false);
    }
  }, [isChecked]);

  const _handleSuccess = (res) => {
    handleModal();
    updateSuccess(res);
    if (!newRenting) {
      systemMessage({
        message: 'Renting actualizado correctamente',
        typeAlert: 'ok',
      });
    } else {
      systemMessage({
        message: 'Renting creado correctamente',
        typeAlert: 'ok',
      });
    }
  };

  const onSubmit = (data) => {
    if (!errorNuevoSeminuevo && equipamientoData.length !== 0 && goodiesData.length !== 0) {
      let queryPutData = {
        ...data,
        newcar: isChecked,
        goodies: goodiesData,
        equipments: equipamientoData,
      };
      console.log('queryPutData  : ', queryPutData);

      if (!newRenting) {
        UpdateDataRentingOffer({
          toEdit,
          queryPutData,
          onSuccess: (res) => _handleSuccess(res),
          onError: () =>
            systemMessage({
              message: 'No se ha podido actualizar correctamente',
              typeAlert: 'error',
            }),
        });
      } else {
        queryPutData = {
          ...queryPutData,
          provider: dataProvider._id,
        };
        console.log('queryPutData  : ', queryPutData);

        CreateRentingOffer({
          queryPutData,
          onSuccess: (res) => _handleSuccess(res),
          onError: () =>
            systemMessage({
              message: 'No se ha podido crear el renting correctamente',
              typeAlert: 'error',
            }),
        });
      }

      handleModal();
    } else {
      console.log('algo falta gachon!!');
    }
  };

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

  //* Watches

  useEffect(() => {
    if (watchBrand) CreateCarRequestModel({ watchBrand, onSuccess: setDataOptionsAPI });
  }, [watchBrand]);
  useEffect(() => {
    if (watchModel) CreateCarRequestVersion({ watchModel, onSuccess: setDataOptionsAPI });
  }, [watchModel]);
  useEffect(() => {
    if (watchVersion)
      CreateRentingOptionsVersion({ watchVersion, onSuccess: (res) => _handleVersionOptions(res) });
  }, [watchVersion]);
  //* Watches

  const _handleShowDelete = () => {
    setDeleteRenting(!deleteRenting);
  };

  const _handleSuccessDelete = (res) => {
    _handleShowDelete();
    handleModal();
    systemMessage({
      message: 'Renting eliminado correctamente',
      typeAlert: 'ok',
    });
    updateSuccess(res);
  };

  const _handleDelete = () => {
    DeleteRentingOffer({
      rentingOfferId,
      providerId: dataProvider._id,
      version: versionEdit._id,
      onSuccess: (res) => _handleSuccessDelete(res),
      onError: () =>
        systemMessage({
          message: 'No se ha podido eliminar este renting',
          typeAlert: 'error',
        }),
    });
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
              <img src={GearIcon} className={styles._icon_title} alt="Renting" />
              <span className={styles._title}>
                {editData && !newRenting && 'Editar Renting'}
                {editData && newRenting && 'Crea un nuevo renting'}
                {!editData && !newRenting && 'Información del renting'}
              </span>
            </div>

            <div className={styles._boxElements}>
              <div
                className={styles._row_buttons}
                style={{ display: 'flex', justifyContent: 'flex-end' }}
              >
                {!editData && !deleteRenting && (
                  <>
                    <ButtonComponent
                      label="Editar Renting"
                      alt="Editar Renting"
                      typeButton="ok"
                      actionButton={() => handleEdit()}
                    />
                    {!deleteRenting && (
                      <ButtonComponent
                        label="Eliminar Renting"
                        alt="Eliminar Renting"
                        typeButton="cancel"
                        actionButton={() => _handleShowDelete()}
                      />
                    )}
                  </>
                )}
              </div>
            </div>
          </div>

          {deleteRenting && (
            <>
              <div className={styles._confirm_delete}>
                <h2 className={styles._title_confirm}>
                  <Exclamation className={styles._icon_svg} />
                  <span>¿Confirma que desea eliminar este renting?</span>
                </h2>
                <div style={{ display: 'flex' }}>
                  <ButtonComponent
                    label="Cancelar eliminiación"
                    alt="Cancelar eliminiación"
                    typeButton="cancelWarning"
                    actionButton={() => _handleShowDelete()}
                  />
                  <ButtonComponent
                    label="Eliminar renting"
                    alt="Eliminar renting"
                    typeButton="okWarning"
                    actionButton={() => _handleDelete()}
                  />
                </div>
              </div>
            </>
          )}

          <form onSubmit={handleSubmit(onSubmit)}>
            <h4 className={styles._label_newcar} style={{ textAlign: 'center !important' }}>
              Estado del vehículo
            </h4>
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
                      // defaultChecked={value.name === 'nuevo' ? nuevo : seminuevo}
                      onChange={(e) => {
                        _handleToggle(e);
                      }}
                      disabled={!editData}
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
                {editData ? (
                  <SelectComponent
                    {...register('brand', { required: 'Marca de coche requerida' })}
                    refs={brand}
                    label="Selecciona una Marca"
                    placeholder="Marca"
                    name="brand"
                    defaultValue={versionEdit ? versionEdit?.brand?._id : ''}
                    dataoptions={brand}
                    dataget="brandname"
                  />
                ) : (
                  <>
                    <label className={styles._label_show_info}>Marca</label>
                    <h3 className={styles._show_info}>
                      {versionEdit && versionEdit.brand.brandname}
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
                    defaultValue={versionEdit ? versionEdit?.model?._id : ''}
                    dataoptions={model}
                    dataget="modelname"
                    disabled={watchBrand || versionEdit?.model ? false : true}
                  />
                ) : (
                  <>
                    <label className={styles._label_show_info}>Modelo</label>
                    <h3 className={styles._show_info}>
                      {versionEdit && versionEdit.model.modelname}
                    </h3>
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
                  <SelectComponent
                    {...register('version', { required: 'Versión de coche requerido' })}
                    refs={version}
                    label="Selecciona una Versión"
                    placeholder="Versión"
                    name="version"
                    defaultValue={versionEdit ? versionEdit?._id : ''}
                    dataoptions={version}
                    dataget="version"
                    disabled={watchModel || versionEdit ? false : true}
                  />
                ) : (
                  <>
                    <label className={styles._label_show_info}>Versión</label>
                    <h3 className={styles._show_info}>{versionEdit && versionEdit.version}</h3>
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
                  <SelectComponentRentingOffer
                    {...register('transmision', { required: 'Transmisión del coche requerida' })}
                    refs={transmision}
                    label="Selecciona una Transmisión"
                    placeholder="Transmisión"
                    name="transmision"
                    defaultValue={transmisionEdit ? transmisionEdit[0] : ''}
                    dataoptions={transmision}
                    dataget="transmisiontype"
                  />
                ) : (
                  <>
                    <label className={styles._label_show_info}>Transmisión</label>
                    <h3 className={styles._show_info}>{transmisionEdit && transmisionEdit}</h3>
                  </>
                )}
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
                {editData ? (
                  <SelectComponentRentingOffer
                    {...register('fuel', { required: 'Selecciona un tipo de combustible' })}
                    refs={fuel}
                    label="Selecciona una combustible"
                    placeholder="Combustible"
                    name="fuel"
                    defaultValue={fuel ? fuel[0] : ''}
                    dataoptions={fuel}
                    dataget="fueltype"
                  />
                ) : (
                  <>
                    <label className={styles._label_show_info}>Combustible</label>
                    <h3 className={styles._show_info}>{fuelEdit && fuelEdit}</h3>
                  </>
                )}
                {errors.fuel && (
                  <p className={stylesPure._error_label}>
                    <span className={stylesPure._error_label_icon}>
                      <FontAwesomeIcon icon="exclamation-triangle" />
                    </span>
                    {errors.fuel.message}
                  </p>
                )}
              </div>

              <div className={styles._boxElements}>
                {editData ? (
                  <SelectComponentRentingOffer
                    {...register('color', { required: 'Selecciona un color del' })}
                    refs={color}
                    label="Color del coche"
                    placeholder="Color"
                    name="color"
                    defaultValue={colorEdit ? colorEdit : ''}
                    dataoptions={color}
                    dataget="colorname"
                    datagetvalue="color"
                  />
                ) : (
                  <>
                    <label className={styles._label_show_info}>Colores</label>
                    <h3 className={`${styles._show_info}`}>
                      <div
                        className={styles._item_color_circle}
                        style={{ backgroundColor: `${colorEdit && colorEdit}` }}
                      />
                    </h3>
                  </>
                )}
                {errors.color && (
                  <p className={stylesPure._error_label}>
                    <span className={stylesPure._error_label_icon}>
                      <FontAwesomeIcon icon="exclamation-triangle" />
                    </span>
                    {errors.color.message}
                  </p>
                )}
              </div>
            </div>

            <div
              className={`${windowSize !== 'sm' && styles._row3_xlg}
      ${windowSize === 'sm' && styles._row3_sm} ${styles._renting_options}`}
            >
              <div className={styles._boxElements}>
                {editData ? (
                  <InputComponent
                    {...register('km', { required: 'Kilómetros requeridos' })}
                    refs={km}
                    label="Km máximos del renting"
                    placeholder="Km"
                    name="km"
                    defaultValue={kmEdit && kmEdit}
                    type="number"
                  />
                ) : (
                  <>
                    <label className={styles._label_show_info}>Km del renting</label>
                    <h3 className={styles._show_info}>
                      {kmEdit && kmEdit} <span className={styles._units}>Km anuales</span>
                    </h3>
                  </>
                )}
                {errors.km && (
                  <p className={stylesPure._error_label}>
                    <span className={stylesPure._error_label_icon}>
                      <FontAwesomeIcon icon="exclamation-triangle" />
                    </span>
                    {errors.km.message}
                  </p>
                )}
              </div>

              <div className={styles._boxElements}>
                {editData ? (
                  <InputComponent
                    {...register('time', { required: 'Meses del renting requerida' })}
                    refs={time}
                    label="Meses del renting"
                    placeholder="Meses"
                    name="time"
                    defaultValue={timeEdit && timeEdit}
                    type="number"
                  />
                ) : (
                  <>
                    <label className={styles._label_show_info}>Tiempo del renting</label>
                    <h3 className={styles._show_info}>
                      {timeEdit && timeEdit} <span className={styles._units}>meses</span>
                    </h3>
                  </>
                )}
                {errors.time && (
                  <p className={stylesPure._error_label}>
                    <span className={stylesPure._error_label_icon}>
                      <FontAwesomeIcon icon="exclamation-triangle" />
                    </span>
                    {errors.time.message}
                  </p>
                )}
              </div>

              <div className={styles._boxElements}>
                {editData ? (
                  <InputComponent
                    {...register('price', { required: 'Precio del renting requerido' })}
                    refs={price}
                    label="Precio del renting"
                    placeholder="Precio"
                    name="price"
                    defaultValue={priceEdit && priceEdit}
                    type="number"
                  />
                ) : (
                  <>
                    <label className={styles._label_show_info}>Precio del renting</label>
                    <h3 className={styles._show_info}>
                      {priceEdit && priceEdit} <span className={styles._units}>€ al mes</span>
                    </h3>
                  </>
                )}
                {errors.price && (
                  <p className={stylesPure._error_label}>
                    <span className={stylesPure._error_label_icon}>
                      <FontAwesomeIcon icon="exclamation-triangle" />
                    </span>
                    {errors.price.message}
                  </p>
                )}
              </div>
            </div>

            {editData ? (
              <>
                <h2 className={styles._tittle}>Este Renting incluye</h2>

                <div className={styles._toggles_list}>
                  {goody &&
                    goody.map((value) => (
                      <div key={value._id}>
                        <div>
                          <ToggleButtonComponent
                            id={value._id}
                            name={value.cargoodie}
                            type="checkbox"
                            checked={
                              goodiesData?.filter((goodie) => goodie === value._id).length > 0
                            }
                            label={value.cargoodie}
                            iconlabel={value.icongoodie}
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
                  {equipment &&
                    equipment.map((value) => (
                      <div key={value._id}>
                        <div>
                          <ToggleButtonComponent
                            id={value._id}
                            name={value.carequipment}
                            type="checkbox"
                            checked={
                              equipamientoData?.filter((equipment) => equipment === value._id)
                                .length > 0
                            }
                            label={value.carequipment}
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
              </>
            ) : (
              <>
                <div
                  className={`${windowSize !== 'sm' && styles._row3_xlg}
    ${windowSize === 'sm' && styles._row3_sm}`}
                >
                  <div className={styles._boxElements}>
                    <h2 className={styles._title_list}>
                      <FontAwesomeIcon icon="medal" className={styles._icon_title_list} />
                      Este renting incluye
                    </h2>
                    <ul>
                      {goodiesEdit?.map((goodie, index) => (
                        <li className={styles._list_li} key={index}>
                          {goodie.cargoodie}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles._boxElements}>
                    <h2 className={styles._title_list}>
                      <FontAwesomeIcon icon="clipboard-list" className={styles._icon_title_list} />
                      Listado de equipamiento
                    </h2>
                    <ul>
                      {equipmentEdit?.map((equipment, index) => (
                        <li className={styles._list_li} key={index}>
                          {equipment.carequipment}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </>
            )}

            <div className={styles._row_buttons}>
              {editData && !newRenting && (
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
                    actionButton={() => {
                      handleSubmit(onSubmit);
                      setCheckSave(true);
                    }}
                  />
                </>
              )}
              {editData && newRenting && (
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
                    actionButton={() => {
                      handleSubmit(onSubmit);
                      setCheckSave(true);
                    }}
                  />
                </>
              )}
              {!editData && !newRenting && (
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

export default RentingForm;
