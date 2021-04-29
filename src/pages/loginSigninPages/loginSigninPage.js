import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';
import LoginComponent from '../../components/loginSignin/loginComponent.view';
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
    console.log('submitting');
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

  const onSubmitSigninProvider = (data) => {
    console.log('submitting');
    clearErrors();
    setIsSubmitting(true);
    fetchRequest('POST', 'register', {
      body: {
        companyname: data.companyname,
        email: data.email,
        name: data.name,
        password: data.password,
        role: 'admin',
      },
    })
      .then((res) => {
        setUserSession(res);
        getUserToken();
        setIsSubmitting(false);
        history.push('/user/dashboard');
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

  const onSubmitLogin = (data) => {
    clearErrors();
    setIsSubmitting(true);
    fetchRequest('POST', 'login', {
      body: { email: data.email, password: data.password },
    })
      .then((res) => {
        setUserSession(res);
        console.log(res);
        setIsSubmitting(false);
        if (res.user.role === 'user') {
          history.push('/renting');
        }
        if (res.user.role === 'admin') {
          history.push('/user/dashboard');
        }
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
            <LoginComponent
              move={move}
              moveForm={moveForm}
              handleForm={handleForm}
              handleSubmit={handleSubmit}
              onSubmitLogin={onSubmitLogin}
              register={register}
              errors={errors}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default LoginSigninPage;
