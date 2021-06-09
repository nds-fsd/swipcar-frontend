import React, { useState, useEffect } from 'react';
import styles from './carListAlert.module.css';

const CarListAlert = () => {
  const [alert, setAlert] = useState();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(
        <div className={styles._alert_container}>
          <div className={styles._alert_title}>
            Oups!! No hay ofertas...
            <br />
            Busca de nuevo con menos criterios
          </div>
        </div>
      );
    }, 200);
    return () => clearTimeout(timeout);
  }, []);

  return <>{alert}</>;
};

export default CarListAlert;
