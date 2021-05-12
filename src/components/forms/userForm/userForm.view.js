import React, { useState, useEffect } from 'react';
import useWindowSize from '../../../constants/useWindowSize';

import stylesPure from '../../pureComponents/pureComponents.module.css';

import UsersIcon from '../../assets/userIcon.gif';

import styles from '../forms.module.css';

import { useForm } from 'react-hook-form';
import { CreateCarRequestAll, GetDataCarProfile } from '../../../utils/createCarRequestAll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ButtonComponent from '../../pureComponents/buttonComponent/buttonComponent.view';
import InputComponent from '../../pureComponents/inputComponent/index';

const UserForm = ({ toEdit, handleCloseModal }) => {
  const [dataToEDit, setDataToEDit] = useState({
    nameUser: 'Agustín',
    apellidosUser: 'Gómez Campillos',
    emailUser: 'agugoka@gmail.com',
    telefonoUser: '123123',
    companyUser: 'My wonderful life!!',
  });

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
    watch,
  } = useForm();

  const [changePass, setChangePass] = useState(false);

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
    passTwoUser,
  } = dataOptions;

  const {
    nameUser: nameUserData,
    apellidosUser: apellidosUserData,
    emailUser: emailUserData,
    telefonoUser: telefonoUserData,
    companyUser: companyUserData,
  } = dataToEDit;

  const onSubmit = (data) => {
    if (passOneWatch !== passTwoWatch) {
      alert('Las contraseñas no coinciden!!');
    }
    // setCheckSave(true);
    const dataAPI = { data };
    console.log('dataAPI  : ', dataAPI);
  };

  const passOneWatch = watch('passOneUser');
  const passTwoWatch = watch('passTwoUser');

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
              <img
                src={UsersIcon}
                className={styles._icon_title}
                alt=""
              />
              <span className={styles._title}>
                {editData ? 'Editar Usuario' : 'Información de usuario'}
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
                {editData ? (
                  <InputComponent
                    {...register('nameUser', { required: 'Nombre de Usuario Requerido' })}
                    refs={nameUser}
                    label="Introduce un nombre"
                    placeholder="Nombre"
                    defaultValue={nameUserData}
                    name="nameUser"
                    type="text"
                  />
                ) : (
                  <>
                    <label className={styles._label_show_info}>Nombre</label>
                    <h3 className={styles._show_info}>{nameUserData}</h3>
                  </>
                )}
                {errors.nameUser && (
                  <>
                    <p className={stylesPure._error_label}>
                      <span className={stylesPure._error_label_icon}>
                        <FontAwesomeIcon icon="exclamation-triangle" />
                      </span>
                      {errors.nameUser.message}
                    </p>
                  </>
                )}
              </div>

              <div className={styles._boxElements}>
                {editData ? (
                  <InputComponent
                    {...register('apellidosUser', { required: 'Apellidos Requeridos' })}
                    refs={apellidosUser}
                    label="Introduce apellidos"
                    placeholder="Apellidos"
                    defaultValue={apellidosUserData}
                    name="apellidosUser"
                    type="text"
                  />
                ) : (
                  <>
                    <label className={styles._label_show_info}>Apellidos</label>
                    <h3 className={styles._show_info}>{apellidosUserData}</h3>
                  </>
                )}
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
                {editData ? (
                  <InputComponent
                    {...register('emailUser', { required: 'Email de Usuario Requerido' })}
                    refs={emailUser}
                    label="Introduce un email"
                    placeholder="Email"
                    defaultValue={emailUserData}
                    name="emailUser"
                    type="email"
                  />
                ) : (
                  <>
                    <label className={styles._label_show_info}>Email</label>
                    <h3 className={styles._show_info}>{emailUserData}</h3>
                  </>
                )}
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
                {editData ? (
                  <InputComponent
                    {...register('telefonoUser', { required: 'Teléfono Requerido' })}
                    refs={telefonoUser}
                    label="Introduce un teléfono"
                    placeholder="Teléfono"
                    defaultValue={telefonoUserData}
                    name="telefonoUser"
                    type="number"
                  />
                ) : (
                  <>
                    <label className={styles._label_show_info}>Teléfono</label>
                    <h3 className={styles._show_info}>{telefonoUserData}</h3>
                  </>
                )}
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
                {editData ? (
                  <InputComponent
                    {...register('companyUser', { required: 'Compañia Requerida' })}
                    refs={companyUser}
                    label="Introduce Nombre de la compañia"
                    placeholder="Compañia"
                    defaultValue={companyUserData}
                    name="companyUser"
                    type="text"
                  />
                ) : (
                  <>
                    <label className={styles._label_show_info}>Compañia</label>
                    <h3 className={styles._show_info}>{companyUserData}</h3>
                  </>
                )}
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

            {editData && (
              <>
                <hr className={styles._hr_line} />

                {changePass ? (
                  <ButtonComponent
                    label="Cancelar cambio de password"
                    alt="Cancelar cambio de password"
                    typeButton="cancel"
                    iconData="window-close"
                    actionButton={() => setChangePass(false)}
                  />
                ) : (
                  <ButtonComponent
                    label="Cambiar Password"
                    alt="Cambiar Password"
                    typeButton="ok"
                    iconData="key"
                    actionButton={() => setChangePass(true)}
                  />
                )}

                {changePass && (
                  <div>
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
                          // defaultValue={passOneUserData}
                          name="passOneUser"
                          type="password"
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
                          // defaultValue={passTwoUserData}
                          name="passTwoUser"
                          type="password"
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
                  </div>
                )}
              </>
            )}
            <div className={styles._row_buttons} style={{ margin: '70px 0 0 0' }}>
              {/* {!editData && (
                <ButtonComponent
                    label="Cerrar"
                    alt="Cerrar"
                    typeButton="cancel"
                    actionButton={() => handleCloseModal()}
                  />
              )} */}
              {editData && (
                <>
                  <ButtonComponent
                    label="Cancelar"
                    alt="Cancelar"
                    typeButton="cancel"
                    actionButton={() => setEditData(false)}
                    // actionButton={() => handleCloseModal()}
                  />
                  <ButtonComponent label="Guardar" type="submit" alt="Guardar" />
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
