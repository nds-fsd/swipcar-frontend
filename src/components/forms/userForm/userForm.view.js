import React, { useState, useEffect } from 'react';
import useWindowSize from '../../../constants/useWindowSize';

import stylesPure from '../../pureComponents/pureComponents.module.css';

import UserIcon from '../../assets/userIcon.gif';

import styles from '../forms.module.css';

import { useForm } from 'react-hook-form';
import { UpdateUserProvider, GetDataUser, UpdateUser } from '../../../utils/dashBoardCalls';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ButtonComponent from '../../pureComponents/buttonComponent/buttonComponent.view';
import InputComponent from '../../pureComponents/inputComponent/index';

const UserForm = ({ systemMessage }) => {
  const [loggedInUser, setLoggedInUser] = useState();
  const [dataUser, setDataUser] = useState({});
  const [dataToEdit, setDataToEdit] = useState({});

  useEffect(() => {
    const authorizedUser = localStorage.getItem('user-session');
    if (authorizedUser) {
      const activeUser = JSON.parse(authorizedUser);
      setLoggedInUser(activeUser);
    }
  }, []);
  useEffect(() => {
    if (loggedInUser) {
      setDataUser({ idUser: loggedInUser.user.id, roleUser: loggedInUser.user.role });
    }
  }, [loggedInUser]);

  useEffect(() => {
    if (idUser !== undefined) {
      GetDataUser({ idUser, onSuccess: setDataToEdit });
    }
  }, [dataUser]);

  const { idUser, roleUser } = dataUser || {};

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const windowSize = useWindowSize();

  const [editData, setEditData] = useState(false);
  const handleEdit = () => {
    setEditData(!editData);
  };

  const _handleSuccess = (res) => {
    GetDataUser({ idUser, onSuccess: setDataToEdit });
    handleEdit();
    systemMessage({ message: 'Usuario actualizado correctamente', typeAlert: 'ok' });
  };

  const { _id: idUserData, name, email, provider } = dataToEdit || {};
  const { _id: idProviderData, companyname, email: emailEmpresa, address, phone, web } =
    provider || {};

  const onSubmit = (data) => {
    const userData = { _id: idUserData, name: data.name, email: data.email };
    const providerData = {
      _id: idProviderData,
      companyname: data.companyname,
      email: data.emailEmpresa,
      address: data.address,
      phone: data.phone,
      web: data.web,
    };

    if (roleUser && roleUser === 'provider') {
      UpdateUserProvider({
        userData,
        providerData,
        onSuccess: (res) => _handleSuccess(res),
        onError: () =>
          systemMessage({
            message: ' No se ha podido actualizar correctamente',
            typeAlert: 'error',
          }),
      });
    } else {
      UpdateUser({
        userData,
        onSuccess: (res) => _handleSuccess(res),
        onError: () =>
          systemMessage({
            message: ' No se ha podido actualizar correctamente',
            typeAlert: 'error',
          }),
      });
    }
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

            {roleUser && roleUser === 'provider' && (
              <>
                <h2 className={styles._tittle}>Información de proveedor</h2>

                <div
                  className={`${windowSize !== 'sm' && styles._row3_xlg}
${windowSize === 'sm' && styles._row3_sm}  
`}
                >
                  <div className={styles._boxElements}>
                    {editData ? (
                      <InputComponent
                        {...register('companyname', {
                          required: 'Nombre de la compañía requerido',
                        })}
                        refs={companyname}
                        label="Introduce una compaía"
                        placeholder="Compañía"
                        defaultValue={companyname}
                        name="companyname"
                        type="text"
                      />
                    ) : (
                      <>
                        <label className={styles._label_show_info}>Nombre de la compañía</label>
                        <h3 className={styles._show_info}>{companyname}</h3>
                      </>
                    )}
                    {errors.companyname && (
                      <p className={stylesPure._error_label}>
                        <span className={stylesPure._error_label_icon}>
                          <FontAwesomeIcon icon="exclamation-triangle" />
                        </span>
                        {errors.companyname.message}
                      </p>
                    )}
                  </div>

                  <div className={styles._boxElements}>
                    {editData ? (
                      <InputComponent
                        {...register('phone', { required: 'Teléfono de contacto requerido' })}
                        refs={phone}
                        label="Introduce un teléfono de contacto"
                        placeholder="Teléfono"
                        defaultValue={phone}
                        name="phone"
                        type="number"
                      />
                    ) : (
                      <>
                        <label className={styles._label_show_info}>Teléfono</label>
                        <h3 className={styles._show_info}>{phone}</h3>
                      </>
                    )}
                    {errors.phone && (
                      <p className={stylesPure._error_label}>
                        <span className={stylesPure._error_label_icon}>
                          <FontAwesomeIcon icon="exclamation-triangle" />
                        </span>
                        {errors.phone.message}
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
                        {...register('emailEmpresa', {
                          required: 'Email de la compañía requerido',
                        })}
                        refs={emailEmpresa}
                        label="Email de la compañía"
                        placeholder="Email"
                        defaultValue={emailEmpresa}
                        name="emailEmpresa"
                        type="email"
                      />
                    ) : (
                      <>
                        <label className={styles._label_show_info}>Email</label>
                        <h3 className={styles._show_info}>{emailEmpresa}</h3>
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

                  <div className={styles._boxElements}>
                    {editData ? (
                      <InputComponent
                        {...register('web', { required: 'Web de la compañía requerido' })}
                        refs={web}
                        label="Web de la compañía"
                        placeholder="Web"
                        defaultValue={web}
                        name="web"
                        type="text"
                      />
                    ) : (
                      <>
                        <label className={styles._label_show_info}>Web</label>
                        <h3 className={styles._show_info}>{web}</h3>
                      </>
                    )}
                    {errors.web && (
                      <p className={stylesPure._error_label}>
                        <span className={stylesPure._error_label_icon}>
                          <FontAwesomeIcon icon="exclamation-triangle" />
                        </span>
                        {errors.web.message}
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
                        {...register('address', { required: 'Dirección de la compañía requerido' })}
                        refs={address}
                        label="Dirección de la compañía"
                        placeholder="Dirección"
                        defaultValue={address}
                        name="address"
                        type="text"
                      />
                    ) : (
                      <>
                        <label className={styles._label_show_info}>Dirección</label>
                        <h3 className={styles._show_info}>{address}</h3>
                      </>
                    )}
                    {errors.address && (
                      <p className={stylesPure._error_label}>
                        <span className={stylesPure._error_label_icon}>
                          <FontAwesomeIcon icon="exclamation-triangle" />
                        </span>
                        {errors.address.message}
                      </p>
                    )}
                  </div>
                </div>
              </>
            )}

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

export default UserForm;
