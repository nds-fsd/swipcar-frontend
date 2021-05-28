import React, { useState, useEffect } from 'react';
import styles from './searchBarComplete.module.css';
import { API_DEV } from '../../../../utils/api.constants';
import { ReactComponent as SearchIcon } from '../../../assets/searchIcon.svg';
import useWindowSize from '../../../../constants/useWindowSize';
import { newRequest } from '../../../../utils/newRequest';

const SearchBarComplete = ({ placeholder }) => {
  const windowSize = useWindowSize();
  const [cartypeList, setCartypeList] = useState();

  /* useEffect(() => {
    newRequest({
      url: `${API_DEV.CARTYPE}`,
      method: 'GET',
      onSuccess: setCartypeList,
    });
  }, []); */
  /* console.log('cartypeList: ', cartypeList);
  console.log('cartype: ', cartypeList.cartype); */
  return (
    <>
      {(windowSize === 'xlg' || windowSize === 'lg' || windowSize === 'md') && (
        <div className={styles._wrapper}>
          <div className={styles._categories_container}>
            <select className={styles._select}>
              <option value={placeholder}>{placeholder}</option>
              {/* {cartypeList && ({cartypeList.map((cartype) => {
                return <option key={cartype._id} value{cartype}>{cartype.cartype} </option>;
              })})} */}
            </select>
          </div>
          <div className={styles._search_container}>
            <input type="text" className={styles._input} placeholder="Busca tu coche" />
            <SearchIcon className={styles._search_icon} />
          </div>
        </div>
      )}
      {windowSize === 'sm' && (
        <div className={styles._wrapper_sm}>
          <div className={styles._categories_container_sm}>
            <select className={styles._select_sm}>
              <option>{placeholder}</option>
              {/* {props.dataoptions.map((option) => (
            <option key={option._id} value={option._id}>
              {option.name}
            </option>
          ))} */}
            </select>
          </div>
          <div className={styles._search_container_sm}>
            <input type="text" className={styles._input_sm} placeholder="Busca tu coche" />
            <SearchIcon className={styles._search_icon} />
          </div>
        </div>
      )}
    </>
  );
};

export default SearchBarComplete;
