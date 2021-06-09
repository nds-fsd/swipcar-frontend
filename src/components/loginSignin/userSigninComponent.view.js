import React from 'react';
import styles from '../../pages/loginSigninPages/loginSigninPage.module.css';
import LoginSigninInput from './loginSigninInput';
import GreenButton from '../buttons/greenButton';
import useWindowSize from '../../constants/useWindowSize';

const UserSigninComponent = ({
  move,
  moveForm,
  handleForm,
  handleSubmit,
  onSubmitSigninUser,
  register,
  errors,
  watch,
}) => {
  const windowSize = useWindowSize();
  return (
    <>
      {(windowSize === 'xlg' || windowSize === 'lg' || windowSize === 'md') && (
        <>
          <div className={`${styles._left_login_container} ${styles[moveForm]}`}>
            <div className={styles._left_login_title_container}>
              ¿Quieres aprovecharte de las mejores ofertas?
            </div>
            <div className={styles._left_login_title_container}>¡Registrate ahora!</div>
            <form onSubmit={handleSubmit(onSubmitSigninUser)}>
              <div className={styles._input_container}>
                <LoginSigninInput
                  label="Crea tu nombre de usuario"
                  placeholder="usuario"
                  name="name"
                  type="text"
                  autoComplete="off"
                  {...register('name', { required: 'Indica un nombre' })}
                />
                <div className={styles._error_message}>
                  {errors.name ? errors.name.message : ''}
                </div>
              </div>
              <div className={styles._input_container}>
                <LoginSigninInput
                  label="Introduce tu email"
                  placeholder="email"
                  name="email"
                  type="email"
                  /* autoComplete="off" */
                  {...register('email', { required: 'Indica un email' })}
                />
                <div className={styles._error_message}>
                  {errors.email ? errors.email.message : ''}
                </div>
              </div>
              <div className={styles._input_container}>
                <LoginSigninInput
                  label="Introduce una contraseña"
                  placeholder="**********"
                  name="password"
                  type="password"
                  autoComplete="off"
                  {...register('password', {
                    required: 'Indica una contraseña',
                  })}
                />
                <div className={styles._error_message}>
                  {errors.password ? errors.password.message : ''}
                </div>
              </div>
              <div className={styles._input_container}>
                <LoginSigninInput
                  label="Confirma la contraseña"
                  placeholder="**********"
                  name="confirmPassword"
                  type="password"
                  autoComplete="off"
                  {...register('password', {
                    message: 'Las contraseñas no coinciden',
                  })}
                />
                <div className={styles._error_message}>
                  {errors.confirmPassword ? errors.confirmPassword.message : ''}
                </div>
              </div>
              <div className={styles._button_container}>
                <GreenButton type="submit" design="outline" label="Registrarse" />
              </div>
            </form>
          </div>
          <div className={`${styles._right_login_container} ${styles[move]}`}>
            <div className={styles._right_login_title_container}>¡Bienvenido en Ecocars!</div>

            <div className={styles._button_container}>
              <div className={styles._right_login_subtitle_container}>¿Ya registrado?</div>
              <GreenButton
                design="filled"
                type="button"
                label="Entrar"
                onClick={() => handleForm()}
              />
            </div>
          </div>
        </>
      )}
      {windowSize === 'sm' && (
        <>
          <form onSubmit={handleSubmit(onSubmitSigninUser)}>
            <div className={styles._input_container}>
              <LoginSigninInput
                label="Crea tu nombre de usuario"
                placeholder="usuario"
                name="name"
                type="text"
                autoComplete="off"
                {...register('name', { required: 'Indica un nombre' })}
              />
              <div className={styles._error_message}>{errors.name ? errors.name.message : ''}</div>
            </div>
            <div className={styles._input_container}>
              <LoginSigninInput
                label="Introduce tu email"
                placeholder="email"
                name="email"
                type="email"
                /* autoComplete="off" */
                {...register('email', { required: 'Indica un email' })}
              />
              <div className={styles._error_message}>
                {errors.email ? errors.email.message : ''}
              </div>
            </div>
            <div className={styles._input_container}>
              <LoginSigninInput
                label="Introduce una contraseña"
                placeholder="**********"
                name="password"
                type="password"
                autoComplete="off"
                {...register('password', {
                  required: 'Indica una contraseña',
                })}
              />
              <div className={styles._error_message}>
                {errors.password ? errors.password.message : ''}
              </div>
            </div>
            <div className={styles._input_container}>
              <LoginSigninInput
                label="Confirma la contraseña"
                placeholder="**********"
                name="confirmPassword"
                type="password"
                autoComplete="off"
                {...register('password', {
                  message: 'Las contraseñas no coinciden',
                })}
              />
              <div className={styles._error_message}>
                {errors.confirmPassword ? errors.confirmPassword.message : ''}
              </div>
            </div>
            <div className={styles._button_container}>
              <GreenButton type="submit" design="outline" label="Registrarse" />
            </div>
          </form>
          <div className={styles._bottom_signin_container}>
            <div className={styles._bottom_login_title_container}>¡Bienvenido en Ecocars!</div>
            <div className={styles._signin_button_container}>
              <GreenButton
                design="filled"
                type="button"
                label="Entrar"
                onClick={() => handleForm()}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default UserSigninComponent;
