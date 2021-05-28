import { getUserToken, removeSession } from './auth/index';
import API_DEV from '../utils/api.constants';

export const API_URL = API_DEV.API;

function ApiError(message, data, status) {
  let response = null;
  let isObject = false;

  try {
    response = JSON.parse(data);
    isObject = true;
  } catch (e) {
    response = data;
  }

  this.response = response;
  this.message = message;
  this.status = status;
  this.toString = function () {
    return `${this.message}\nResponse:\n${
      isObject ? JSON.stringify(this.response, null, 2) : this.response
    }`;
  };
}

const fetchRequest = (method = 'GET', path, userOptions = {}) => {
  const defaultOptions = {
    mode: 'cors',
    method,
  };

  const defaultHeaders = {
    'content-type': 'application/json',
    authorization: `Bearer ${getUserToken()}`,
  };

  const options = {
    ...defaultOptions,
    ...userOptions,
    headers: {
      ...defaultHeaders,
      ...userOptions.headers,
    },
  };

  const url = `${API_URL}/${path}`;

  const isFile = options.body instanceof File;

  if (options.body && typeof options.body === 'object' && !isFile) {
    options.body = JSON.stringify(options.body);
  }

  let response = null;

  return fetch(url, options)
    .then((responseObject) => {
      response = responseObject;

      // HTTP unauthorized
      if (response.status === 401) {
        // Handle unauthorized requests
        // Maybe redirect to login page?
        return { authError: true };
      }
      /* if (response.status === 409) {
        removeSession();
      } */
      return response.json();
    })
    .then((parsedResponse) => {
      if (response.status < 200 || response.status >= 300) {
        throw parsedResponse;
      }
      return parsedResponse;
    })
    .catch((error) => {
      if (response) {
        throw new ApiError(
          `Request failed with status ${response.status}.`,
          error,
          response.status
        );
      } else {
        throw new ApiError(error.toString(), null, 'REQUEST_FAILED');
      }
    });
};

export default fetchRequest;
