import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import {
  GetAllRentingsOffers,
  GetDataDashboardTable,
  GetDataDashboardTableUsers,
  GetDataUser,
  GetDataVersionTable,
  GetMyRentingsOffers,
} from '../../../utils/dashBoardCalls';
import ButtonComponent from '../../pureComponents/buttonComponent';

import styles from '../tablesDashboard.module.css';

const TableDashboardMyRentings = ({ dataProvider, handleModal, update }) => {

  const { _id } = dataProvider || {};

  console.log('dataProvider  =>  ', _id);

  const pathUrl = useLocation();
  const history = useHistory();
  const query = new URLSearchParams(pathUrl.search);
  const skip = parseInt(query.get('skip')) || 0;
  const limit = parseInt(query.get('limit')) || 10;
  const dir = query.get('dir') || 'asc';
  const sort = query.get('sort');

  const [dataTable, setDataTable] = useState([]);

  
  useEffect(() => {
    console.log('dataTable  => ', dataTable);
  }, [dataTable]);

  useEffect(() => {
    let dataProviderID = _id;
    const queryGetData = { sort, dir, skip, limit };
    GetMyRentingsOffers({ queryGetData, dataProviderID, onSuccess: setDataTable });
  }, [pathUrl]);

  useEffect(() => {
    let dataProviderID = _id;
    GetMyRentingsOffers({ dataProviderID, onSuccess: setDataTable });
  }, [dataProvider]);

  useEffect(() => {
    let dataProviderID = _id;
    GetMyRentingsOffers({ dataProviderID, onSuccess: setDataTable });
  }, [update]);

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

  const Row = ({ _id, version, time, km, price, provider, position }) => (
    <div className={`${styles._table_body_info} ${position % 2 !== 0 && styles._table_row_back}`}>
      <div className={`${styles._table_tr_info} ${styles._table_tr_principal_data}`}>
        {version?.brand.brandname}
      </div>
      <div className={`${styles._table_tr_info}`}>{version?.model.modelname}</div>
      <div className={`${styles._table_tr_info}`}>
        {/* <div className={`${styles._table_tr_info} ${styles._table_tr_big_data}`}> */}
        {version?.version}
      </div>
      <div className={`${styles._table_tr_info}`}>{time}</div>
      <div className={`${styles._table_tr_info}`}>{km}</div>
      <div className={`${styles._table_tr_info}`}>{price}</div>
      <button
        className={styles._table_tools_button}
        title="Herramientas de edición"
        onClick={() => handleModal(_id)}
      >
        <FontAwesomeIcon icon="ellipsis-v" />
      </button>
    </div>
  );

  const rows =
    dataTable &&
    dataTable.elements?.map((rowData, index) => {
      let totalRowData = { ...rowData, position: index };
      return <Row {...totalRowData} key={index} />;
    });

  return (
    <>
      <div className={styles._table_container}>
        <h1 className={styles._title_table}>Gestión de Rentings</h1>

        <div className={styles._table_row}>
          <div className={styles._table_search}>
            <div className={styles._title_group}>
              <div className={styles._boxElements}>
                <input
                  type="text"
                  className={styles._table_search_input}
                  placeholder="Busca un renting"
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
                    label="Crear renting"
                    alt="Crear renting"
                    typeButton="ok"
                    actionButton={() => handleModal()}
                  />
                </div>
              </div>
            </div>

            <div className={styles.table}>
              <div className={styles.header}>
                <div onClick={() => sortBy('brandname')}>Marca</div>
                <div onClick={() => sortBy('modelname')}>Modelo</div>
                <div onClick={() => sortBy('version')}>Versión</div>
                <div onClick={() => sortBy('time')}>Duración</div>
                <div onClick={() => sortBy('km')}>Km</div>
                <div onClick={() => sortBy('price')}>Precio</div>
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
              disabled={dataTable.totalElements - skip < limit}
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

export default TableDashboardMyRentings;
