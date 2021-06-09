import React from 'react';
import styles from './footer.module.css';
import useWindowSize from '../../constants/useWindowSize';

const Footer = () => {
  const windowSize = useWindowSize();
  return (
    <>
      {windowSize !== 'sm' ? (
        <div className={styles._footer}>
          <div className={styles._footer_wrapper}>
            <div className={styles._footer_container}>
              <div className={styles._footer_container_title}>Ecocars</div>
              <span className={styles._footer_container_item}>Nosotros</span>
              <span className={styles._footer_container_item}>Contacto</span>
              <span className={styles._footer_container_item}>Prensa</span>
              <span className={styles._footer_container_item}>Blog</span>
            </div>
            <div className={styles._footer_container}>
              <div className={styles._footer_container_title}>Conecta</div>
              <span className={styles._footer_container_item}>Linkedin</span>
              <span className={styles._footer_container_item}>Twitter</span>
              <span className={styles._footer_container_item}>Facebook</span>
              <span className={styles._footer_container_item}>Instagram</span>
            </div>
            <div className={styles._footer_container}>
              <div className={styles._footer_container_title}>Usuarios</div>
              <span className={styles._footer_container_item}>Cuenta</span>
              <span className={styles._footer_container_item}>Condiciones</span>
              <span className={styles._footer_container_item}>Asistencia</span>
              <span className={styles._footer_container_item}>FAQs</span>
            </div>
            <div className={styles._footer_container}>
              <div className={styles._footer_container_title}>Proveedores</div>
              <span className={styles._footer_container_item}>Perfil</span>
              <span className={styles._footer_container_item}>Ayuda</span>
              <span className={styles._footer_container_item}>Contacto</span>
              <span className={styles._footer_container_item}>FAQs</span>
            </div>
          </div>
          <hr className={styles._hr} />
          <div className={styles._bottom_footer}>
            <div className={styles._bottom_footer_item}>©Copyright Ecocars 2021</div>
          </div>
        </div>
      ) : (
        <div className={styles._footer}>
          <div className={styles._footer_wrapper_sm}>
            <div className={styles._footer_container_sm}>
              <div className={styles._footer_container_title}>Ecocars</div>
              <span className={styles._footer_container_item}>Nosotros</span>
              <span className={styles._footer_container_item}>Contacto</span>
              <span className={styles._footer_container_item}>Prensa</span>
              <span className={styles._footer_container_item}>Blog</span>
            </div>
            <div className={styles._footer_container_sm}>
              <div className={styles._footer_container_title}>Conecta</div>
              <span className={styles._footer_container_item}>Linkedin</span>
              <span className={styles._footer_container_item}>Twitter</span>
              <span className={styles._footer_container_item}>Facebook</span>
              <span className={styles._footer_container_item}>Instagram</span>
            </div>
          </div>
          <div className={styles._footer_wrapper_sm}>
            <div className={styles._footer_container_sm}>
              <div className={styles._footer_container_title}>Usuarios</div>
              <span className={styles._footer_container_item}>Cuenta</span>
              <span className={styles._footer_container_item}>Condiciones</span>
              <span className={styles._footer_container_item}>Asistencia</span>
              <span className={styles._footer_container_item}>FAQs</span>
            </div>
            <div className={styles._footer_container_sm}>
              <div className={styles._footer_container_title}>Proveedores</div>
              <span className={styles._footer_container_item}>Perfil</span>
              <span className={styles._footer_container_item}>Ayuda</span>
              <span className={styles._footer_container_item}>Contacto</span>
              <span className={styles._footer_container_item}>FAQs</span>
            </div>
          </div>
          <div className={styles._bottom_footer}>
            <div className={styles._bottom_footer_item}>©Copyright Ecocars 2021</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
