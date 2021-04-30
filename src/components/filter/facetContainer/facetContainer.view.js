import React from 'react';
import Checkbox from '../../checkbox/checkbox.view';
import styles from './facetContainer.module.css';

const FacetContainer = () => {
  return (
    <>
      <div className={styles._facet_container}>
        <Checkbox />
      </div>
    </>
  );
};

export default FacetContainer;
