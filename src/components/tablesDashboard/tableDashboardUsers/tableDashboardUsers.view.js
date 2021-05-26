import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import {
  GetDataDashboardTable,
  GetDataDashboardTableUsers,
} from '../../../utils/createCarRequestAll';
import ButtonComponent from '../../pureComponents/buttonComponent';

import styles from '../tablesDashboard.module.css';

const TableDashboardProviders = ({ handleModal }) => {
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
  // const sortBy = (key) => {
  //   query.set('sort', key);
  //   history.push({ search: query.toString() });
  // };

  const [dataTable, setDataTable] = useState([]);

  // useEffect(() => {
  //   const queryGetData = { sort, dir, skip, limit };
  //   GetDataDashboardTable({ queryGetData, onSuccess: setDataTable });
  // }, [pathUrl]);

  useEffect(() => {
    GetDataDashboardTableUsers({ onSuccess: setDataTable });
  }, []);

  const formatDate = (updatedAt) => {
    let fecha = updatedAt.split('T')[0];
    fecha = fecha.split('-');
    const dateFormated = fecha.reverse().join(' - ');
    return dateFormated;
  };

  const Row = ({ _id, name, email, updatedAt }) => (
    <div className={styles._table_body_info}>
      <div className={`${styles._table_tr_info} ${styles._table_tr_id_data}`}>{_id}</div>
      <div className={`${styles._table_tr_info} ${styles._table_tr_principal_data}`}>{name}</div>
      <div className={`${styles._table_tr_info}`}>{email}</div>
      <div className={`${styles._table_tr_info}`}>{formatDate(updatedAt)}</div>
      <button
        className={styles._table_tools_button}
        title="Herramientas de edición"
        onClick={() => handleModal(_id)}
      >
        <FontAwesomeIcon icon="ellipsis-v" />
      </button>
    </div>
  );

  useEffect(() => {
    console.log('dataTable :', dataTable);
  }, [dataTable]);

  const usuarios = dataTable && dataTable.filter((usersData) => usersData.role === 'user');
  const rows = usuarios && usuarios.map((rowData, index) => <Row {...rowData} key={index} />);

  return (
    <>
      <div className={styles._table_container}>
        <h1 className={styles._title_table}>Gestión de Usuarios Clientes</h1>

        <div className={styles._table_row}>
          <div className={styles._table_search}>
            <div className={styles._title_group}>
              <div className={styles._boxElements}>
                <input
                  type="text"
                  className={styles._table_search_input}
                  placeholder="Busca un usuario"
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
                >
                  <ButtonComponent
                    label="Crear Usuario"
                    alt="Crear Usuario"
                    typeButton="ok"
                    actionButton={() => handleModal()}
                  />
                </div>
              </div>
            </div>

            <div className={styles.table}>
              <div className={styles.header}>
                <div onClick={() => sortBy('id')}>
                  ID
                </div>
                <div onClick={() => sortBy('nombre')}>Nombre</div>
                <div onClick={() => sortBy('email')}>Email</div>
                <div onClick={() => sortBy('createdAt')}>Creación</div>
              </div>
              <div className={styles._body_data}>{rows}</div>
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
              disabled={dataTable.totalPages % limit === 0 || limit > dataTable.totalPages}
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

export default TableDashboardProviders;
