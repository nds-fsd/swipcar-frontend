/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import styles from './carList.module.css';
import CarCard from '../carCards/carCard.view';
import CarListAlert from '../carListAlert';
import useWindowSize from '../../constants/useWindowSize';

const renderData = (data) => {
  return (
    <div className={styles.car_list}>
      {data.length <= 0 && <CarListAlert />}
      {data.length > 0 &&
        data.map((rentingoffer, index) => {
          return (
            <CarCard
              key={index}
              brand={rentingoffer.version.brand.brandname}
              model={rentingoffer.version.model.modelname}
              version={rentingoffer.version.version}
              fuel={rentingoffer.fuel}
              price={rentingoffer.price}
              photocar={rentingoffer.version.model.photocar.photourl}
              carProfile={rentingoffer.carProfile._id}
            />
          );
        })}
    </div>
  );
};

const CarList = ({ listOfCars }) => {
  const windowSize = useWindowSize();
  const [data, setData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemNumber = windowSize === 'md' ? 6 : 9;
  const [itemsPerPage, setitemsPerPage] = useState(itemNumber);

  const [pageNumberLimit, setpageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  useEffect(() => {
    setData(listOfCars);
  }, [listOfCars]);

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <div
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage === number ? `${styles._page_number_active}` : null}
        >
          {number}
        </div>
      );
    } else {
      return null;
    }
  });

  const handleNextbtn = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };
  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
  }

  const handleLoadMore = () => {
    setitemsPerPage(itemsPerPage + itemNumber);
  };

  return (
    <>
      <div className={styles._car_list_wrapper}>
        {renderData(currentItems)}

        <div className={styles._pagination_container}>
          <div className={styles._button_container}>
            <input
              type="button"
              className={styles._button}
              onClick={handlePrevbtn}
              value="Anterior"
              disabled={currentPage === pages[0] ? true : false}
            />
          </div>
          <div className={styles._page_number_container}>
            <div>{pageDecrementBtn}</div>
            <div className={styles._page_number}>{renderPageNumbers}</div>
            <div>{pageIncrementBtn}</div>
          </div>
          <div className={styles._button_container}>
            <input
              type="button"
              className={styles._button}
              onClick={handleNextbtn}
              value="Siguiente"
              disabled={currentPage === pages[pages.length - 1] ? true : false}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CarList;
