import React from 'react';
import styles from './searchBarShort.module.css';
import { ReactComponent as SearchIcon } from '../../../assets/searchIcon.svg';
import useWindowSize from '../../../../constants/useWindowSize';

const SearchBarShort = (props) => {
  const windowSize = useWindowSize();
  return (
    <>
      <div className={styles._wrapper}>
        <div className={styles._search_container}>
          <input type="text" className={styles._input} placeholder="Busca tu coche" />
          <SearchIcon className={styles._search_icon} />
        </div>
      </div>
    </>
  );
};

export default SearchBarShort;
