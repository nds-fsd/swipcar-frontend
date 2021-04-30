import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import { CreateCarRequestAll, GetDataDashboardTable } from '../../utils/createCarRequestAll';

import styles from './tableDashboard.module.css';

const TableDashboard = ({ stepForm }) => {
  const pathUrl = useLocation();
  const history = useHistory();
  const query = new URLSearchParams(pathUrl.search);
  const skip = parseInt(query.get('skip')) || 0;
  const limit = parseInt(query.get('limit')) || 5;
  const sort = query.get('sort');

  const handlePage = () => {
    query.set('skip', skip + limit);
    history.push({ search: query.toString() });
  };
  const limitResults = (e) => {
    query.set('limit', e.target.value);
    history.push({ search: query.toString() });
  };
  const sortBy = (key) => {
    query.set('sort', key);
    history.push({ search: query.toString() });
  };

  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    const queryGetData = { skip, limit, sort };
    GetDataDashboardTable({ queryGetData, onSuccess: setDataTable });
  }, [pathUrl]);

  useEffect(() => {
    GetDataDashboardTable({ onSuccess: setDataTable });
    // GetDataDashboardTable({ onSuccess: setIncrementalData });
  }, []);

  // useEffect(() => {
  //   console.log('dataTable :', dataTable);
  // }, [dataTable]);

  const formatDate = (updatedAt) => {
    let fecha = updatedAt.split('T')[0];
    fecha = fecha.split('-');
    const dateFormated = fecha.reverse().join(' - ');
    return dateFormated;
  };

  const Row = ({ _id, carCard, version, updatedAt }) => (
    <div className={styles._table_body_info}>
      <div className={`${styles._table_tr_info} ${styles._table_tr_id_data}`}>{_id}</div>
      <div className={`${styles._table_tr_info} ${styles._table_tr_principal_data}`}>
        {carCard.brand.brandname}
      </div>
      <div className={styles._table_tr_info}>{carCard.model.modelname}</div>
      <div className={styles._table_tr_info}>{version}</div>
      <div className={styles._table_tr_info}>{carCard.fuel.fueltype}</div>
      <div className={styles._table_tr_info}>{formatDate(updatedAt)}</div>
      <button className={styles._table_tools_button} title="Herramientas de edición">
        <FontAwesomeIcon icon="ellipsis-v" />
      </button>
    </div>
  );

  const rows = dataTable && dataTable.map((rowData, index) => <Row {...rowData} key={index} />);

  // useEffect(() => {
  //   console.log('dataTable   : ', dataTable);
  // }, []);

  return (
    <>
      <div className={styles._table_container}>
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
                <div onClick={() => sortBy('carBrand')}>Marca</div>
                <div onClick={() => sortBy('carModel')}>Modelo</div>
                <div onClick={() => sortBy('carVersion')}>Versión</div>
                <div onClick={() => sortBy('fueltype')}>Combustible</div>
                <div onClick={() => sortBy('createAt')} style={{ paddingRight: '30px' }}>
                  Creación
                </div>
              </div>
              <div className={styles._body_data}>{rows}</div>
            </div>
          </div>
        </div>
        <div className={styles._table_data}></div>

        <div>
          <button onClick={handlePage}>NEXT PAGE </button>
        </div>
      </div>
    </>
  );
};

export default TableDashboard;
