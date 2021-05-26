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
  // const [openFilter, setOpenFilter] = useState(false);
  const location = useLocation();
  const [tabQuery, setTabQuery] = useState(location.search);
  const [listOfCars, setListOfCars] = useState([]);
  const [numOfCars, setNumOfCars] = useState([]);
  const [numOfNewCars, setNumOfNewCars] = useState([]);
  const [numOfUsedCars, setNumOfUsedCars] = useState([]);
  const [fuelSort, setFuelSort] = useState('');
  const history = useHistory();

  const handleTabSort = (tab) => {
    switch (tab) {
      case 'todos':
        setTabQuery('');
        /* history.push('rentingoffer?newcar=true'); */
        break;
      case 'nuevos':
        setTabQuery('?newcar=true');
        /* history.push('rentingoffer?newcar=false'); */
        break;
      case 'seminuevos':
        setTabQuery('?newcar=false');
        /* history.push('rentingoffer?usedcar=true'); */
        break;
      default:
        setTabQuery('');
        setFuelSort('');
    }
  };

  useEffect(() => {
    newRequest({
      url: `/rentingoffer/search${tabQuery}`,
      method: 'POST',
      onSuccess: setListOfCars,
    });
  }, [tabQuery, location]);

  useEffect(() => {
    carsLengthRequest({ url: '/rentingoffer/', method: 'GET', onSuccess: setNumOfCars });
  }, []);
  useEffect(() => {
    carsLengthRequest({ url: '/rentingoffer/newcars', method: 'POST', onSuccess: setNumOfNewCars });
  }, []);
  useEffect(() => {
    carsLengthRequest({
      url: '/rentingoffer/usedcars',
      method: 'POST',
      onSuccess: setNumOfUsedCars,
    });
  }, []);

  useEffect(() => {
    //console.log('listOfCars.price: ', listOfCars.km);
    const filteredListOfCars = listOfCars.filter((price) => listOfCars.price < 400);
    // console.log('filtered list of cars: ', filteredListOfCars);
  }, [listOfCars]);

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
          </div>
        </div>
        <div className={styles._list_container}>
          <div className={styles._left_list_container}>
            <Filter setTabQuery={setTabQuery} />
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
