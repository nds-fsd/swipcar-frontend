import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styles from './carListPage.module.css';
import useWindowSize from '../../constants/useWindowSize';
import Filter from '../../components/filter/filter.view';
import Tab from '../../components/tabs/tab.view';
import CarList from '../../components/carLists/carList.view';
import { API_DEV } from '../../utils/api.constants';
import { newRequest } from '../../utils/newRequest';
import { carsLengthRequest } from '../../utils/carsLengthRequest';

const CarsListPage = ({ categoryFilter, searchValue }) => {
  const windowSize = useWindowSize();

  const location = useLocation();

  const [tabQuery, setTabQuery] = useState(location.search);
  const [rawListOfOffers, setRawListOfOffers] = useState([]);
  const [numOfCars, setNumOfCars] = useState([]);
  const [numOfNewCars, setNumOfNewCars] = useState([]);
  const [numOfUsedCars, setNumOfUsedCars] = useState([]);
  const [fuelFilter, setFuelFilter] = useState('');
  const [brandFilter, setBrandFilter] = useState([]);
  const [timeFilter, setTimeFilter] = useState([]);
  const [transmisionFilter, setTransmisionFilter] = useState([]);
  const [minPriceFilter, setMinPriceFilter] = useState();
  const [maxPriceFilter, setMaxPriceFilter] = useState();

  const history = useHistory();
  const tabs = [
    {
      id: '1',
      tab: 'Todas',
      value: 'todas',
      num: numOfCars,
    },
    {
      id: '2',
      tab: 'Coches nuevos',
      value: 'nuevos',
      num: numOfNewCars,
    },
    {
      id: '3',
      tab: 'Coches seminuevos',
      value: 'seminuevos',
      num: numOfUsedCars,
    },
  ];
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const handleTabSort = (tab) => {
    /* setFuelFilter('');
    setBrandFilter('');
    setTimeFilter('');
    setTransmisionFilter('');
    setMinPriceFilter('');
    setMaxPriceFilter(''); */
    switch (tab) {
      case 'todas':
        setActiveTab('1');
        setTabQuery('');
        break;
      case 'nuevos':
        setActiveTab('2');
        setTabQuery('?newcar=true');
        break;
      case 'seminuevos':
        setActiveTab('3');
        setTabQuery('?newcar=false');
        break;
      default:
        setTabQuery('');
    }
  };

  // Tabs Numbers of offers
  useEffect(() => {
    carsLengthRequest({ url: `${API_DEV.RENTING_OFFERS}`, method: 'GET', onSuccess: setNumOfCars });
  }, []);
  useEffect(() => {
    carsLengthRequest({
      url: `${API_DEV.RENTING_OFFERS}search?newcar=true`,
      method: 'POST',
      onSuccess: setNumOfNewCars,
    });
  }, []);
  useEffect(() => {
    carsLengthRequest({
      url: `${API_DEV.RENTING_OFFERS}search?newcar=false`,
      method: 'POST',
      onSuccess: setNumOfUsedCars,
    });
  }, []);

  // First fetch Raw List of Offers
  useEffect(() => {
    newRequest({
      url: `${API_DEV.RENTING_OFFERS}search${tabQuery}`,
      method: 'POST',
      onSuccess: setRawListOfOffers,
    });
  }, [tabQuery, location]);

  // Filter by Search from header

  const searchFilterList = rawListOfOffers.filter((offer) => {
    return (
      offer.version.brand.brandname.search(searchValue) !== -1 ||
      offer.version.model.modelname.search(searchValue) !== -1 ||
      offer.transmision.search(searchValue) !== -1 ||
      offer.fuel.search(searchValue) !== -1
    );
  });

  // Filter list of Offers per Category
  const filteredListInter = searchFilterList.filter((offer) =>
    offer.version.model.cartype.cartype.includes(categoryFilter)
  );

  // Filter list of Offers per Fuel
  const filteredListInter1 = filteredListInter.filter((offer) => offer.fuel.includes(fuelFilter));

  // Filter list of Offers per brand
  const filteredListInter2 = filteredListInter1.filter((offer) =>
    offer.version.brand.brandname.includes(brandFilter)
  );

  // Filter list of Offers per time
  const filteredListInter3 = filteredListInter2.filter((offer) => offer.time.includes(timeFilter));

  // Filter list of Offers per transmission
  const filteredListInter4 = filteredListInter3.filter((offer) =>
    offer.transmision.includes(transmisionFilter)
  );

  // Filter list of Offers per price
  const filteredListInter5 = filteredListInter4.filter(
    (offer) => offer.price >= (minPriceFilter || 0) && offer.price <= (maxPriceFilter || 2000)
  );

  // Get 1 car model per rentingOffer
  function getUniqueOfferByModel(filteredListInter5, key) {
    return [...new Map(filteredListInter5.map((car) => [car.version.model[key], car])).values()];
  }
  const listOfOffers = getUniqueOfferByModel(filteredListInter5, 'modelname');
  //const listOfOffers = filteredListInter5;
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
            Ofertas disponibles
          </div>
          <div className={styles._tab_container}>
            {tabs.map((tab) => {
              return (
                <Tab
                  key={tab.id}
                  id={tab.id}
                  tab={tab.tab}
                  num={tab.num}
                  activetab={activeTab}
                  onItemClick={() => handleTabSort(tab.value, tab.id)}
                />
              );
            })}
          </div>
        </div>

        <div className={styles._list_container}>
          {windowSize === 'sm' ? (
            ''
          ) : (
            <div className={styles._left_list_container}>
              <Filter
                setTabQuery={setTabQuery}
                setFuelFilter={setFuelFilter}
                brandFilter={brandFilter}
                setBrandFilter={setBrandFilter}
                setTimeFilter={setTimeFilter}
                setTransmisionFilter={setTransmisionFilter}
                setMinPriceFilter={setMinPriceFilter}
                setMaxPriceFilter={setMaxPriceFilter}
              />
            </div>
          )}
          <div className={styles._right_list_container}>
            <CarList listOfCars={listOfOffers} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarsListPage;
