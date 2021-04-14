const PATH = 'http://localhost:3001/carprofile';

export const newCarProfileRequest = ({
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
      onSuccess(data);
    })
    .catch((error) => {
      console.error('There was an error!', error);
      onError(error);
    });
};
