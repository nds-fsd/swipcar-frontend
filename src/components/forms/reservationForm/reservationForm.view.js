import React, { useState, useEffect } from 'react';
import useWindowSize from '../../../constants/useWindowSize';
import { GetReservation, DeleteReservation } from '../../../utils/dashBoardCalls';

import styles from '../forms.module.css';
import { ReactComponent as Reservation } from '../../assets/reservation.svg';
import ButtonComponent from '../../pureComponents/buttonComponent/buttonComponent.view';

import { ReactComponent as Exclamation } from '../../assets/engineExclamation.svg';
import { ReactComponent as Email } from '../../assets/email.svg';

const ReservationForm = ({ toEdit, handleModal, updateSuccess, systemMessage }) => {
  const [dataToEdit, setDataToEdit] = useState({});
  const [deleteReservation, setDeleteReservation] = useState(false);

  useEffect(() => {
    GetReservation({ toEdit, onSuccess: setDataToEdit });
  }, []);


  const windowSize = useWindowSize();

  const { _id, user, rentingoffer } = dataToEdit || {};
  const { version, time, km, price, provider } = rentingoffer || {};
  const { brand, model } = version || {};

  const _handleShowDelete = () => {
    setDeleteReservation(!deleteReservation);
  };

  const _handleSuccessDelete = (res) => {
    _handleShowDelete();
    handleModal();
    systemMessage({
      message: 'Reserva eliminada correctamente',
      typeAlert: 'ok',
    });
    updateSuccess(res);
  };

  const _handleDelete = (reservationId, userId, providerId) => {
    DeleteReservation({
      reservationId,
      userId,
      providerId,
      onSuccess: (res) => _handleSuccessDelete(res),
      onError: () =>
        systemMessage({
          message: 'No se ha podido eliminar esta reserva',
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
              <Reservation className={styles._icon_title} alt="Reservas Renting" />
              <span className={styles._title}>Información de la reserva</span>
            </div>

            <div className={styles._boxElements}>
              <div
                className={styles._row_buttons}
                style={{ display: 'flex', justifyContent: 'flex-end' }}
              >
                {!deleteReservation && (
                  <ButtonComponent
                    label="Eliminar Reserva"
                    alt="Eliminar Reserva"
                    typeButton="ok"
                    actionButton={() => _handleShowDelete()}
                  />
                )}
              </div>
            </div>
          </div>

          {deleteReservation && (
            <>
              <div className={styles._confirm_delete}>
                <h2 className={styles._title_confirm}>
                  <Exclamation className={styles._icon_svg} />
                  <span>¿Confirma que desea eliminar esta reserva?</span>
                </h2>
                <div style={{ display: 'flex' }}>
                  <ButtonComponent
                    label="Cancelar"
                    alt="Cancelar"
                    typeButton="cancelWarning"
                    actionButton={() => _handleShowDelete()}
                  />
                  <ButtonComponent
                    label="Eliminar reserva"
                    alt="Eliminar reserva"
                    typeButton="okWarning"
                    actionButton={() => _handleDelete(_id, user?._id, provider?._id)}
                  />
                </div>
              </div>
            </>
          )}

          <div
            className={`${windowSize !== 'sm' && styles._row3_xlg}
    ${windowSize === 'sm' && styles._row3_sm}  
    `}
          >
            <div className={styles._boxElements}>
              <label className={styles._label_show_info}>Nombre del cliente</label>
              <h3 className={styles._show_info}>{user?.name}</h3>
            </div>
            <div className={styles._boxElements}>
              <label className={styles._label_show_info}>Email del cliente</label>
              <h3 className={styles._show_info}>
                {user?.email}{' '}
                <a
                  href={`mailto:${user?.email}?cc=administracion@ecocars.com&subject=ECOCARS: Información del estado de su reserva&body=El renting que usted solicitó está siendo tramitado`}
                  title="Contactar con el cliente"
                  className={styles._icon_form_button}
                >
                  <Email />
                </a>
              </h3>
            </div>
          </div>

          <h2 className={styles._tittle}>Información de la reserva</h2>

          <div
            className={`${windowSize !== 'sm' && styles._row3_xlg}
    ${windowSize === 'sm' && styles._row3_sm}  
    `}
          >
            <div className={styles._boxElements}>
              <label className={styles._label_show_info}>Marca</label>
              <h3 className={styles._show_info}>{brand?.brandname}</h3>
            </div>
            <div className={styles._boxElements}>
              <label className={styles._label_show_info}>Modelo</label>
              <h3 className={styles._show_info}>{model?.modelname}</h3>
            </div>
            <div className={styles._boxElements}>
              <label className={styles._label_show_info}>Versión</label>
              <h3 className={styles._show_info}>{version?.version}</h3>
            </div>
          </div>

          <div
            className={`${windowSize !== 'sm' && styles._row3_xlg}
    ${windowSize === 'sm' && styles._row3_sm}  
    `}
          >
            <div className={styles._boxElements}>
              <label className={styles._label_show_info}>Kilómetros</label>
              <h3 className={styles._show_info}>
                {km} <span className={styles._units}>Km anuales</span>
              </h3>
            </div>
            <div className={styles._boxElements}>
              <label className={styles._label_show_info}>Duración del renting</label>
              <h3 className={styles._show_info}>
                {time} <span className={styles._units}>meses</span>
              </h3>
            </div>
            <div className={styles._boxElements}>
              <label className={styles._label_show_info}>Precio</label>
              <h3 className={styles._show_info}>
                {price} <span className={styles._units}>€ mensuales</span>
              </h3>
            </div>
          </div>

          <div className={styles._row_buttons}>
            <ButtonComponent
              label="Cerrar"
              alt="Cerrar"
              typeButton="cancel"
              actionButton={() => handleModal()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationForm;
