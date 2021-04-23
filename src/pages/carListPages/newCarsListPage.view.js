import React, { useState } from 'react';
import styles from './carListPage.module.css';
import useWindowSize from '../../constants/useWindowSize';
import TabsData from '../../components/tabs/tabsData';
import FilterButton from '../../components/filter/filterButton/filterButton.view';
import Filter from '../../components/filter/filter.view';
//import SlideFilter from '../../components/filter/slideFilter.view';
import Tab from '../../components/tabs/tab.view';
import CarListXLarge from '../../components/carLists/carListXLarge.view';
import CarListMedium from '../../components/carLists/carListMedium.view';
import CarListSmall from '../../components/carLists/carListSmall.view';
import { CarListContextProvider } from '../../store/carListContext';

const NewCarsListPage = () => {
  const [openFilter, setOpenFilter] = useState(false);
  // const [openSlideFilter, setOpenSlideFilter] = useState(true);
  const [activeTab, setActiveTab] = useState(0);
  const windowSize = useWindowSize();

  return (
    <div className={styles.carlist_page}>
      <div
        className={`${windowSize === 'xlg' && styles.scene_container_xlg} 
      ${windowSize === 'lg' && styles.scene_container_lg}
      ${windowSize === 'md' && styles.scene_container_md}
      `}
      >
        <div className={styles.scene_title}>
          <div className={styles.title}>Renting de Coches</div>
          <div className={styles.subtitle}>
            Más de 50 coches de renting disponibles con todo incluido y sin entrada
          </div>
        </div>
        <div
          className={`${
            windowSize === 'sm'
              ? styles.new_cars_action_container_sm
              : styles.new_cars_action_container
          }`}
        >
          <div className={styles.filter_container}>
            {openFilter === true ? <FilterButton setOpenFilter={setOpenFilter} /> : null}
            {/*{openSlideFilter === true ? (
              <FilterButton setOpenSlideFilter={setOpenSlideFilter} />
            ) : null} */}
          </div>
          <div className={`${windowSize === 'sm' ? styles.tabs_content_sm : styles.tabs_content}`}>
            <div className={styles.tab_wrapper}>
              {TabsData.map(({ id, tab, path }) => (
                <Tab
                  key={id}
                  tab={tab}
                  path={path}
                  activeTab={activeTab}
                  onItemClicked={() => setActiveTab(id)}
                  isActive={activeTab === id}
                />
              ))}
            </div>
          </div>
        </div>
        <CarListContextProvider>
          {windowSize === 'xlg' && (
            <div className={styles.list_container}>
              <Filter openFilter={openFilter} closeFilter={() => setOpenFilter(true)} />
              {!openFilter ? <CarListSmall /> : <CarListXLarge />}
            </div>
          )}

          {windowSize === 'lg' && (
            <div className={styles.list_container}>
              <Filter openFilter={openFilter} closeFilter={() => setOpenFilter(true)} />
              <CarListSmall />
            </div>
          )}
          {windowSize === 'md' && (
            <div className={styles.list_container}>
              {/* <SlideFilter
                openSlideFilter={openSlideFilter}
                closeSlideFilter={() => setOpenSlideFilter(true)}
              /> */}
              <CarListMedium />
            </div>
          )}
          {windowSize === 'sm' && (
            <div className={styles.list_container_sm}>
              {/* <SlideFilter
                openSlideFilter={openSlideFilter}
                closeSlideFilter={() => setOpenSlideFilter(true)}
              /> */}
              <CarListMedium />
            </div>
          )}
        </CarListContextProvider>
      </div>
    </div>
  );
};

export default NewCarsListPage;
