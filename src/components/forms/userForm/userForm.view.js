import React, { useState, useEffect } from 'react';
import useWindowSize from '../../../constants/useWindowSize';

import stylesPure from '../../pureComponents/pureComponents.module.css';

import UserIcon from '../../assets/userIcon.gif';

import styles from '../forms.module.css';

import { useForm } from 'react-hook-form';
import {
  CreateCarRequestAll,
  GetDataCarProfile,
  GetDataDashboardTableUsers,
  GetDataDashboardTableUserProvider,
  EditUser,
  NewUser,
} from '../../../utils/createCarRequestAll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ButtonComponent from '../../pureComponents/buttonComponent/buttonComponent.view';
import InputComponent from '../../pureComponents/inputComponent/index';

const UserForm = ({ toEdit, handleCloseModal }) => {
  const [dataToEdit, setDataToEdit] = useState({});

  const [newUser, setNewUser] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  const [changePass, setChangePass] = useState(false);

  useEffect(() => {
    if (toEdit) {
      console.log('toEdit   :  ', toEdit);
      GetDataDashboardTableUserProvider({ toEdit, onSuccess: setDataToEdit });
      setNewUser(false);
    } else {
      setEditData(true);
      setNewUser(true);
    }
  }, []);

  const passOneWatch = watch('passOneUser');
  const passTwoWatch = watch('passTwoUser');

  const windowSize = useWindowSize();

  const { name, email, passOneUser, passTwoUser } = dataToEdit;

  const onSubmit = (data) => {
    if (passOneWatch !== passTwoWatch) {
      alert('Las contraseñas no coinciden!!');
    }
    const dataAPI = data;
    if (newUser) {
      NewUser({ dataAPI, onSuccess: () => handleCloseModal() });
    } else {
      EditUser({ toEdit, dataAPI, onSuccess: () => handleCloseModal() });
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
              <img src={UserIcon} className={styles._icon_title} alt="" />
              <span className={styles._title}>
                {editData && !newUser && 'Editar Usuario'}
                {editData && newUser && 'Nuevo usuario'}
                {!editData && !newUser && 'Información del usuario'}
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
                    {...register('name', { required: 'Nombre requerido' })}
                    refs={name}
                    label="Introduce una nombre"
                    placeholder="Nombre"
                    defaultValue={name}
                    name="name"
                    type="text"
                  />
                ) : (
                  <>
                    <label className={styles._label_show_info}>Nombre</label>
                    <h3 className={styles._show_info}>{name}</h3>
                  </>
                )}
                {errors.name && (
                  <p className={stylesPure._error_label}>
                    <span className={stylesPure._error_label_icon}>
                      <FontAwesomeIcon icon="exclamation-triangle" />
                    </span>
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className={styles._boxElements}>
                {editData ? (
                  <InputComponent
                    {...register('email', { required: 'Email de contacto requerido' })}
                    refs={email}
                    label="Introduce un email"
                    placeholder="Email"
                    defaultValue={email}
                    name="email"
                    type="email"
                  />
                ) : (
                  <>
                    <label className={styles._label_show_info}>Teléfono</label>
                    <h3 className={styles._show_info}>{email}</h3>
                  </>
                )}
                {errors.email && (
                  <p className={stylesPure._error_label}>
                    <span className={stylesPure._error_label_icon}>
                      <FontAwesomeIcon icon="exclamation-triangle" />
                    </span>
                    {errors.email.message}
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

            <div className={styles._row_buttons}>
              {editData && !newUser && (
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
                    }}
                  />
                </>
              )}
              {editData && newUser && (
                <>
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
                    }}
                  />
                </>
              )}
              {!editData && !newUser && (
                <ButtonComponent
                  label="Cerrar"
                  alt="Cerrar"
                  typeButton="cancel"
                  actionButton={() => handleCloseModal()}
                />
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
