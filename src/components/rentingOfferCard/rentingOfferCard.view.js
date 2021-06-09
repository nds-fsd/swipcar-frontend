import React, { useState } from 'react';
import GreenButtonSmall from '../buttons/greenButtonSmall/greenButtonSmall.view';
import ExtendedRentingItem from './extendedRentingItem';
import styles from './rentingOfferCard.module.css';
import { ReactComponent as CheckIcon } from '../assets/checkIcon.svg';

const RentingOfferCard = ({ rentingOffer, car, photocar }) => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };
  return (
    <>
      {!expanded && (
        <div className={styles._renting_offer_scene}>
          <div className={styles._renting_offer_card_wrapper}>
            <div className={styles._renting_offer_element_container}>
              <div className={styles._renting_offer_element}>{rentingOffer.rentingOffer.km}</div>
              <div
                className={`${styles._renting_offer_label} ${styles._renting_offer_label_inline} `}
              >
                km/año
              </div>
            </div>
            <div className={styles._renting_offer_element_container}>
              <div className={styles._renting_offer_element}>{rentingOffer.rentingOffer.time}</div>
              <div
                className={`${styles._renting_offer_label} ${styles._renting_offer_label_inline} `}
              >
                meses
              </div>
            </div>
            <div className={styles._renting_offer_element_container}>
              <div className={styles._renting_offer_element}>
                {rentingOffer.rentingOffer.price} €
              </div>
              <div
                className={`${styles._renting_offer_label} ${styles._renting_offer_label_inline} `}
              >
                al mes
              </div>
            </div>

            <div onClick={() => setExpanded(!expanded)} className={styles._renting_offer_info}>
              Ver información completa
            </div>
          </div>
          {expanded && <div className={styles._flecha}></div>}
        </div>
      )}
      {expanded && (
        <div className={styles._expanded_wrapper}>
          <div className={styles._resumen_container}>
            <div className={styles._close_button_container}>
              <GreenButtonSmall design="outline" label="cerrar" onClick={handleClick} />
            </div>
            <img alt="photocar" src={photocar} className={styles._car_photo_container} />
            <div className={styles._spec_item_container_title}>{car}</div>
            <div className={styles._spec_item_container}>
              <ExtendedRentingItem
                label="Versión:"
                item={`${rentingOffer.rentingOffer.version.version}`}
              />
              <ExtendedRentingItem
                label="Estado:"
                item={`${rentingOffer.rentingOffer.newcar === true ? 'Nuevo' : 'Seminuevo'}`}
              />
              <ExtendedRentingItem
                label="Combustible:"
                item={`${rentingOffer.rentingOffer.fuel}`}
              />
              <ExtendedRentingItem
                label="Transmision:"
                item={`${rentingOffer.rentingOffer.transmision}`}
              />
              <ExtendedRentingItem
                label="Color:"
                item={
                  <div
                    className={styles._item_color_circle}
                    style={{ backgroundColor: `${rentingOffer.rentingOffer.color}` }}
                  />
                }
              />
            </div>
          </div>
          <hr className={styles._item_hr} />
          <div className={styles._spec_item_container_title}>Equipamiento destacado</div>
          {rentingOffer.rentingOffer.equipments.map((equipment) => {
            return (
              <div className={styles._tech_item_container} key={equipment._id}>
                <div className={styles._arrow_icon_container}>
                  <CheckIcon className={styles._arrow_icon} />
                </div>
                <div className={styles._tech_item}>{equipment.carequipment}</div>
              </div>
            );
          })}
          <hr className={styles._item_hr} />
          <div className={styles._spec_item_container_title}>Tu renting</div>

          <div className={styles._spec_item_container}>
            <ExtendedRentingItem
              label="Distancia max:"
              item={
                <div className={styles._renting_offer_element_container}>
                  <div className={styles._renting_offer_element}>
                    {rentingOffer.rentingOffer.km}
                  </div>
                  <div
                    className={`${styles._renting_offer_label} ${styles._renting_offer_label_inline} `}
                  >
                    km/año
                  </div>
                </div>
              }
            />
            <ExtendedRentingItem
              label="Duración:"
              item={
                <div className={styles._renting_offer_element_container}>
                  <div className={styles._renting_offer_element}>
                    {rentingOffer.rentingOffer.time}
                  </div>
                  <div
                    className={`${styles._renting_offer_label} ${styles._renting_offer_label_inline} `}
                  >
                    meses
                  </div>
                </div>
              }
            />

            <div className={styles._renting_price_container}>
              <div className={styles._renting_price_label}>Cuota mensual:</div>
              <div className={styles._renting_price_label}>{rentingOffer.rentingOffer.price} €</div>
            </div>
          </div>
          <hr className={styles._item_hr} />
          <div className={styles._spec_item_container_title}>Servicios incluidos </div>
          {rentingOffer.rentingOffer.goodies.map((goody) => {
            return (
              <div className={styles._tech_item_container} key={goody._id}>
                <div className={styles._arrow_icon_container}>
                  <CheckIcon className={styles._arrow_icon} />
                </div>
                <div className={styles._tech_item}>{goody.cargoodie}</div>
              </div>
            );
          })}
          <hr className={styles._item_hr} />
          <div className={styles._spec_item_container_title}>Distribuidor </div>
          <div className={styles._spec_item_container}>
            <ExtendedRentingItem
              label="Nombre de la empresa:"
              item={rentingOffer.rentingOffer.provider.companyname}
            />
            <ExtendedRentingItem
              label="Dirección:"
              item={rentingOffer.rentingOffer.provider.address}
            />
            <ExtendedRentingItem
              label="Teléfono:"
              item={`+ ${rentingOffer.rentingOffer.provider.phone}`}
            />
            <ExtendedRentingItem label="Email:" item={rentingOffer.rentingOffer.provider.email} />
            <ExtendedRentingItem label="Web:" item={rentingOffer.rentingOffer.provider.web} />
          </div>
          <div className={styles._button_container}>
            <button className={styles._filled_button}>"¡Resérvalo ya!"</button>
          </div>
        </div>
      )}
    </>
  );
};

export default RentingOfferCard;
