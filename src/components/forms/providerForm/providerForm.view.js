import React, { useState, useEffect } from 'react';
import useWindowSize from '../../../constants/useWindowSize';

import stylesPure from '../../pureComponents/pureComponents.module.css';

import ProviderIcon from '../../assets/provider.gif';

import styles from '../forms.module.css';

import { useForm } from 'react-hook-form';
import {
  CreateCarRequestAll,
  GetDataCarProfile,
  GetDataDashboardTableUsers,
  GetDataDashboardTableUserProvider,
  EditProvider,
  NewProvider,
} from '../../../utils/dashBoardCalls';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ButtonComponent from '../../pureComponents/buttonComponent/buttonComponent.view';
import InputComponent from '../../pureComponents/inputComponent/index';

const ProviderForm = ({ toEdit, handleModal, systemMessage }) => {
  const [dataToEdit, setDataToEdit] = useState({});
  const [dataToEditUser, setDataToEditUser] = useState({});
  const [dataToEditCompany, setDataToEditCompany] = useState({});

  const [newProvider, setNewProvider] = useState(false);

  const { name: nameEditUser, email: emailEditUser } = dataToEditUser;
  const { email, phone, companyname, address, web } = dataToEditCompany;

  useEffect(() => {
    if (toEdit) {
      GetDataDashboardTableUserProvider({ toEdit, onSuccess: setDataToEdit });
      setNewProvider(false);
    } else {
      setEditData(true);
      setNewProvider(true);
    }
  }, []);

  useEffect(() => {
    setDataToEditUser({ ...dataToEditUser, name: dataToEdit.name, email: dataToEdit.email });

    // let { companyname, email, phone, address, web } = dataToEdit.provider;
    setDataToEditCompany({
      ...dataToEditCompany,
      _id: dataToEdit.provider?._id,
      companyname: dataToEdit.provider?.companyname,
      email: dataToEdit.provider?.email,
      phone: dataToEdit.provider?.phone,
      address: dataToEdit.provider?.address,
      web: dataToEdit.provider?.web,
    });
  }, [dataToEdit]);

  const windowSize = useWindowSize();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();


  const _handleSuccess = (type) => {
    handleEdit();
    handleModal();
    if (type !== 'new') {
      systemMessage({ message: 'Usuario actualizado correctamente', typeAlert: 'ok' });
    } else {
      systemMessage({ message: 'Usuario creado correctamente', typeAlert: 'ok' });
    }
  };

  const onSubmit = (data) => {
    const dataAPI = data;
    if (newProvider) {
      NewProvider({
        dataAPI,
        onSuccess: () => _handleSuccess('new'),
        onError: () =>
          systemMessage({ message: 'No se ha podido crear el proveedor', typeAlert: 'error' }),
      });
    } else {
      const toEdit = dataToEditCompany?._id;
      EditProvider({
        toEdit,
        dataAPI,
        onSuccess: () => _handleSuccess('edit'),
        onError: () =>
          systemMessage({ message: 'No se ha podido editar el proveedor', typeAlert: 'error' }),
      });
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
              <img src={ProviderIcon} className={styles._icon_title} alt="" />
              <span className={styles._title}>
                {editData && !newProvider && 'Editar proveedor'}
                {editData && newProvider && 'Nuevo proveedor'}
                {!editData && !newProvider && 'Información del proveedor'}
              </span>
            </div>

            <div className={styles._boxElements}>
              <div
                className={styles._row_buttons}
                style={{ display: 'flex', justifyContent: 'flex-end' }}
              >
                {!editData && (
                  <ButtonComponent
                    label="Editar proveedor"
                    alt="Editar proveedor"
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
              {!editData && !newProvider && (
                <>
                  <div className={styles._boxElements}>
                    <label className={styles._label_show_info}>Nombre</label>
                    <h3 className={styles._show_info}>{nameEditUser}</h3>
                  </div>

                  <div className={styles._boxElements}>
                    <label className={styles._label_show_info}>Email del usuario</label>
                    <h3 className={styles._show_info}>{emailEditUser}</h3>
                  </div>
                </>
              )}
            </div>

            <h2 className={styles._tittle}>Información de la empresa</h2>

            <div
              className={`${windowSize !== 'sm' && styles._row3_xlg}
    ${windowSize === 'sm' && styles._row3_sm}  
    `}
            >
              <div className={styles._boxElements}>
                {editData ? (
                  <InputComponent
                    {...register('companyname', { required: 'Nombre de la compañía requerido' })}
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
                    {...register('email', {
                      required: 'Email de la compañía requerido',
                    })}
                    refs={email}
                    label="Email de la compañía"
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

            <div className={styles._row_buttons}>
              {editData && !newProvider && (
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
              {editData && newProvider && (
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
                    }}
                  />
                </>
              )}
              {!editData && !newProvider && (
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

export default ProviderForm;
