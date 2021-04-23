import React from 'react';
import styles from './searchBarComplete.module.css';
import { ReactComponent as SearchIcon } from '../../../assets/searchIcon.svg';
import useWindowSize from '../../../../constants/useWindowSize';

const SearchBarComplete = (props) => {
  const windowSize = useWindowSize();
  return (
    <>
      {(windowSize === 'xlg' || windowSize === 'lg' || windowSize === 'md') && (
        <div className={styles._wrapper}>
          <div className={styles._categories_container}>
            <select className={styles._select} {...props}>
              <option>{props.placeholder}</option>
              {/* {props.dataoptions.map((option) => (
            <option key={option._id} value={option._id}>
              {option.name}
            </option>
          ))} */}
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
            <select className={styles._select_sm} {...props}>
              <option>{props.placeholder}</option>
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
