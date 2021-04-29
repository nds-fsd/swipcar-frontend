/* eslint-disable no-unused-vars */
import React, { createContext, useState, useEffect } from 'react';
import { newCarsListRequest } from '../utils/newCarsListRequest';

export const CarListContext = createContext();

export const CarListContextProvider = ({ children }) => {
  const [listOfCars, setListOfCars] = useState([]);
  useEffect(() => {
    newCarsListRequest({ url: '/carcard', onSuccess: setListOfCars });
  }, []);

  return <CarListContext.Provider value={{ listOfCars }}>{children}</CarListContext.Provider>;
};
