// import { useState } from 'react';
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
      onSuccess({ version: res });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const GetDataVersionTable = ({ queryGetData, onSuccess = () => {} }) => {
  const url = API_DEV.API + API_DEV.VERSION + `dataOptions`;
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

export const GetModelVersion = async ({ brand, model, onSuccess = () => {} }) => {
  let datas = [
    {
      endpoint: `${API_DEV.MODELS}bybrand/${brand}`,
      key: 'model',
    },
    {
      endpoint: `${API_DEV.VERSION}bymodel/${model}`,
      key: 'version',
    }
  ];

  const fetchData = await datas.map((dataToFetch) => {
    const options = {
      method: 'POST',
      headers: new Headers({
        Accept: 'application/json',
        'Content-type': 'application/json',
      }),
      mode: 'cors',
    };
    return fetch(API_DEV.API + dataToFetch.endpoint, options)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
      return Promise.reject();
    });
  });

  const handlePair = (arrayDatas, index) => {
    const keyName = `${datas[index]?.key}`;
    const toSend = { [keyName]: arrayDatas };
    console.log('toSend  :' , toSend);
    onSuccess(toSend);
  };
  Promise.all(fetchData)
    .then((values) => values.map((res, index) => handlePair(res, index)))
    .catch(console.log('error!'));

}



export const RentingGetDataOptions = async ({ onSuccess = () => {} }) => {
  let datas = [
    {
      endpoint: API_DEV.BRANDS,
      key: 'brand',
    },
    {
      endpoint: API_DEV.GOODY,
      key: 'goody',
    },
    {
      endpoint: API_DEV.EQUIPMENT,
      key: 'equipment',
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
      endpoint: API_DEV.COLOR,
      key: 'color',
    }    
  ];
  // if (toEdit) {
  //   datas = [
  //     ...datas,
  //     {
  //       endpoint: API_DEV.MODELS,
  //       key: 'model',
  //     },
  //     {
  //       endpoint: API_DEV.VERSION,
  //       key: 'version',
  //     }
  //   ];
  // }

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
    console.log('toSend  :' , toSend);
    onSuccess(toSend);
  };
  Promise.all(fetchData)
    .then((values) => values.map((res, index) => handlePair(res, index)))
    .catch(console.log('error!'));
};

export const GetAllRentingsOffers = ({ queryGetData, onSuccess = () => {} }) => {
  const url = API_DEV.API + API_DEV.RENTING_OFFERS + `allRentingOffers`;
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
      // console.log('GetAllRentingsOffers  :', res);
      onSuccess(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const GetMyRentingsOffers = async ({ queryGetData,  providerTemp, onSuccess = () => {} }) => {
  let myRentingOffers = [];
  fetch(API_DEV.API + API_DEV.PROVIDERS + providerTemp)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
      return Promise.reject();
    })
    .then((res) => {
      myRentingOffers = res.rentingoffers;
      console.log('myRentingOffers : ', myRentingOffers);
    })
    .catch((err) => {
      console.log(err);
    });

  const fetchData = await myRentingOffers.map((dataToFetch) => {
    return fetch(API_DEV.API + API_DEV.RENTING_OFFERS + dataToFetch).then((res) => {
      if (res.status === 200) {
        return res.json();
      }
      return Promise.reject();
    });
  });
  Promise.all(fetchData)
    .then((values) => values.map((res) => console.log('fetchData  : ', res)))
    // .then((values) => values.map((res) => onSuccess(res)))
    .catch(console.log('error!'));
};

export const GetDataRenting = ({ toEdit, onSuccess = () => {} }) => {
  const url = API_DEV.API + API_DEV.RENTING_OFFERS + toEdit;
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
