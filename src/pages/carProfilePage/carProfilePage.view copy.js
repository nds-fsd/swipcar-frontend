import React, { useState, useEffect } from 'react';
import BreadcrumbItem from '../../components/breadcrumbItem/breadcrumbItem.view';
import styles from './carProfilePage.module.css';
import useWindowSize from '../../constants/useWindowSize';
import VideoButton from '../../components/buttons/videoButton/videoButton.view';
import { ReactComponent as FuelIcon } from '../../components/assets/fuelIcon.svg';
import { ReactComponent as GearBoxIcon } from '../../components/assets/gearBoxIcon.svg';
import { ReactComponent as EcomarkIcon } from '../../components/assets/ecomarkIcon.svg';
import { ReactComponent as MotorIcon } from '../../components/assets/motorIcon.svg';
import { ReactComponent as CarDoorIcon } from '../../components/assets/carDoorIcon.svg';
import { ReactComponent as EmissionIcon } from '../../components/assets/emissionIcon.svg';
import { ReactComponent as ChronographIcon } from '../../components/assets/chronographIcon.svg';
import IconCarDescription from '../../components/iconCarDescription/iconCarDescription.view';
//import { carProfileRequest } from '../../utils/carProfiletRequest';

const CarProfilePage = () => {
  let windowSize = useWindowSize();
  const [carProfile, setCarProfile] = useState();
  let carID = '606f0d78d105fa086e1101cb';

  /* useEffect(() => {
    carProfileRequest({ url: '/${carID}', onSuccess: setCarProfile });
  }, []); */

  return (
    <div className={styles.carprofile_scene}>
      <div className={styles.breadcrumb_row}>
        <div
          className={`${windowSize === 'xlg' && styles.breadcrumbs_wrapper_xlg} || ${
            windowSize === 'lg' && styles.breadcrumbs_wrapper_lg
          } || ${windowSize === 'md' && styles.breadcrumbs_wrapper_md}
          || ${windowSize === 'sm' && styles.breadcrumbs_wrapper_sm}`}
        >
          <BreadcrumbItem />
        </div>
      </div>
      <div
        className={`${windowSize === 'xlg' && styles.carprofile_row_xlg} || ${
          windowSize === 'lg' && styles.carprofile_row_lg
        } || ${windowSize === 'md' && styles.carprofile_row_md} || ${
          windowSize === 'sm' && styles.carprofile_row_sm
        }`}
      >
        <div
          className={`${windowSize === 'xlg' && styles.carprofile_wrapper_xlg}  || ${
            windowSize === 'lg' && styles.carprofile_wrapper_lg
          } || ${windowSize === 'md' && styles.carprofile_wrapper_md} || ${
            windowSize === 'sm' && styles.carprofile_wrapper_sm
          }`}
        >
          <div
            className={`${windowSize === 'xlg' && styles.photo_container_xlg} || ${
              windowSize === 'lg' && styles.photo_container_lg
            }  || ${windowSize === 'md' && styles.photo_container_md} || ${
              windowSize === 'sm' && styles.photo_container_sm
            }`}
          >
            <img
              className={styles.photo}
              alt="imgcar"
              src="https://res.cloudinary.com/dag3rmkxg/image/upload/f_auto,c_limit,w_750,q_auto/v1/car_model/fiat/500sport"
            />
          </div>
          <div className={windowSize === 'sm' ? styles.video_wrapper_sm : styles.video_wrapper}>
            <div className={styles.video_container}>
              <VideoButton />
            </div>
          </div>
          {(windowSize === 'xlg' || windowSize === 'lg') && (
            <div className={styles.icon_description_wrapper}>
              <div className={styles.icon_description_container}>
                <IconCarDescription
                  icon={<FuelIcon />}
                  title="COMBUSTIBLE"
                  titleText="Híbrido Gasolina"
                />
                <IconCarDescription icon={<GearBoxIcon />} title="TRANSMISIÓN" titleText="Manual" />
                <IconCarDescription icon={<EcomarkIcon />} title="DISTINTIVO" titleText="Eco" />
              </div>
              <div className={styles.icon_description_container}>
                <IconCarDescription icon={<MotorIcon />} title="MOTOR" titleText="70 CV" />
                <IconCarDescription icon={<CarDoorIcon />} title="PUERTAS" titleText="3" />
                <IconCarDescription
                  icon={<EmissionIcon />}
                  title="EMISIÓN"
                  titleText="104g CO2/Km"
                />
              </div>
            </div>
          )}
          {windowSize === 'md' && (
            <div className={`${windowSize === 'md' && styles.icon_description_wrapper_md}`}>
              <IconCarDescription
                icon={<FuelIcon />}
                title="COMBUSTIBLE"
                titleText="Híbrido Gasolina"
              />
              <IconCarDescription icon={<GearBoxIcon />} title="TRANSMISIÓN" titleText="Manual" />
              <IconCarDescription icon={<EcomarkIcon />} title="DISTINTIVO" titleText="Eco" />
              <IconCarDescription icon={<MotorIcon />} title="MOTOR" titleText="70 CV" />
              <IconCarDescription icon={<CarDoorIcon />} title="PUERTAS" titleText="3" />
              <IconCarDescription icon={<EmissionIcon />} title="EMISIÓN" titleText="104g CO2/Km" />
            </div>
          )}
          {windowSize === 'sm' && (
            <div className={styles.icon_description_wrapper_sm}>
              <div className={styles.icon_description_container_sm}>
                <IconCarDescription
                  icon={<FuelIcon />}
                  title="COMBUSTIBLE"
                  titleText="Híbrido Gasolina"
                />
                <IconCarDescription icon={<GearBoxIcon />} title="TRANSMISIÓN" titleText="Manual" />
                <IconCarDescription icon={<EcomarkIcon />} title="DISTINTIVO" titleText="Eco" />
              </div>
              <div className={styles.icon_description_container_sm}>
                <IconCarDescription icon={<MotorIcon />} title="MOTOR" titleText="70 CV" />
                <IconCarDescription icon={<CarDoorIcon />} title="PUERTAS" titleText="3" />
                <IconCarDescription
                  icon={<EmissionIcon />}
                  title="EMISIÓN"
                  titleText="104g CO2/Km"
                />
              </div>
            </div>
          )}
          <div className={styles.noIcon_description_wrapper}>
            <div className={styles.noIcon_description_container}>
              <div className={styles.noIcon_description_item}>
                <div className={styles.noIcon_description_title}>COLORES DISPONIBLES</div>
                <div className={styles.noIcon_description}></div>
              </div>
              <div className={styles.noIcon_description_item}>
                <div className={styles.noIcon_description_title}>CAPACIDAD DEL MALETERO</div>
                <div className={styles.noIcon_description}>185 litros</div>
              </div>
            </div>
            <div className={styles.noIcon_description_container}>
              <div className={styles.noIcon_description_item}>
                <div className={styles.noIcon_description_title}>CILINDRADA</div>
                <div className={styles.noIcon_description}>1 L / 1.000 cm3</div>
              </div>
              <div className={styles.noIcon_description_item}>
                <div className={styles.noIcon_description_title}>DIMENSIONES</div>
                <div className={styles.noIcon_description}>
                  "Largo xxx / Alto xxx / Ancho xxx (cm)"
                </div>
              </div>
            </div>
            <div className={styles.noIcon_description_container}>
              <div className={styles.noIcon_description_item}>
                <div className={styles.noIcon_description_title}>CONSUMO MEDIO</div>
                <div className={styles.noIcon_description}>xx litros/100km</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.online_study_row}>
        <div
          className={`${windowSize === 'xlg' && styles.online_study_wrapper_xlg} || ${
            windowSize === 'lg' && styles.online_study_wrapper_lg
          } || ${windowSize === 'md' && styles.online_study_wrapper_md} || ${
            windowSize === 'sm' && styles.online_study_wrapper_sm
          }`}
        >
          <div className={styles.online_study_icon}>
            <ChronographIcon />
          </div>
          <div className={styles.online_study_text_container}>
            <div className={styles.online_study_title}>Estudio online</div>
            <div className={styles.online_study_text}>
              Estudiamos tu caso en solo 5 minutos. Sin papeleos
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarProfilePage;
