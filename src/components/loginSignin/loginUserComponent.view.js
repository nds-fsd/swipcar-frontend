import React from 'react';
import styles from '../../pages/loginSigninPages/loginSigninPage.module.css';
import LoginSigninInput from './loginSigninInput';
import GreenButton from '../buttons/greenButton';
import useWindowSize from '../../constants/useWindowSize';

const LoginComponent = ({
  move,
  moveForm,
  handleForm,
  handleSubmit,
  onSubmitLogin,
  register,
  errors,
}) => {
  const windowSize = useWindowSize();
  return (
    <>
      {(windowSize === 'xlg' || windowSize === 'lg' || windowSize === 'md') && (
        <>
          <div className={`${styles._left_login_container} ${styles[moveForm]}`}>
            <div className={styles._left_login_title_container}>Entrar en EcoCars</div>
            <form onSubmit={handleSubmit(onSubmitLogin)}>
              <div className={styles._input_container}>
                <LoginSigninInput
                  label="Introduce tu email"
                  placeholder="email"
                  name="email"
                  type="email"
                  autoComplete="off"
                  {...register('email', { required: true })}
                />
              </div>
              <div className={styles._error_message}>{errors.email && 'Email requerido'}</div>
              <div className={styles._input_container}>
                <LoginSigninInput
                  label="Introduce tu contraseña"
                  placeholder="**********"
                  name="password"
                  type="password"
                  autoComplete="off"
                  {...register('password', {
                    required: 'You must specify a password',
                  })}
                />
              </div>
              <div className={styles._forgot_password_container}>
                <div className={styles._text_forgot_password}>¿Contraseña olvidada?</div>
              </div>
              <div className={styles._error_message}>{errors.password && 'Password requerido'}</div>
              <div className={styles._button_container}>
                <GreenButton design="outline" label="Entrar" />
              </div>
            </form>
          </div>
          <div className={`${styles._right_login_container} ${styles[move]}`}>
            <div className={styles._right_login_title_container}>¡Estimado usuario!</div>
            <div className={styles._right_login_title_container}>¡Bienvenido de nuevo!</div>
            <div className={styles._button_container}>
              <GreenButton design="filled" label="Registrarse" onClick={() => handleForm()} />
            </div>
          </div>
        </>
      )}
      {windowSize === 'sm' && (
        <>
          <form onSubmit={handleSubmit(onSubmitLogin)}>
            <div className={styles._input_container}>
              <LoginSigninInput
                label="Introduce tu email"
                placeholder="email"
                name="email"
                type="email"
                autoComplete="off"
                {...register('email', { required: true })}
              />
            </div>
            <div className={styles._error_message}>{errors.email && 'Email requerido'}</div>
            <div className={styles._input_container}>
              <LoginSigninInput
                label="Introduce tu contraseña"
                placeholder="**********"
                name="password"
                type="password"
                autoComplete="off"
                {...register('password', {
                  required: 'You must specify a password',
                })}
              />
            </div>
            <div className={styles._forgot_password_container}>
              <div className={styles._text_forgot_password}>¿Contraseña olvidada?</div>
            </div>
            <div className={styles._error_message}>{errors.password && 'Password requerido'}</div>
            <div className={styles._button_container}>
              <GreenButton design="outline" label="Entrar" />
            </div>
          </form>
          <div className={styles._bottom_container}>
            <div className={styles._bottom_login_title_container}>¡Bienvenido de nuevo!</div>

            <div className={styles._login_button_container_sm}>
              <GreenButton design="filled" label="Registrarse" onClick={() => handleForm()} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default LoginComponent;
