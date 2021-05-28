import { API_DEV } from '../utils/api.constants';

const PATH = API_DEV.API;

export const carsLengthRequest = ({
  url,
  body,
  method = 'GET',
  params,
  onSuccess = () => {},
  onError = () => {},
}) => {
  let parsedUrl = `${PATH}${url}`;
  if (params) {
    parsedUrl = `${parsedUrl}&${params}`;
  }
  fetch(parsedUrl, {
    method,
    body,
  })
    .then(async (response) => {
      const data = await response.json();

      if (!response.ok) {
        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
      }
      onSuccess(data.length);
    })
    .catch((error) => {
      console.error('There was an error!', error);
      onError(error);
    });
};
