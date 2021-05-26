import { API_DEV } from './api.constants';

export const CreateCarRequestAll = async ({ toEdit, onSuccess = () => {} }) => {
  let datas = [
    {
      endpoint: API_DEV.BRANDS,
      key: 'brand',
    },
    {
      endpoint: API_DEV.TYPE,
      key: 'cartype',
    },
    {
      endpoint: API_DEV.TRANSMISION,
      key: 'transmision',
    },
    {
      endpoint: API_DEV.FUEL,
      key: 'fuel',
    },
    {
      endpoint: API_DEV.ECOMARK,
      key: 'ecomark',
    },
    {
      endpoint: API_DEV.COLOR,
      key: 'color',
    },
  ];
  if (toEdit) {
    datas = [
      ...datas,
      {
        endpoint: API_DEV.MODELS,
        key: 'model',
      },
    ];
  }

  const fetchData = await datas.map((dataToFetch) => {
    return fetch(API_DEV.API + dataToFetch.endpoint).then((res) => {
      if (res.status === 200) {
        return res.json();
      }
      return Promise.reject();
    });
  });

  const handlePair = (arrayDatas, index) => {
    const keyName = `${datas[index]?.key}`;
    const toSend = { [keyName]: arrayDatas };
    onSuccess(toSend);
  };
  Promise.all(fetchData)
    .then((values) => values.map((res, index) => handlePair(res, index)))
    .catch(console.log('error!'));
};

export const CreateCarRequestModel = ({ watchBrand, onSuccess = () => {} }) => {
  const options = {
    method: 'POST',
    headers: new Headers({
      Accept: 'application/json',
      'Content-type': 'application/json',
    }),
    mode: 'cors',
  };
  const url = API_DEV.API + API_DEV.MODELS + `bybrand/${watchBrand}`;
  fetch(url, options)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
      return Promise.reject();
    })
    .then((res) => {
      onSuccess({ model: res });
    })
    .catch((err) => {
      console.log(err);
    });
};
export const CreateCarRequestVersion = ({ watchModel, onSuccess = () => {} }) => {
  const options = {
    method: 'POST',
    headers: new Headers({
      Accept: 'application/json',
      'Content-type': 'application/json',
    }),
    mode: 'cors',
  };
  const url = API_DEV.API + API_DEV.VERSION + `bymodel/${watchModel}`;
  fetch(url, options)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
      return Promise.reject();
    })
    .then((res) => {
      onSuccess({ carVersion: res });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const GetDataDashboardTable = ({ queryGetData, onSuccess = () => {} }) => {
  const url = API_DEV.API + API_DEV.CARPROFILE + `dataOptions`;
  const body = queryGetData;
  const options = {
    method: 'POST',
    headers: new Headers({
      Accept: 'application/json',
      'Content-type': 'application/json',
    }),
    mode: 'cors',
    body: JSON.stringify(body),
  };
  fetch(url, options)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
      return Promise.reject();
    })
    .then((res) => {
      onSuccess(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
export const GetDataDashboardTableUsers = ({ queryGetData, onSuccess = () => {} }) => {
  const url = API_DEV.API + API_DEV.USERS;
  fetch(url)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
      return Promise.reject();
    })
    .then((res) => {
      onSuccess(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
export const GetDataDashboardTableUserProvider = ({ toEdit, onSuccess = () => {} }) => {
  const url = API_DEV.API + API_DEV.USERS + toEdit;
  fetch(url)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
      return Promise.reject();
    })
    .then((res) => {
      onSuccess(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
export const NewUser = ({ dataAPI, onSuccess = () => {} }) => {
  const url = API_DEV.API + API_DEV.USERS;
  const body = dataAPI;
  const options = {
    method: 'POST',
    headers: new Headers({
      Accept: 'application/json',
      'Content-type': 'application/json',
    }),
    mode: 'cors',
    body: JSON.stringify(body),
  };
  fetch(url, options)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
      return Promise.reject();
    })
    .then((res) => {
      onSuccess(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
export const EditUser = ({ toEdit, dataAPI, onSuccess = () => {} }) => {
  const url = API_DEV.API + API_DEV.USERS + toEdit;
  const body = dataAPI;
  const options = {
    method: 'PUT',
    headers: new Headers({
      Accept: 'application/json',
      'Content-type': 'application/json',
    }),
    mode: 'cors',
    body: JSON.stringify(body),
  };
  fetch(url, options)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
      return Promise.reject();
    })
    .then((res) => {
      onSuccess(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
export const NewProvider = ({ dataAPI, onSuccess = () => {} }) => {
  const url = API_DEV.API + API_DEV.PROVIDERS;
  const body = dataAPI;
  const options = {
    method: 'POST',
    headers: new Headers({
      Accept: 'application/json',
      'Content-type': 'application/json',
    }),
    mode: 'cors',
    body: JSON.stringify(body),
  };
  fetch(url, options)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
      return Promise.reject();
    })
    .then((res) => {
      onSuccess(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
export const EditProvider = ({ toEdit, dataAPI, onSuccess = () => {} }) => {
  const url = API_DEV.API + API_DEV.PROVIDERS + toEdit;
  const body = dataAPI;
  const options = {
    method: 'PUT',
    headers: new Headers({
      Accept: 'application/json',
      'Content-type': 'application/json',
    }),
    mode: 'cors',
    body: JSON.stringify(body),
  };
  fetch(url, options)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
      return Promise.reject();
    })
    .then((res) => {
      onSuccess(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const GetMyRentings = ({ dataUser, onSuccess = () => {} }) => {
  const url = API_DEV.API + API_DEV.RENTING_OFFERS + dataUser;
  fetch(url)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
      return Promise.reject();
    })
    .then((res) => {
      onSuccess(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const GetDataVersion = ({ toEdit, onSuccess = () => {} }) => {
  const url = API_DEV.API + API_DEV.VERSION + toEdit;
  fetch(url)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
      return Promise.reject();
    })
    .then((res) => {
      onSuccess(res);
      console.log('RES VERSION ', res);
    })
    .catch((err) => {
      console.log(err);
    });
};

// const dataTable = fetch(API_DEV.API + API_DEV.CARPROFILE + `dataOptions`, options).then((res) => {
//   if (res.status === 200) {
//     return res.json();
//   }
//   return Promise.reject();
// });
// const lengthData = fetch(API_DEV.API + API_DEV.CARPROFILE + `lengthData`).then((res) => {
//   if (res.status === 200) {
//     return res.json();
//   }
//   return Promise.reject();
// });

// Promise.all(dataTable, lengthData)
//   .then((res) => {
//     // onSuccess(res);
//     console.log('RES DASHBOARD ', res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
