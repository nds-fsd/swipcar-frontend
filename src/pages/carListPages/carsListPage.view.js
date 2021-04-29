import React, { useState } from 'react';
import styles from './carListPage.module.css';
import useWindowSize from '../../constants/useWindowSize';
import FilterButton from '../../components/filter/filterButton/filterButton.view';
import Filter from '../../components/filter/filter.view';
//import SlideFilter from '../../components/filter/slideFilter.view';
import Tab from '../../components/tabs/tab.view';
import CarList from '../../components/carLists/carList.view';

import { CarListContextProvider } from '../../store/carListContext';

const CarsListPage = () => {
  const [openFilter, setOpenFilter] = useState(false);
  // const [openSlideFilter, setOpenSlideFilter] = useState(true);

  const windowSize = useWindowSize();

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
            <Tab tab={'Nuevos'} num={'15'} />
            <Tab tab={'Furgonetas'} num={'10'} />
            <Tab tab={'Seminuevos'} num={'12'} />
          </div>
        </div>
        <div className={styles._list_container}>
          <div className={styles._left_list_container}>
            <Filter />
          </div>
          <div className={styles._right_list_container}>
            <CarListContextProvider>
              <CarList />
            </CarListContextProvider>
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
