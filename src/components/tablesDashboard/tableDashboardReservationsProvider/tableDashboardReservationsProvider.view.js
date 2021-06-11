import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import { GetReservationsProvider, GetDataUser } from '../../../utils/dashBoardCalls';

import styles from '../tablesDashboard.module.css';
import { ReactComponent as NoReservation } from '../../assets/noReservation.svg';

const TableDashboardReservationsProvider = ({ dataProvider, handleModal, update }) => {
  const [loggedInUser, setLoggedInUser] = useState();
  const [dataUser, setDataUser] = useState({});
  const [dataToEdit, setDataToEdit] = useState({});
  const [dataTable, setDataTable] = useState([]);

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

  const { idUser } = dataUser || {};
  const _id = dataToEdit?.provider?._id;

  useEffect(() => {
    if (_id !== undefined) {
      let dataProviderID = _id;
      GetReservationsProvider({ dataProviderID, onSuccess: setDataTable });
    }
  }, [_id]);

  useEffect(() => {
    if (_id !== undefined) {
      let dataProviderID = _id;
      GetReservationsProvider({ dataProviderID, onSuccess: setDataTable });
    }
  }, [update]);


  const pathUrl = useLocation();
  const history = useHistory();
  const query = new URLSearchParams(pathUrl.search);
  const skip = parseInt(query.get('skip')) || 0;
  const limit = parseInt(query.get('limit')) || 10;
  const dir = query.get('dir') || 'asc';
  const sort = query.get('sort');



  const handlePagePrev = () => {
    query.set('skip', skip - limit);
    history.push({ search: query.toString() });
  };
  const handlePageNext = () => {
    query.set('skip', skip + limit);
    history.push({ search: query.toString() });
  };
  const limitResults = (e) => {
    query.set('limit', e.target.value);
    history.push({ search: query.toString() });
  };
  const sortBy = (key) => {
    query.set('sort', key);
    if (dir === 'asc') {
      query.set('dir', 'desc');
    } else {
      query.set('dir', 'asc');
    }

    history.push({ search: query.toString() });
  };

  const Row = ({ _id, user, rentingoffer, position }) => {
    let brand = rentingoffer?.version?.brand?.brandname;
    let model = rentingoffer?.version?.model?.modelname;
    let version = rentingoffer?.version?.version;
    let price = rentingoffer?.price;

    return (
      <div className={`${styles._table_body_info} ${position % 2 !== 0 && styles._table_row_back}`}>
        <div className={`${styles._table_tr_info}`}>{user.name}</div>
        <div className={`${styles._table_tr_info} ${styles._table_tr_principal_data}`}>{brand}</div>
        <div className={`${styles._table_tr_info}`}>{model}</div>
        <div className={`${styles._table_tr_info} ${styles._table_tr_big_data}`}>{version}</div>
        <div className={`${styles._table_tr_info}`}>
          <strong>{price}</strong>
        </div>
        <button
          className={styles._table_tools_button}
          title="Herramientas de edición"
          onClick={() => handleModal(_id)}
        >
          <FontAwesomeIcon icon="ellipsis-v" />
        </button>
      </div>
    );
  };

  const rows =
    dataTable &&
    dataTable?.map((rowData, index) => {
      let totalRowData = { ...rowData, position: index };
      return <Row {...totalRowData} key={index} />;
    });

  return (
    <>
      <div className={styles._table_container}>
        <h1 className={styles._title_table}>Gestión de Reservas</h1>

        <div className={styles._table_row}>
          <div className={styles._table_search}>
            <div className={styles._title_group}>
              <div className={styles._boxElements}>
                <input
                  type="text"
                  className={styles._table_search_input}
                  placeholder="Busca una reserva"
                />
                <select
                  type="text"
                  className={styles._table_select_results}
                  onChange={limitResults}
                >
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="50">50</option>
                </select>
              </div>

              <div className={styles._boxElements}>
                <div
                  className={styles._row_buttons}
                  style={{ display: 'flex', justifyContent: 'flex-end' }}
                ></div>
              </div>
            </div>

            <div className={styles.table}>
              <div className={styles.header}>
                <div onClick={() => sortBy('name')}>Cliente</div>
                <div onClick={() => sortBy('brandname')}>Marca</div>
                <div onClick={() => sortBy('modelname')}>Modelo</div>
                <div onClick={() => sortBy('version')} className={`${styles._table_tr_big_data}`}>
                  Versión
                </div>
                <div onClick={() => sortBy('price')}>Mensualidad</div>
              </div>
              <div className={styles._body_data}>{rows}</div>
              {dataTable?.length === 0 && (
                <h4 className={styles._title_table_no_results}>
                  <NoReservation className={styles._icon_no_results} />
                  <span>Aún no tiene reservas</span>
                </h4>
              )}
            </div>
          </div>
          <div className={styles._row_button_pages}>
            <button
              refs="prevButtonRef"
              className={styles._button_navPages}
              onClick={handlePagePrev}
              title="Página Anterior"
              disabled={skip === 0}
            >
              <FontAwesomeIcon icon="chevron-left" className={styles._button_navPages_icon} />
              Anterior
            </button>
            <button
              className={styles._button_navPages}
              onClick={handlePageNext}
              title="Página Siguiente"
              disabled="true"
              // disabled={dataTable.totalElements - skip < limit}
            >
              Siguiente
              <FontAwesomeIcon icon="chevron-right" className={styles._button_navPages_icon} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableDashboardReservationsProvider;
