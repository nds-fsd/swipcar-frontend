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

const RentingForm = ({ toEdit, handleCloseModal }) => {
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
    setValue,
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
    pruebaNumero,
  } = dataToEDit;

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
                <InputComponent
                  {...register('pruebaNumero', {
                    required: 'Nombre de Usuario Requerido',
                    parseInt,
                  })}
                  refs={pruebaNumero}
                  label="Introduce un nombre"
                  placeholder="pruebaNumero"
                  // defaultValue={nameUserData}
                  name="pruebaNumero"
                  type="number"
                  // onChange={setValue('pruebaNumero', parseInt('45'))}
                  onChange={(e) => {
                    const value = e.target.value;
                    const valueInNumber = parseInt(value);
                    setValue('pruebaNumero', valueInNumber);
                  }}
                />
                {errors.pruebaNumero && (
                  <>
                    <p className={stylesPure._error_label}>
                      <span className={stylesPure._error_label_icon}>
                        <FontAwesomeIcon icon="exclamation-triangle" />
                      </span>
                      {errors.pruebaNumero.message}
                    </p>
                  </>
                )}
              </div>
            </div>

            <ButtonComponent label="Guardar" type="submit" alt="Guardar" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default RentingForm;
