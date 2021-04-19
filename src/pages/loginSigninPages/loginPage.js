import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import LoginSigninInput from '../../components/loginSigninInput';
import styles from './loginSignin.module.css';
import LoginSigninButton from '../../components/buttons/loginSigninButton';

const LoginPage = () => {
  /* const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm(); */

  /* const onSubmit = (data) => {
    alert(JSON.stringify(data));
  }; */

  return (
    <div className={styles._scene}>
      <div className={styles._wrapper2}>
        <div className={styles._left_login_container}>left login container</div>
        <div className={styles._right_login_container}>right login container</div>
        <div className={styles._right_signin_container}>right signin container</div>
        <div className={styles._left_signin_container}>left signin container</div>
      </div>
    </div>
  );
};

export default LoginPage;

/* <div className={styles._wrapper}>
        <div className={styles._login_left_container}>
          <div className={styles._login_left_title_container}>Entrar en EcoCars</div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles._login_input_container}>
              <LoginSigninInput
                label="Introduce tu email"
                placeholder="email"
                name="email"
                type="email"
                refs={register('email', { required: true })}
              />
            </div>
            {errors.email && 'email requerido'}
            <div className={styles._login_input_container}>
              <LoginSigninInput
                label="Introduce tu contraseña"
                placeholder="**********"
                name="password"
                type="password"
              />
            </div>
            <div className={styles._login_forgot_password_container}>
              <div className={styles._login_text_forgot_password}>¿Contraseña olvidada?</div>
            </div>
            <div className={styles._login_button_container}>
              <LoginSigninButton type="outline" label="Login" />
            </div>
          </form>
        </div>
        <div className={styles._login_right_container}>
          <div className={styles._login_right_title_container}>¡Bienvenido de nuevo!</div>
          <div className={styles._login_button_container}>
            <LoginSigninButton type="filled" label="Sign in" />
          </div>
        </div> 
    </div>*/
