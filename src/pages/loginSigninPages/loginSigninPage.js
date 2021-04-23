import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import LoginSigninInput from '../../components/loginSigninInput';
import styles from './loginSigninPage.module.css';
import LoginSigninButton from '../../components/buttons/loginSigninButton';
import fetchRequest from '../../utils/fetchRequest';
import { setSessionUser, getUserToken } from '../../utils/auth';

const LoginSigninPage = () => {
  const [changeForm, setChangeForm] = useState();
  const [move, setMove] = useState('');
  const [moveForm, setMoveForm] = useState('');
  const [firstClick, setFirstClick] = useState(false);
  const [userCreated, setUserCreated] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // const ref = React.createRef();

  const handleForm = () => {
    setChangeForm(!changeForm);
  };

  useEffect(() => {
    if (firstClick) {
      if (!changeForm) {
        setMove('_login_left_to_right');
        setMoveForm('_form_right_to_left');
      } else {
        setMove('_login_right_to_left');
        setMoveForm('_form_left_to_right');
      }
    } else {
      setFirstClick(!firstClick);
    }
  }, [changeForm, firstClick]);

  const history = useHistory();

  const {
    register,
    formState: { errors },
    setError,
    clearErrors,
    handleSubmit,
  } = useForm();

  

  const onSubmitSignin = (data) => {
    console.log('submitting');
    clearErrors();
    setIsSubmitting(true);
    fetchRequest('POST', 'register', {
      body: { email: data.email, name: data.name, password: data.password },
    })
      .then((res) => {
        setSessionUser(res);
        setIsSubmitting(false);
        history.push('/renting');
      })
      .catch((error) => {
        console.log(error);
        Object.keys(error.response.error).forEach((key) => {
          setError(key, {
            type: 'manual',
            message: error.response.error[key],
          });
        });
        setIsSubmitting(false);
      });
  };

  const onSubmitLogin = (data) => {};

  return (
    <div className={styles._scene}>
      <div className={styles._wrapper}>
        {changeForm ? (
          <>
            <div className={`${styles._left_login_container} ${styles[moveForm]}`}>
              <div className={styles._left_login_title_container}>¡Registrate ahora!</div>
              <form onSubmit={handleSubmit(onSubmitSignin)}>
                <div className={styles._input_container}>
                  <LoginSigninInput
                    label="Crea tu nombre de usuario"
                    placeholder="Antonio"
                    name="name"
                    type="text"
                    autoComplete="off"
                    {...register('name', { required: true })}
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
                    {...register('email', { required: true })}
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
                      required: 'You must specify a password',
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
                      message: 'true',
                    })}
                  />
                  <div className={styles._error_message}>
                    {errors.confirmPassword ? errors.confirmPassword.message : ''}
                  </div>
                </div>
                <div className={styles._button_container}>
                  <LoginSigninButton type="submit" design="outline" label="Sign in" />
                </div>
              </form>
            </div>
            <div className={`${styles._right_login_container} ${styles[move]}`}>
              <div className={styles._right_login_title_container}>¡Bienvenido en Ecocars!</div>
              <div className={styles._button_container}>
                <LoginSigninButton
                  design="filled"
                  type="button"
                  label="move"
                  onClick={() => handleForm()}
                />
              </div>
            </div>
          </>
        ) : (
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
                    refs={register('email', { required: true })}
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
                    refs={register('password', {
                      required: 'You must specify a password',
                      minLength: {
                        value: 8,
                        message: 'Password must have at least 8 characters',
                      },
                    })}
                  />
                </div>
                <div className={styles._forgot_password_container}>
                  <div className={styles._text_forgot_password}>¿Contraseña olvidada?</div>
                </div>
                <div className={styles._error_message}>
                  {errors.password && 'Password requerido'}
                </div>
                <div className={styles._button_container}>
                  <LoginSigninButton design="outline" label="Login" />
                </div>
              </form>
            </div>
            <div className={`${styles._right_login_container} ${styles[move]}`}>
              <div className={styles._right_login_title_container}>¡Bienvenido de nuevo!</div>
              <div className={styles._button_container}>
                <LoginSigninButton design="filled" label="move" onClick={() => handleForm()} />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginSigninPage;
