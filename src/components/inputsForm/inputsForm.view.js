// import React, { useContext, useEffect, useRef, useState } from 'react';
// import styles from './carProfileForm.module.css';
// import stylesPure from '../pureComponents/pureComponents.module.css';
// // import CloseSession from '../closeSession';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import SelectComponent from '../pureComponents/selectComponent/index';
// import ToggleButtonComponent from '../pureComponents/toggleButtonComponent/index';
// import { CreateCarRequestAll, CreateCarRequestModel } from '../../utils/createCarRequestAll';
// import useWindowSize from '../../constants/useWindowSize';

import React, { useState } from 'react';
import useWindowSize from '../../constants/useWindowSize';
import StoreProvider from '../../store/StoreProvider';

import styles from './carProfileForm.module.css';
// import StepBar from '../../components/stepBar';
// import Step1Form from '../../pages/createRentingPage/step1Form';
// import Step2Form from '../../pages/createRentingPage/step2Form';
// import Step3Form from '../../pages/createRentingPage/step3Form';
// import Step4Form from '../../pages/createRentingPage/step4Form';
// import Step5Form from '../../pages/createRentingPage/step5Form';

// import DATADOMIE from '../../pages/';
// import { useForm } from 'react-hook-form';
// import { StoreContext } from '../../store/StoreProvider';
// import { types } from '../../store/StoreReducer';

const CarProfileForm = () => {
  // const [inputData, setInputData] = useState({
  //   toggleButton: false,
  // });
  // const [stepForm, setStepForm] = useState(1);
  const windowSize = useWindowSize();

  // const stepPagePrev = () => {
  //   if (stepForm !== 1) {
  //     setStepForm(stepForm - 1);
  //   }
  // };
  // const stepPageNext = () => {
  //   if (stepForm !== 5) {
  //     setStepForm(stepForm + 1);
  //   }
  // };

  return (
    <div className={styles.carlist_page}>
      <div
        className={`${windowSize === 'xlg' && styles.scene_container_xlg} 
      ${windowSize === 'lg' && styles.scene_container_lg}
      ${windowSize === 'md' && styles.scene_container_md}
      `}
      >
        {/* <StepBar stepForm={stepForm} /> */}

        <StoreProvider>
          <div className={styles._wrapper}>

          <InputsForm
                stepPagePrev={stepPagePrev}
                stepPageNext={stepPageNext}
              />

            {/* {stepForm === 1 && (
              <Step1Form
                stepPagePrev={stepPagePrev}
                stepPageNext={stepPageNext}
              />
            )}
            {stepForm === 2 && (
              <Step2Form
                stepPagePrev={stepPagePrev}
                stepPageNext={stepPageNext}
              />
            )}
            {stepForm === 3 && (
              <Step3Form
                stepPagePrev={stepPagePrev}
                stepPageNext={stepPageNext}
              />
            )}
            {stepForm === 4 && (
              <Step4Form
                stepPagePrev={stepPagePrev}
                stepPageNext={stepPageNext}
              />
            )}
            {stepForm === 5 && (
              <Step5Form
                stepPagePrev={stepPagePrev}
                stepPageNext={stepPageNext}
              />
            )} */}
          </div>
        </StoreProvider>
      </div>
    </div>
  );
};

export default CarProfileForm;
