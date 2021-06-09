import React, { useState, useEffect, useContext } from 'react';
import styles from './searchBarComplete.module.css';
import { API_DEV } from '../../../../utils/api.constants';
import { ReactComponent as SearchIcon } from '../../../assets/searchIcon.svg';
import useWindowSize from '../../../../constants/useWindowSize';
import { newRequest } from '../../../../utils/newRequest';

const SearchBarComplete = ({ placeholder, setCategoryFilter, setSearchValue }) => {
  const windowSize = useWindowSize();
  const [cartypeList, setCartypeList] = useState();

  useEffect(() => {
    newRequest({ url: `${API_DEV.CARTYPE}`, onSuccess: setCartypeList });
  }, []);

  const handleCartype = (value) => {
    if (value === 'Todas las categorias') {
      return setCategoryFilter('');
    } else {
      return setCategoryFilter(value);
    }
  };
  const handleSearch = (event) => {
    const timeout = setTimeout(() => {
      let value = event.target.value.toLowerCase();
      const searchValue = () => {
        if (value) {
          return value[0].toUpperCase() + value.slice(1);
        }
      };
      if (!window.location.href.includes('renting')) {
        return '';
      } else {
        setSearchValue(searchValue);
      }
    }, 3000);
  };
  return (
    <>
      {(windowSize === 'xlg' || windowSize === 'lg' || windowSize === 'md') && (
        <div className={styles._wrapper}>
          <div className={styles._categories_container}>
            <select className={styles._select} onChange={(e) => handleCartype(e.target.value)}>
              <option value={placeholder}>{placeholder}</option>
              {cartypeList?.map((cartype) => {
                return (
                  <option key={cartype._id} value={cartype.cartype}>
                    {cartype.cartype}
                  </option>
                );
              })}
              )
            </select>
          </div>
          <div className={styles._search_container}>
            <input
              type="text"
              className={styles._input}
              placeholder="Busca un coche"
              onChange={(event) => handleSearch(event)}
            />
            <SearchIcon className={styles._search_icon} />
          </div>
        </div>
      )}
      {windowSize === 'sm' && (
        <div className={styles._wrapper_sm}>
          <div className={styles._categories_container_sm}>
            <select className={styles._select}>
              <option value={placeholder}>{placeholder}</option>
              {cartypeList?.map((cartype) => {
                return (
                  <option key={cartype._id} value={cartype.cartype}>
                    {cartype.cartype}
                  </option>
                );
              })}
              )
            </select>
          </div>
          <div className={styles._search_container_sm}>
            <input
              type="text"
              className={styles._input_sm}
              placeholder="Busca un coche"
              onChange={(event) => handleSearch(event)}
            />
            <SearchIcon className={styles._search_icon} />
          </div>
        </div>
      )}
    </>
  );
};

export default SearchBarComplete;
