import React, { useState } from 'react';
import styles from './carListPage.module.css';
import TabsData from '../../components/tabs/tabsData';
import Tab from '../../components/tabs/tab.view';

const VanCarsListPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.carlist_page}>
      <div className={styles.scene_container_xlg}>
        <div className={styles.scene_title}>
          <div className={styles.title}>Renting de Furgonetas</div>
          <div className={styles.subtitle}>
            Más de 20 furgonetas de renting disponibles con todo incluido y sin entrada
          </div>
        </div>
        <div className={styles.cars_action_container}>
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
    </div>
  );
};

export default VanCarsListPage;
