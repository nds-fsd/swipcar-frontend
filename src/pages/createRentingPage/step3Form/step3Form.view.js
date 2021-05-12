import React, { useState } from 'react';
import styles from '../createRentingPage.module.css';
import useWindowSize from '../../../constants/useWindowSize';
import DATADOMIE from '../dataDomie';
import ToggleButtonComponent from '../../../components/pureComponents/toggleButtonComponent';
import ButtonComponent from '../../../components/pureComponents/buttonComponent';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Step3Form = ({ stepPagePrev, stepPageNext }) => {
  const [inputData, setInputData] = useState({
    toggleButton: false,
  });
  const windowSize = useWindowSize();

  const handleInput = (e) => {
    // setInputData(e.target.value);
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [entradas, setentradas] = useState([]);

  console.log('errors : ', errors);

  const onSubmit = (data, e) => {
    console.log('data :', data);
    setentradas([...entradas, data]);
    console.log('entradas : ', entradas);
    stepPageNext();
    // limpiar campos
    e.target.reset();
  };

  return (
    <div className={`${styles._wrapper} ${styles._form_step_animation}`}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles._form_step_animation}>
          <h2 className={styles._tittle}>Renting Goodies</h2>

          <div className={styles._toggles_list}>
            {DATADOMIE.Googies.map((value) => (
              <div key={value._id}>
                <div>
                  <ToggleButtonComponent
                    name={value.name}
                    type="checkbox"
                    checked={value.isChecked}
                    label={value.name}
                    iconlabel={value.iconlabel}
                  />
                  {/* onChange={_handleToggle} */}
                </div>
              </div>
            ))}
          </div>

          <h2 className={styles._tittle}>Equipamiento Destacado</h2>

          <div className={styles._toggles_list}>
            {DATADOMIE.EquipamientoDestacado.map((value) => (
              <div key={value._id}>
                <div>
                  <ToggleButtonComponent
                    name={value.name}
                    type="checkbox"
                    checked={value.isChecked}
                    label={value.name}
                    iconlabel={value.iconlabel}
                  />
                  {/* onChange={_handleToggle} */}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles._row_buttons}>
          <ButtonComponent
            label="Paso Anterior"
            alt="Paso Anterior"
            type="cancel"
            actionButton={stepPagePrev}
          />
          <ButtonComponent label="Paso Siguiente" type="submit" alt="Paso Siguiente" />
        </div>
      </form>
    </div>
  );
};

export default Step3Form;
