import React, { useState, useEffect } from 'react';
import useWindowSize from '../../constants/useWindowSize';

import stylesPure from '../pureComponents/pureComponents.module.css';

import styles from './userForm.module.css';

import { useForm } from 'react-hook-form';
import {
  CreateCarRequestAll, GetDataCarProfile
} from '../../utils/createCarRequestAll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ButtonComponent from '../pureComponents/buttonComponent/buttonComponent.view';
import InputComponent from '../pureComponents/inputComponent/index';

const UserForm = ({ toEdit, handleCloseModal }) => {
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


  const [dataOptions, setDataOptions] = useState({});
  const [dataOptionsAPI, setDataOptionsAPI] = useState({});

  useEffect(() => {
    setDataOptions({ ...dataOptions, ...dataOptionsAPI });
  }, [dataOptionsAPI]);

  useEffect(() => {
    CreateCarRequestAll({ onSuccess: setDataOptionsAPI });
  }, []);


  const {
    role: roleOptions,
    nameUser,
    apellidosUser,
    emailUser,
    telefonoUser,
    companyUser,
    passOneUser,
    passTwoUser
  } = dataOptions;


  const {
    nameUserData,
    apellidosUserData,
    emailUserData,
    telefonoUserData,
    companyUserData,
    passOneUserData,
    passTwoUserData
  } = dataToEDit;

  const onSubmit = (data) => {
    // setCheckSave(true);
    console.log('FONFOÑÑA!!');

    const dataAPI = {data};
    console.log('dataAPI  : ', dataAPI);

    // if (
    //   !errorNuevoSeminuevo &&
    // ) {
    //   const dataAPI = {
    //     ...data,
    //     nuevo: isChecked.nuevo,
    //     seminuevo: isChecked.seminuevo,
    //   };
    //   console.log('dataAPI  : ', dataAPI);
    // } else {
    //   console.log('algo falta gachon!!');
    // }
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
          <h2 id="step-title" className={styles._tittle}>
            <FontAwesomeIcon icon="user" style={{ marginRight: '20px' }} />
            Editar Usuario
          </h2>

          <form onSubmit={handleSubmit(onSubmit)}>

            <div
              className={`${windowSize !== 'sm' && styles._row3_xlg}
    ${windowSize === 'sm' && styles._row3_sm}  
    `}
            >

              <div className={styles._boxElements}>
                <InputComponent
                  {...register('nameUser', { required: 'Nombre de Usuario Requerido' })}
                  refs={nameUser}
                  label="Introduce un nombre"
                  placeholder="Nombre"
                  defaultValue={nameUserData}
                  name="nameUser"
                  type="text"
                />
                {errors.nameUser && (
                  <p className={stylesPure._error_label}>
                    <span className={stylesPure._error_label_icon}>
                      <FontAwesomeIcon icon="exclamation-triangle" />
                    </span>
                    {errors.nameUser.message}
                  </p>
                )}
              </div>

              <div className={styles._boxElements}>
                <InputComponent
                  {...register('apellidosUser', { required: 'Apellidos Requeridos' })}
                  refs={apellidosUser}
                  label="Introduce apellidos"
                  placeholder="Apellidos"
                  defaultValue={apellidosUserData}
                  name="apellidosUser"
                  type="text"
                />
                {errors.apellidosUser && (
                  <p className={stylesPure._error_label}>
                    <span className={stylesPure._error_label_icon}>
                      <FontAwesomeIcon icon="exclamation-triangle" />
                    </span>
                    {errors.apellidosUser.message}
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
                  {...register('emailUser', { required: 'Email de Usuario Requerido' })}
                  refs={emailUser}
                  label="Introduce un email"
                  placeholder="Email"
                  defaultValue={emailUserData}
                  name="emailUser"
                  type="text"
                />
                {errors.emailUser && (
                  <p className={stylesPure._error_label}>
                    <span className={stylesPure._error_label_icon}>
                      <FontAwesomeIcon icon="exclamation-triangle" />
                    </span>
                    {errors.emailUser.message}
                  </p>
                )}
              </div>

              <div className={styles._boxElements}>
                <InputComponent
                  {...register('telefonoUser', { required: 'Teléfono Requerido' })}
                  refs={telefonoUser}
                  label="Introduce un teléfono"
                  placeholder="Teléfono"
                  defaultValue={telefonoUserData}
                  name="telefonoUser"
                  type="text"
                />
                {errors.telefonoUser && (
                  <p className={stylesPure._error_label}>
                    <span className={stylesPure._error_label_icon}>
                      <FontAwesomeIcon icon="exclamation-triangle" />
                    </span>
                    {errors.telefonoUser.message}
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
                  {...register('companyUser', { required: 'Compañia Requerida' })}
                  refs={companyUser}
                  label="Introduce Nombre de la compañia"
                  placeholder="Compañia"
                  defaultValue={companyUserData}
                  name="companyUser"
                  type="text"
                />
                {errors.companyUser && (
                  <p className={stylesPure._error_label}>
                    <span className={stylesPure._error_label_icon}>
                      <FontAwesomeIcon icon="exclamation-triangle" />
                    </span>
                    {errors.companyUser.message}
                  </p>
                )}
              </div>

            </div>


            <hr className={styles._hr_line} />

            <div
              className={`${windowSize !== 'sm' && styles._row3_xlg}
    ${windowSize === 'sm' && styles._row3_sm}  
    `}
            >

              <div className={styles._boxElements}>
                <InputComponent
                  {...register('passOneUser', { required: 'Contraseña Requerida' })}
                  refs={passOneUser}
                  label="Introduce una contaseña"
                  placeholder="Contraseña"
                  defaultValue={passOneUserData}
                  name="passOneUser"
                  type="text"
                />
                {errors.passOneUser && (
                  <p className={stylesPure._error_label}>
                    <span className={stylesPure._error_label_icon}>
                      <FontAwesomeIcon icon="exclamation-triangle" />
                    </span>
                    {errors.passOneUser.message}
                  </p>
                )}
              </div>

              <div className={styles._boxElements}>
                <InputComponent
                  {...register('passTwoUser', { required: 'Contraseña Requerida' })}
                  refs={passTwoUser}
                  label="Repite la contraseña"
                  placeholder="Repite Contraseña"
                  defaultValue={passTwoUserData}
                  name="passTwoUser"
                  type="text"
                />
                {errors.passTwoUser && (
                  <p className={stylesPure._error_label}>
                    <span className={stylesPure._error_label_icon}>
                      <FontAwesomeIcon icon="exclamation-triangle" />
                    </span>
                    {errors.passTwoUser.message}
                  </p>
                )}
              </div>

            </div>


            <div className={styles._row_buttons}>
              <ButtonComponent
                label="Cancelar"
                alt="Cancelar"
                typeButton="cancel"
                actionButton={() => handleCloseModal()}
              />
              <ButtonComponent label="Guardar" type="submit" alt="Guardar" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
