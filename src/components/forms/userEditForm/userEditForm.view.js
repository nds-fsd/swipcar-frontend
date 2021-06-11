import React, { useState, useEffect } from 'react';
import useWindowSize from '../../../constants/useWindowSize';

import stylesPure from '../../pureComponents/pureComponents.module.css';
import styles from '../forms.module.css';

import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ButtonComponent from '../../pureComponents/buttonComponent/buttonComponent.view';
import InputComponent from '../../pureComponents/inputComponent/index';
import UserIcon from '../../assets/userIcon.gif';

import { EditUser, GetDataUser } from '../../../utils/dashBoardCalls';

const UserEditForm = ({ toEdit, handleModal, systemMessage, updateSuccess }) => {
  const [dataToEdit, setDataToEdit] = useState({});

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  useEffect(() => {
    let idUser = toEdit;
    GetDataUser({ idUser, onSuccess: setDataToEdit });
  }, []);

  const windowSize = useWindowSize();

  const [editData, setEditData] = useState(false);
  const handleEdit = () => {
    setEditData(!editData);
  };

  const _handleSuccess = (res) => {
    handleEdit();
    handleModal();
    updateSuccess(res);
    systemMessage({ message: 'Usuario actualizado correctamente', typeAlert: 'ok' });
  };

  const { _id, name, email } = dataToEdit || {};

  const onSubmit = (data) => {
    const dataAPI = data;
    EditUser({
      toEdit,
      dataAPI,
      onSuccess: (res) => _handleSuccess(res),
      onError: () =>
        systemMessage({
          message: ' No se ha podido actualizar correctamente',
          typeAlert: 'error',
        }),
    });
  };

  return (
    <div className={styles.carlist_page}>
      <div
        className={`${windowSize === 'xlg' && styles.scene_container_xlg} 
      ${windowSize === 'lg' && styles.scene_container_lg}
      ${windowSize === 'md' && styles.scene_container_md} ${styles._no_shadow} ${styles.nav_croll} 
      `}
        style={{ maxHeight: '80vh' }}
      >
        <div className={styles._wrapper}>
          <div className={styles._title_group}>
            <div className={`${styles._boxElements} ${styles._title_group}`}>
              <img src={UserIcon} className={styles._icon_title} alt="" />
              <span className={styles._title}>
                {editData && 'Editar Usuario'}
                {!editData && 'Información del usuario'}
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
                    {...register('name', { required: 'Nombre completo requerido' })}
                    refs={name}
                    label="Introduce su nombre completo"
                    placeholder="Nombre y apellidos"
                    defaultValue={name}
                    name="name"
                    type="text"
                  />
                ) : (
                  <>
                    <label className={styles._label_show_info}>Nombre completo</label>
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
                    <label className={styles._label_show_info}>Email</label>
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

            <div className={styles._row_buttons}>
              {editData && (
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
                    }}
                  />
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserEditForm;
