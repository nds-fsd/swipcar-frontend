import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CARS_LIST_PAGE } from '../../routers/routers';
import { useLocation } from 'react-router-dom';
import { API_DEV } from '../../utils/api.constants';
import { newRequest } from '../../utils/newRequest';
import useWindowSize from '../../constants/useWindowSize';
import styles from './homePage.module.css';
import CarListHomePage from '../../components/carLists/carListHomePage.view';
import Slider from 'react-slick';
import teslaImg from '../../components/assets/teslaImg.png';
import Opel from '../../components/assets/Opel.png';
import { ReactComponent as FiatLogo } from '../../components/assets/fiatLogo.svg';
import { ReactComponent as FordLogo } from '../../components/assets/fordLogo.svg';
import { ReactComponent as KiaLogo } from '../../components/assets/kiaLogo.svg';
import { ReactComponent as NissanLogo } from '../../components/assets/Nissan.svg';
import { ReactComponent as RenaultLogo } from '../../components/assets/renaultLogo.svg';
import { ReactComponent as TeslaLogo } from '../../components/assets/teslaLogo.svg';
import { ReactComponent as VwLogo } from '../../components/assets/vwLogo.svg';

const HomePage = () => {
  const location = useLocation();
  const windowSize = useWindowSize();
  const [rawListOfOffers, setRawListOfOffers] = useState([]);
  const [tabQuery, setTabQuery] = useState(location.search);
  useEffect(() => {
    newRequest({
      url: `${API_DEV.RENTING_OFFERS}search${tabQuery}`,
      method: 'POST',
      onSuccess: setRawListOfOffers,
    });
  }, [tabQuery, location]);

  function getUniqueOfferByModel(rawListOfOffers, key) {
    return [...new Map(rawListOfOffers.map((car) => [car.version.model[key], car])).values()];
  }
  const listOfOffers = getUniqueOfferByModel(rawListOfOffers, 'modelname');

  const reviewList = [
    {
      id: '1',
      reviewer: 'José-Manuel',
      car: 'Peugeot 3008',
      text:
        'La entrega del coche ha sido la acordada, incluso 2 semanas antes. Estoy muy contento con Ecocars. Volveré a renovar mi renting con ellos, seguro.',
    },
    {
      id: '2',
      reviewer: 'Patricia',
      car: 'Seat Arona',
      text:
        'Dentro de la cuota mensual está incluido el mantenimiento, el seguro... ¡Todo! Y eso me resulta muy cómodo, me despreocupo de las gestiones del coche y me limito a disfrutarlo.',
    },
    {
      id: '3',
      reviewer: 'Carlos',
      car: 'Kia Sportage',
      text:
        'Realizo muchos kilómetros y el renting me resulta más rentable a final del año. Estoy encantada con mi coche y, por ahora, las gestiones con Ecocars han ido genial.',
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={styles._home_page}>
      {windowSize === 'sm' ? (
        ''
      ) : (
        <Slider {...settings}>
          <div className={styles._scene_container}>
            <div className={styles._home_slider}>
              <img className={styles._slider_image} alt="Mokka-e" src={Opel} />
              <div className={styles._tags_container}>
                <div className={styles._tag_title_wrapper}>
                  <div className={styles._tag_title_container}>
                    <div className={styles._tag_title}> Exclusividad Ecocars</div>
                  </div>
                  <div className={styles.tag_title_container}>
                    <div className={styles._tag_title_green}>Descubre el nuevo OPEL Mokka-e</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles._scene_container}>
            <div className={styles._home_slider}>
              <img src={teslaImg} alt="tesla" className={styles._slider_image} />
              <div className={styles._tags_container}>
                <div className={styles._tag_title_wrapper}>
                  <div className={styles._tag_title_container}>
                    <div className={styles._tag_title}>Tesla Shooting-Break</div>
                  </div>
                  <div className={styles.tag_title_container}>
                    <div className={styles._tag_title_green}>Reserva ahora la version J-M.C.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      )}
      <div className={styles._offers_container}>
        <div className={styles._title}>Ofertas de renting destacadas</div>
        <div className={styles._offers_list_container}>
          <CarListHomePage listOfCars={listOfOffers} />
        </div>
        <div className={styles._button_container}>
          <Link to={CARS_LIST_PAGE}>
            <input className={styles._button} type="button" value="Ver todas las ofertas" />
          </Link>
        </div>
      </div>
      <div className={styles._logo_wrapper}>
        <div className={styles._subtitle}>Las marcas más demandadas</div>
        <div
          className={
            windowSize === 'sm'
              ? `${styles._logo_group_container_sm}`
              : `${styles._logo_group_container}`
          }
        >
          <div className={styles._logo_container}>
            <FiatLogo className={styles._logo} />
            <span className={styles._logo_name}>Fiat</span>
          </div>
          <div className={styles._logo_container}>
            <FordLogo className={styles._logo} />
            <span className={styles._logo_name}>Ford</span>
          </div>
          <div className={styles._logo_container}>
            <KiaLogo className={styles._logo} />
            <span className={styles._logo_name}>Kia</span>
          </div>
          <div className={styles._logo_container}>
            <NissanLogo className={styles._logo} />
            <span className={styles._logo_name}>Nissan</span>
          </div>
          <div className={styles._logo_container}>
            <RenaultLogo className={styles._logo} />
            <span className={styles._logo_name}>Renault</span>
          </div>
          <div className={styles._logo_container}>
            <TeslaLogo className={styles._logo} />
            <span className={styles._logo_name}>Tesla</span>
          </div>
          <div className={styles._logo_container}>
            <VwLogo className={styles._logo} />
            <span className={styles._logo_name}>VW</span>
          </div>
        </div>
      </div>
      <div className={styles._white_container}>
        <div className={styles._img_container}>
          <img
            className={styles._img_electric_car}
            alt="electric car"
            src="https://sigearth.com/wp-content/uploads/2015/05/Electric_Vehicle_Charging_Stations_web.jpg"
          />
        </div>
        <div className={styles._charging_container}>
          <div className={styles._subtitle}>Descubre todos los puntos de recarga</div>
          <iframe
            src="https://www.google.com/maps/d/embed?mid=11_9-d0ALhNmhxjuBs-vg4QVV9uU&ll=41.41046473683561%2C2.1532425543454847&z=12"
            title="Puntos de recarga para coches elétricos"
            width="520"
            height="280"
            style={{ border: '2px solid #CCC' }}
          ></iframe>
        </div>
      </div>
      <div className={styles._white_container}>
        <div className={styles._review_wrapper}>
          <div className={styles._subtitle}>¿Qué dicen nuestros clientes?</div>
          <div
            className={
              windowSize === 'sm'
                ? `${styles._review_list_container_sm}`
                : `${styles._review_list_container}`
            }
          >
            {reviewList.map((review) => {
              return (
                <div className={styles._review_container} key={review.reviewer}>
                  <div className={styles._reviewer_name}>{review.reviewer}</div>
                  <div className={styles._reviewer_car}>{review.car}</div>
                  <div className={styles._reviewer_text}>{review.text}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
