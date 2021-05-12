import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styles from './carListPage.module.css';
import useWindowSize from '../../constants/useWindowSize';
import FilterButton from '../../components/filter/filterButton/filterButton.view';
import Filter from '../../components/filter/filter.view';
//import SlideFilter from '../../components/filter/slideFilter.view';
import Tab from '../../components/tabs/tab.view';
import CarList from '../../components/carLists/carList.view';

import { newRequest } from '../../utils/newRequest';
import { carsLengthRequest } from '../../utils/carsLengthRequest';

const CarsListPage = () => {
  // const [openSlideFilter, setOpenSlideFilter] = useState(true);
  const windowSize = useWindowSize();
  const [openFilter, setOpenFilter] = useState(false);
  const location = useLocation();
  const [tabQuery, setTabQuery] = useState(location.search);
  const [listOfCars, setListOfCars] = useState([]);
  const [numOfCars, setNumOfCars] = useState([]);
  const [numOfNewCars, setNumOfNewCars] = useState([]);
  const [numOfUsedCars, setNumOfUsedCars] = useState([]);
  const [numOfVanCars, setNumOfVanCars] = useState([]);
  const [fuelSort, setFuelSort] = useState('');

  const history = useHistory();

  const handleTabSort = (tab) => {
    switch (tab) {
      case 'todos':
        setTabQuery('');
        history.push('/renting');
        break;
      case 'nuevos':
        setTabQuery('?nuevo=true');
        history.push(`/renting?nuevo=true${query2}`);
        break;
      case 'seminuevos':
        setTabQuery('?seminuevo=true');
        history.push('/renting?seminuevo=true');
        break;
      case 'furgonetas':
        setTabQuery('?furgoneta=true');
        history.push('/renting?furgoneta=true');
        break;
      default:
        setTabQuery('');
        history.push('/renting?search');
        break;
    }
  };

  console.log('fuelSortXX: ', fuelSort);
  const query2 = `&&fueltype=${fuelSort}`;

  useEffect(() => {
    newRequest({
      url: `/carprofile/search${tabQuery}`,
      method: 'POST',
      onSuccess: setListOfCars,
    });
  }, [tabQuery, location]);
  useEffect(() => {
    carsLengthRequest({ url: '/carprofile/', method: 'GET', onSuccess: setNumOfCars });
  }, []);
  useEffect(() => {
    carsLengthRequest({ url: '/carprofile/newcars', method: 'POST', onSuccess: setNumOfNewCars });
  }, []);
  useEffect(() => {
    carsLengthRequest({ url: '/carprofile/usedcars', method: 'POST', onSuccess: setNumOfUsedCars });
  }, []);
  useEffect(() => {
    carsLengthRequest({ url: '/carprofile/vancars', method: 'POST', onSuccess: setNumOfVanCars });
  }, []);

  return (
    <div className={styles._carlist_page}>
      <div className={styles._scene_container}>
        <div
          className={`${
            windowSize === 'sm'
              ? styles._scene_sorting_container_sm
              : styles._scene_sorting_container
          }`}
        >
          <div
            className={`${
              windowSize === 'md' || windowSize === 'sm' ? styles._title_md : styles._title
            }`}
          >
            Renting de Coches
          </div>
          <div className={styles._tab_container}>
            <Tab tab={'Todos'} num={numOfCars} onItemClick={() => handleTabSort('todos')} />
            <Tab tab={'Nuevos'} num={numOfNewCars} onItemClick={() => handleTabSort('nuevos')} />
            <Tab
              tab={'Seminuevos'}
              num={numOfUsedCars}
              onItemClick={() => handleTabSort('seminuevos')}
            />
            <Tab
              tab={'Furgonetas'}
              num={numOfVanCars}
              onItemClick={() => handleTabSort('furgonetas')}
            />
          </div>
        </div>
        <div className={styles._list_container}>
          <div className={styles._left_list_container}>
            <Filter setFuelSort={setFuelSort} />
          </div>
          <div className={styles._right_list_container}>
            <CarList listOfCars={listOfCars} />
          </div>
        </div>

        {/* {openFilter === true ? <FilterButton setOpenFilter={setOpenFilter} /> : null} */}
        {/*{openSlideFilter === true ? (
              <FilterButton setOpenSlideFilter={setOpenSlideFilter} />
            ) : null} */}
      </div>
    </div>
  );
};

export default CarsListPage;
