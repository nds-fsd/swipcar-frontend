import React, { useState } from 'react';
import styles from './carListPage.module.css';
import useWindowSize from '../../constants/useWindowSize';
import CarListTabsData from './carListTabsData';
import FilterButton from '../../components/filter/filterButton/filterButton.view';
import Filter from '../../components/filter/filter.view';
import Tab from '../../components/tabs/tab.view';
import CarListXLarge from '../../components/carLists/carListXLarge.view';
import CarListMedium from '../../components/carLists/carListMedium.view';
import CarListSmall from '../../components/carLists/carListSmall.view';

const NewCarsListPage = () => {
  const [openFilter, setOpenFilter] = useState(false);
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
        <div className={`${windowSize !== 'sm' && styles.new_cars_action_container}`}>
          <div className={styles.filter_container}>
            {openFilter === true ? <FilterButton setOpenFilter={setOpenFilter} /> : null}
          </div>
          <div className={styles.tabs_content}>
            <div className={styles.tab_wrapper}>
              {CarListTabsData.map(({ id, tab, path }) => (
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
            <Filter openFilter={openFilter} closeFilter={() => setOpenFilter(true)} />
            <CarListMedium />
          </div>
        )}
        {windowSize === 'sm' && (
          <div className={styles.list_container_sm}>
            <Filter openFilter={openFilter} closeFilter={() => setOpenFilter(true)} />
            <CarListMedium />
          </div>
        )}
      </div>
    </div>
  );
};

export default NewCarsListPage;
