import React, { useState, useEffect } from 'react';
import { useLocation, Link, useParams } from 'react-router-dom';
import { LOGIN_SIGNIN_PAGE } from '../../routers/routers';
import BreadcrumbItem from '../../components/breadcrumbItem/breadcrumbItem.view';
import styles from './carProfilePage.module.css';
import useWindowSize from '../../constants/useWindowSize';
import { API_DEV } from '../../utils/api.constants';
import { ReactComponent as FuelIcon } from '../../components/assets/fuelIcon.svg';
import { ReactComponent as GearBoxIcon } from '../../components/assets/gearBoxIcon.svg';
import { ReactComponent as CarSizeIcon } from '../../components/assets/carSizeIcon.svg';
import { ReactComponent as MotorIcon } from '../../components/assets/motorIcon.svg';
import { ReactComponent as CarDoorIcon } from '../../components/assets/carDoorIcon.svg';
import { ReactComponent as EmissionIcon } from '../../components/assets/emissionIcon.svg';
import { newRequest } from '../../utils/newRequest';
import SpecItemWrapper from '../../components/specItemWrapper';
import EquipmentWrapper from '../../components/equipmentWrapper/equipmentWrapper.view';
import RentingOfferCard from '../../components/rentingOfferCard/rentingOfferCard.view';
import GreenButton from '../../components/buttons/greenButton';

