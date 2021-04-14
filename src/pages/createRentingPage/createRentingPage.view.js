import React, { useState } from 'react';
import useWindowSize from '../../constants/useWindowSize';
import StoreProvider from '../../store/StoreProvider';

import styles from './createRentingPage.module.css';
import StepBar from '../../components/stepBar';
import Step1Form from './step1Form';
import Step2Form from './step2Form';
import Step3Form from './step3Form';
import Step4Form from './step4Form';
import Step5Form from './step5Form';

const CreateRentingPage = () => {
  // const [inputData, setInputData] = useState({
  //   toggleButton: false,
  // });
  const [stepForm, setStepForm] = useState(1);
  const windowSize = useWindowSize();

  const stepPagePrev = () => {
    if (stepForm !== 1) {
      setStepForm(stepForm - 1);
    }
  };
  const stepPageNext = () => {
    if (stepForm !== 5) {
      setStepForm(stepForm + 1);
    }
  };

  return (
    <div className={styles.carlist_page}>
      <div
        className={`${windowSize === 'xlg' && styles.scene_container_xlg} 
      ${windowSize === 'lg' && styles.scene_container_lg}
      ${windowSize === 'md' && styles.scene_container_md}
      `}
      >
        <StepBar stepForm={stepForm} />

        {/* <StoreProvider> */}
          <div className={styles._wrapper}>
            {stepForm === 1 && (
              <Step1Form
                className={styles._form_step_animation}
                stepPagePrev={stepPagePrev}
                stepPageNext={stepPageNext}
              />
            )}
            {stepForm === 2 && (
              <Step2Form
                className={styles._form_step_animation}
                stepPagePrev={stepPagePrev}
                stepPageNext={stepPageNext}
              />
            )}
            {stepForm === 3 && (
              <Step3Form
                className={styles._form_step_animation}
                stepPagePrev={stepPagePrev}
                stepPageNext={stepPageNext}
              />
            )}
            {stepForm === 4 && (
              <Step4Form
                className={styles._form_step_animation}
                stepPagePrev={stepPagePrev}
                stepPageNext={stepPageNext}
              />
            )}
            {stepForm === 5 && (
              <Step5Form
                className={styles._form_step_animation}
                stepPagePrev={stepPagePrev}
                stepPageNext={stepPageNext}
              />
            )}
          </div>
        {/* </StoreProvider> */}
      </div>
    </div>
  );
};

export default CreateRentingPage;
