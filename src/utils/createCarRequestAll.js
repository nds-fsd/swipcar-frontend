import { API_DEV } from './api.constants';

export const CreateCarRequestAll = ({ onSuccess = () => {} }) => {
  fetch(API_DEV.API + API_DEV.BRANDS)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
      return Promise.reject();
    })
    .then((res) => {
      console.log('brands', res);
      onSuccess(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