const CarProfilePage = () => {
  const location = useLocation();
  const params = useParams();
  const carId = location.state?.carId;
  console.log('carId: ', carId);
  const [versionId, setVersionId] = useState(0);
  const [activeVersion, setActiveVersion] = useState(versionId[0]);

  let windowSize = useWindowSize();
  const [carProfile, setCarProfile] = useState();

  const authorizedUser = localStorage.getItem('user-session');

  useEffect(() => {
    newRequest({
      url: `${API_DEV.CARPROFILE}${carId}`,
      onSuccess: setCarProfile,
    });
  }, [carId]);

  const lowerPrice = 230;

  const handleSelectVersion = (version, id) => {
    setActiveVersion(id);
    setVersionId(id);
  };
  return (
    <div className={styles._carprofile_scene}>
      {carProfile && (
        <>
          <div className={styles.breadcrumb_row}>
            <BreadcrumbItem brand={carProfile.brand.brandname} model={carProfile.model.modelname} />
          </div>
          <div className={styles._car_image_slider}>
            <img
              className={styles._car_image}
              alt="Carimage"
              src={carProfile.model.photocar.sliderurl}
            />
            <div className={styles._tags_container}>
              <div className={styles._name_price_wrapper}>
                <div className={styles._name_price_container}>
                  <div className={styles._car_name}>
                    {carProfile.brand.brandname} {carProfile.model.modelname}
                  </div>
                  <div className={styles._car_price_claim}>desde {lowerPrice} €/mes</div>
                </div>
              </div>
              <div className={styles._car_version_tag_container}>
                {carProfile.version.map((version, id) => {
                  return (
                    <div
                      key={version._id}
                      id={version._id}
                      className={
                        activeVersion === id
                          ? `${styles._car_version_tag} ${styles._car_version_tag_active}`
                          : `${styles._car_version_tag}`
                      }
                      onClick={() => handleSelectVersion(version, id)}
                    >
                      {version.version}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className={styles._carprofile_page_scene}>
            <div className={styles._carprofile_wrapper}>
              <div className={styles._spec_wrapper}>
                <div className={styles._container_title}>ESPECIFICACIONES</div>

                <div className={styles._spec_container}>
                  <SpecItemWrapper
                    label1="Año: "
                    item1="2021"
                    label2="Categoria: "
                    item2={carProfile.model.cartype.cartype}
                  />
                </div>
                <hr className={styles._item_hr} />
                <div className={styles._spec_container}>
                  <CarSizeIcon className={styles._spec_item_title_icon} />
                  <SpecItemWrapper
                    title="Dimensiones"
                    label1="Largo: "
                    item1={`${carProfile.version[`${versionId}`].dimensionslength} cm `}
                    label2="Ancho: "
                    item2={`${carProfile.version[`${versionId}`].dimensionswidth} cm`}
                    label3="Alto: "
                    item3={`${carProfile.version[`${versionId}`].dimensionsheight} cm`}
                  />
                </div>
                <hr className={styles._item_hr} />
                <div className={styles._spec_container}>
                  <CarDoorIcon className={styles._spec_item_title_icon} />
                  <SpecItemWrapper
                    title="Capacidad"
                    label1="Puertas: "
                    item1={`${carProfile.version[`${versionId}`].doors}`}
                    label2="Maletero: "
                    item2={`${carProfile.version[`${versionId}`].trunk} cm3`}
                  />
                </div>
                <hr className={styles._item_hr} />
                <div className={styles._spec_container}>
                  <FuelIcon className={styles._spec_item_title_icon} />
                  <SpecItemWrapper
                    title="Combustible"
                    label1="Tipo de combustible: "
                    item1={`${carProfile.version[`${versionId}`].fuel[0].fueltype}`}
                    label2="Consumo mixto: "
                    item2={`${carProfile.version[`${versionId}`].comsumption} l/100km`}
                  />
                </div>
                <hr className={styles._item_hr} />
                <div className={styles._spec_container}>
                  <MotorIcon className={styles._spec_item_title_icon} />
                  <SpecItemWrapper
                    title="Motor"
                    label1="Potencia: "
                    item1={`${carProfile.version[`${versionId}`].motor} CV`}
                    label2="Cilindrada: "
                    item2={`${carProfile.version[`${versionId}`].displacement} ccm`}
                  />
                </div>
                <hr className={styles._item_hr} />
                <div className={styles._spec_container}>
                  <GearBoxIcon className={styles._spec_item_title_icon} />
                  <SpecItemWrapper
                    title="Transmision"
                    label1="Caja de cambio: "
                    item1={`${carProfile.version[`${versionId}`].transmision[0].transmisiontype}`}
                  />
                </div>
                <hr className={styles._item_hr} />
                <div className={styles._spec_container}>
                  <EmissionIcon className={styles._spec_item_title_icon} />
                  <SpecItemWrapper
                    title="Ecosostenibilidad"
                    label1="Ecomark: "
                    item1={`${carProfile.version[`${versionId}`].ecomark.ecomarktype}`}
                    label2="Emision: "
                    item2={`${carProfile.version[`${versionId}`].emission}g CO2/km`}
                  />
                </div>
                <hr className={styles._item_hr} />
                <div className={styles._spec_wrapper}>
                  <div className={styles._container_title}>COLORES DISPONIBLES</div>
                  <div className={styles._color_container}>
                    {carProfile.version[`${versionId}`].color.map((color) => {
                      return (
                        <div
                          key={color._id}
                          className={styles._color_circle}
                          style={{ backgroundColor: `${color.color}` }}
                        ></div>
                      );
                    })}
                  </div>
                </div>
                <div className={styles._spec_wrapper}>
                  <div className={styles._container_title}>EQUIPAMIENTO DE SERIE</div>
                  <div className={styles._equipment_container}>
                    <EquipmentWrapper
                      equipmentCategory="Tecnología"
                      equipmentList={carProfile.version[`${versionId}`].technologies}
                    />
                  </div>
                  <div className={styles._equipment_container}>
                    <EquipmentWrapper
                      equipmentCategory="Seguridad"
                      equipmentList={carProfile.version[`${versionId}`].securities}
                    />
                  </div>
                  <div className={styles._equipment_container}>
                    <EquipmentWrapper
                      equipmentCategory="Confort"
                      equipmentList={carProfile.version[`${versionId}`].conforts}
                    />
                  </div>
                  <div className={styles._equipment_container}>
                    <EquipmentWrapper
                      equipmentCategory="Equipamiento Exterior"
                      equipmentList={carProfile.version[`${versionId}`].exteriors}
                    />
                  </div>
                </div>
              </div>
            </div>
            {windowSize === 'sm' ? (
              ''
            ) : (
              <div className={styles._rentingoffer_wrapper}>
                <div className={styles._renting_container_title}>
                  ELIGE EL RENTING QUE MEJOR SE ADAPTA A TUS NECESIDADES
                </div>
                {authorizedUser ? (
                  <div className={styles._renting_offer_list_container}>
                    {carProfile.version[`${versionId}`].rentingoffers.map((rentingOffer) => {
                      return (
                        <RentingOfferCard
                          key={rentingOffer._id}
                          rentingOffer={{ rentingOffer }}
                          car={`${carProfile.brand.brandname} ${carProfile.model.modelname}`}
                          photocar={carProfile.model.photocar.photourl}
                        />
                      );
                    })}
                  </div>
                ) : (
                  <div className={styles._not_logged_renting_container}>
                    <div className={styles._login_container_title}>
                      Entra con tu cuenta para ver las ofertas
                    </div>
                    <Link to={{ pathname: LOGIN_SIGNIN_PAGE, from: location.state.carId }}>
                      <GreenButton label="Login" />
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default CarProfilePage;
