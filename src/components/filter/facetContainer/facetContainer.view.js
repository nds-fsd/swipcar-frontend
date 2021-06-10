import React, { useEffect, useState } from 'react';
import { newRequest } from '../../../utils/newRequest';
import styles from './facetContainer.module.css';
import { API_DEV } from '../../../utils/api.constants';

const FacetContainer = ({ setBrandFilter }) => {
  const [brandList, setBrandList] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    newRequest({ url: API_DEV.BRANDS, onSuccess: setBrandList });
  }, []);

  const sortedBrandList = brandList.sort(function (a, b) {
    if (a.brandname < b.brandname) return -1;
    else if (a.brandname > b.brandname) return 1;
    return 0;
  });
  const [activeBrand, setActiveBrand] = useState(sortedBrandList[0]);

  const handleSelectBrand = (brand, id) => {
    setActiveBrand(id);
    setIsChecked(!isChecked);
    setBrandFilter(brand.brandname);
  };

  const handleCancelBrandFilter = () => {
    setBrandFilter('');
    setActiveBrand('');
  };
  return (
    <>
      <div className={styles._brand_title_container}>
        <div className={styles._container_title}>
          <div className={styles._title}>Marcas</div>
          <div className={styles._filter_cancelation} onClick={handleCancelBrandFilter}>
            borrar
          </div>
        </div>
      </div>
      <div className={styles._brands_container}>
        {sortedBrandList.map((brand, id) => {
          return (
            <div
              key={brand._id}
              id={brand._id}
              className={
                activeBrand === id
                  ? `${styles._brand_item_container} ${styles.brand_item_active}`
                  : `${styles._brand_item_container}`
              }
              type="text"
              value={brand.brandname}
              onClick={() => handleSelectBrand(brand, id)}
            >
              <div className={styles._brand_item}>{brand.brandname}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FacetContainer;
