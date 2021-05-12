import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import { GetDataDashboardTable, GetDataDashboardTableUsers } from '../../utils/createCarRequestAll';

import styles from './tableDashboardUsers.module.css';

const TableDashboardUsers = ({ handleModal }) => {
  const pathUrl = useLocation();
  const history = useHistory();
  const query = new URLSearchParams(pathUrl.search);
  const skip = parseInt(query.get('skip')) || 0;
  const limit = parseInt(query.get('limit')) || 5;
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

  const Row = ({ _id, name, email, telefono, role, updatedAt }) => (
    <div className={styles._table_body_info}>
      <div className={`${styles._table_tr_info} ${styles._table_tr_id_data}`}>{_id}</div>
      <div className={`${styles._table_tr_info} ${styles._table_tr_principal_data}`}>{name}</div>
      <div className={styles._table_tr_info}>{email}</div>
      <div className={styles._table_tr_info}>{telefono}</div>
      <div className={styles._table_tr_info} style={{ flexGrow: '0.6' }}>{role}</div>
      {/* {company && <div className={styles._table_tr_info}>{company}</div>} */}
      <div className={styles._table_tr_info} style={{ flexGrow: '0.6' }}>{formatDate(updatedAt)}</div>
      <button
        className={styles._table_tools_button}
        title="Herramientas de edición"
        onClick={() => handleModal()}
      >
        <FontAwesomeIcon icon="ellipsis-v" />
      </button>
    </div>
  );

  useEffect(() => {
    console.log('dataTable :', dataTable);
  }, [dataTable]);

  const rows =
    dataTable &&
    dataTable.map((rowData, index) => <Row {...rowData} key={index} />);

  return (
    <>
      <div className={styles._table_container}>
        {/* <Modal modalObject="editCarProfile" handleCloseModal={handleModal} /> */}

        <div className={styles._table_row}>
          <div className={styles._table_search}>
            <input
              type="text"
              className={styles._table_search_input}
              placeholder="Busca un coche"
            />
            <select type="text" className={styles._table_select_results} onChange={limitResults}>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="50">50</option>
            </select>

            <div className={styles.table}>
              <div className={styles.header}>
                <div onClick={() => sortBy('id')} style={{ flexGrow: '0.6' }}>
                  ID
                </div>
                <div onClick={() => sortBy('nombre')}>Nombre</div>
                <div onClick={() => sortBy('email')}>Email</div>
                <div onClick={() => sortBy('telefono')}>Teléfono</div>
                <div onClick={() => sortBy('role')} style={{ flexGrow: '0.6' }}>Role</div>
                {/* {company && <div className={styles._table_tr_info}>{company}</div>} */}
                <div onClick={() => sortBy('createdAt')} style={{ paddingRight: '30px', flexGrow: '0.6' }}>
                  Creación
                </div>
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
              // ref={nextButtonRef}
              className={styles._button_navPages}
              onClick={handlePageNext}
              title="Siguiente Página"
              // disabled={skip === 0}
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

export default TableDashboardUsers;
