import { API_DEV } from './api.constants';

export const CreateCarRequestAll = async ({ onSuccess = () => {} }) => {
  const datas = [
    {
      endpoint: API_DEV.BRANDS,
      key: 'Brand',
    },
    {
      endpoint: API_DEV.TYPE,
      key: 'CarType',
    },
    {
      endpoint: API_DEV.TRANSMISION,
      key: 'Transmision',
    },
    {
      endpoint: API_DEV.FUEL,
      key: 'Fuel',
    },
    {
      endpoint: API_DEV.PUERTAS,
      key: 'Puertas',
    },
    {
      endpoint: API_DEV.ECOMARK,
      key: 'EcoMark',
    },
    {
      endpoint: API_DEV.COLOR,
      key: 'Color',
    },
    {
      endpoint: API_DEV.GOODY,
      key: 'Goodies',
    },
    {
      endpoint: API_DEV.EQUIPMENT,
      key: 'EquipamientoDestacado',
    },
  ];

  const fetchData = await datas.map((dataToFetch) => {
    return fetch(API_DEV.API + dataToFetch.endpoint).then((res) => {
      if (res.status === 200) {
        return res.json();
      }
      return Promise.reject();
    });
  });

  const handlePair = (arrayDatas, index) => {
    // console.log('index', index);
    const keyName = `${datas[index]?.key}`;
    // console.log('keyName', keyName);
    const toSend = { [keyName]: arrayDatas };
    onSuccess(toSend);
  };

  Promise.all(fetchData)
    .then((values) => values.map((res, index) => handlePair(res, index)))
    .catch(console.log('eeeeeeeeeeeeeeeeeeerrrooooooooooooooooorrr!!!!!'));

  // const fetchedData = await datas.map((dataToFetch) => ({
  //   key: dataToFetch.key,
  //   data: fetch(API_DEV.API + dataToFetch.endpoint)
  //     .then((res) => {
  //       if (res.status === 200) {
  //         return res.json();
  //       }
  //       return Promise.reject();
  //     })
  //     .then((res) => {
  //       onSuccess({ AllDataOptions: { [dataToFetch.key]: [res] } });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     }),
  // }));

  // debugger;

  // onSuccess(fetchedData);

  /*fetch(API_DEV.API + API_DEV.BRANDS)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
      return Promise.reject();
    })
    .then((res) => {
      onSuccess({ Brand: res });
    })
    .catch((err) => {
      console.log(err);
    });

  fetch(API_DEV.API + API_DEV.TYPE)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
      return Promise.reject();
    })
    .then((res) => {
      onSuccess({ CarType: res });
    })
    .catch((err) => {
      console.log(err);
    });

  fetch(API_DEV.API + API_DEV.TRANSMISION)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
      return Promise.reject();
    })
    .then((res) => {
      onSuccess({ Transmision: res });
    })
    .catch((err) => {
      console.log(err);
    });

  fetch(API_DEV.API + API_DEV.FUEL)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
      return Promise.reject();
    })
    .then((res) => {
      onSuccess({ Fuel: res });
    })
    .catch((err) => {
      console.log(err);
    });

  fetch(API_DEV.API + API_DEV.PUERTAS)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
      return Promise.reject();
    })
    .then((res) => {
      onSuccess({ Puertas: res });
    })
    .catch((err) => {
      console.log(err);
    });

  fetch(API_DEV.API + API_DEV.ECOMARK)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
      return Promise.reject();
    })
    .then((res) => {
      onSuccess({ EcoMark: res });
    })
    .catch((err) => {
      console.log(err);
    });

  fetch(API_DEV.API + API_DEV.COLOR)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
      return Promise.reject();
    })
    .then((res) => {
      onSuccess({ Color: res });
    })
    .catch((err) => {
      console.log(err);
    });

  fetch(API_DEV.API + API_DEV.GOODY)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
      return Promise.reject();
    })
    .then((res) => {
      onSuccess({ Goodies: res });
    })
    .catch((err) => {
      console.log(err);
    });

  fetch(API_DEV.API + API_DEV.EQUIPMENT)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
      return Promise.reject();
    })
    .then((res) => {
      onSuccess({ EquipamientoDestacado: res });
    })
    .catch((err) => {
      console.log(err);
    });*/
};
export const CreateCarRequestModel = ({ watchBrand, onSuccess = () => {} }) => {
  const url = API_DEV.API + API_DEV.MODELS + `bybrand/${watchBrand}`;
  fetch(url)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
      return Promise.reject();
    })
    .then((res) => {
      onSuccess({ Model: res });
    })
    .catch((err) => {
      console.log(err);
    });
};
