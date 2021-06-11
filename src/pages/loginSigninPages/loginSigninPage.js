import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';
import LoginUserComponent from '../../components/loginSignin/loginUserComponent.view';
import LoginProviderComponent from '../../components/loginSignin/loginProviderComponent.view';
import UserSigninComponent from '../../components/loginSignin/userSigninComponent.view';
import ProviderSigninComponent from '../../components/loginSignin/providerSigninComponent.view';
import styles from './loginSigninPage.module.css';
import fetchRequest from '../../utils/fetchRequest';
import { setUserSession, getUserToken } from '../../utils/auth';

const LoginSigninPage = ({ props }) => {
  const [changeForm, setChangeForm] = useState();
  const [move, setMove] = useState('');
  const [moveForm, setMoveForm] = useState('');
  const [firstClick, setFirstClick] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const location = useLocation();

  const fromHeaderProvider = location.state?.fromHeaderProvider;
  const fromCarProfile = location.state?.fromCarProfile;
  const carProfile = location.state?.carProfile;

  const handleForm = () => {
    setChangeForm(!changeForm);
    clearErrors();
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

  const onSubmitSigninUser = (data) => {
    clearErrors();
    setIsSubmitting(true);
    fetchRequest('POST', 'register', {
      body: { email: data.email, name: data.name, password: data.password, role: 'user' },
    })
      .then((res) => {
        setUserSession(res);
        getUserToken();
        setIsSubmitting(false);
        history.push('/renting');
      })
      .catch((error) => {
        Object.keys(error.response.error).forEach((key) => {
          setError(key, {
            type: 'manual',
            message: error.response.error[key],
          });
        });
        setIsSubmitting(false);
      });
  };

  const onSubmitSigninProvider = (data) => {
    clearErrors();
    setIsSubmitting(true);
    fetchRequest('POST', 'register', {
      body: {
        email: data.email,
        name: data.name,
        password: data.password,
        role: 'provider',
      },
    })
      .then((res) => {
        setUserSession(res);
        getUserToken();
        setIsSubmitting(false);
        history.push('/dashboard');
      })
      .catch((error) => {
        Object.keys(error.response.error).forEach((key) => {
          setError(key, {
            type: 'manual',
            message: error.response.error[key],
          });
        });
        setIsSubmitting(false);
      });
  };

  const onSubmitLogin = (data) => {
    clearErrors();
    setIsSubmitting(true);
    fetchRequest('POST', 'login', {
      body: { email: data.email, password: data.password },
    })
      .then((res) => {
        setUserSession(res);
        setIsSubmitting(false);
        if (res.user.role === 'user') {
          if (fromCarProfile) {
            return history.push(
              `/renting-car/${carProfile.brand}/${carProfile.model}/${carProfile.carId}`
            );
          } else {
            return history.push('/renting');
          }
        }

        if (res.user.role === 'provider' || 'admin') {
          history.push('/dashboard');
        }
      })
      .catch((error) => {
        Object.keys(error.response.error).forEach((key) => {
          setError(key, {
            type: 'manual',
            message: error.response.error[key],
          });
        });
        setIsSubmitting(false);
      });
  };
  return (
    <div className={styles._scene}>
      <div className={styles._wrapper}>
        {changeForm ? (
          <>
            {fromHeaderProvider ? (
              <ProviderSigninComponent
                move={move}
                moveForm={moveForm}
                handleForm={handleForm}
                handleSubmit={handleSubmit}
                onSubmitSigninProvider={onSubmitSigninProvider}
                register={register}
                errors={errors}
              />
            ) : (
              <UserSigninComponent
                move={move}
                moveForm={moveForm}
                handleForm={handleForm}
                handleSubmit={handleSubmit}
                onSubmitSigninUser={onSubmitSigninUser}
                register={register}
                errors={errors}
              />
            )}
          </>
        ) : (
          <>
            {fromHeaderProvider ? (
              <LoginProviderComponent
                move={move}
                moveForm={moveForm}
                handleForm={handleForm}
                handleSubmit={handleSubmit}
                onSubmitLogin={onSubmitLogin}
                register={register}
                errors={errors}
              />
            ) : (
              <LoginUserComponent
                move={move}
                moveForm={moveForm}
                handleForm={handleForm}
                handleSubmit={handleSubmit}
                onSubmitLogin={onSubmitLogin}
                register={register}
                errors={errors}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default LoginSigninPage;
