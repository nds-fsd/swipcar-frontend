import React, { useState } from 'react';
import styles from './createRentingPage.module.css';
import useWindowSize from '../../constants/useWindowSize';
import StepBar from '../../components/stepBar/stepBar.view';
import ButtonComponent from '../../components/pureComponents/buttonComponent';
import Step1Form from './step1Form';
import Step2Form from './step2Form';
import Step3Form from './step3Form';
import Step4Form from './step4Form';
import Step5Form from './step5Form/step5Form.view';

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

        <div className={styles._wrapper}>
          {stepForm === 1 && <Step1Form className={styles._form_step_animation} />}
          {stepForm === 2 && <Step2Form className={styles._form_step_animation} />}
          {stepForm === 3 && <Step3Form className={styles._form_step_animation} />}
          {stepForm === 4 && <Step4Form className={styles._form_step_animation} />}
          {stepForm === 5 && <Step5Form className={styles._form_step_animation} />}

          <div className={styles._row_buttons}>
            <ButtonComponent label="Paso Anterior" alt="Paso Anterior" type="cancel" actionButton={stepPagePrev}/>
            <ButtonComponent label="Paso Siguiente" alt="Paso Siguiente" type="ok" actionButton={stepPageNext} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateRentingPage;
