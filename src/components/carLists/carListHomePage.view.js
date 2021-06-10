/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import styles from './carList.module.css';
import CarCard from '../carCards/carCard.view';
import CarListAlert from '../carListAlert';

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

const CarListHomePage = ({ listOfCars }) => {
  const [data, setData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  const [itemsPerPage, setitemsPerPage] = useState(4);

  const [pageNumberLimit, setpageNumberLimit] = useState(1);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  useEffect(() => {
    setData(listOfCars);
  }, [listOfCars]);
  //  console.log('listOfCars:', listOfCars);

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

  return (
    <>
      <div className={styles._car_list_wrapper}>{renderData(currentItems)}</div>
    </>
  );
};

export default CarListHomePage;
