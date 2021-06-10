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
    .catch(console.log('CreateCarRequestAll error!'));
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
export const CreateRentingOptionsVersion = ({ watchVersion, onSuccess = () => {} }) => {
  const url = API_DEV.API + API_DEV.VERSION + `optionsversion/${watchVersion}`;
  fetch(url)
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
export const EditUser = ({ toEdit, dataAPI, onSuccess = () => {}, onError = () => {} }) => {
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
      console.log('EditUser ERROR!!  =>', err);
      onError(err);
    });
};
export const NewProvider = ({ dataAPI, onSuccess = () => {}, onError = () => {} }) => {
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
      onError(err);
    });
};
export const EditProvider = ({ toEdit, dataAPI, onSuccess = () => {}, onError = () => {} }) => {
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
      console.log('EditProvider  ERROR !!   => ', err);
      onError(err);
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
    },
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
    return fetch(API_DEV.API + dataToFetch.endpoint, options).then((res) => {
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
    console.log('toSend GetModelVersion => ', toSend);
  };
  Promise.all(fetchData)
    .then((values) => values.map((res, index) => handlePair(res, index)))
    .catch(console.log('GetModelVersion error!'));
};

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
    const keyName = `${datas[index]?.key}`;
    const toSend = { [keyName]: arrayDatas };
    onSuccess(toSend);
  };
  Promise.all(fetchData)
    .then((values) => values.map((res, index) => handlePair(res, index)))
    .catch(console.log('RentingGetDataOptions error!'));
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
      onSuccess(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const GetMyRentingsOffers = async ({
  queryGetData,
  dataProviderID,
  onSuccess = () => {},
}) => {
  const url = API_DEV.API + API_DEV.RENTING_OFFERS + `byProvider/` + dataProviderID;
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
      console.log('GetDataRenting ', res);
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
      console.log('GetDataVersion ', res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const RentingGetOwnOptionsTransmision = async ({
  transmisionOptions,
  onSuccess = () => {},
}) => {
  const fetchDataTransmision = await transmisionOptions.map((dataToFetch) => {
    return fetch(API_DEV.API + dataToFetch.endpoint).then((res) => {
      if (res.status === 200) {
        return res.json();
      }
      return Promise.reject();
    });
  });
  let totalArr = [];
  const handlePair = (arrayDatas) => {
    totalArr = [...totalArr, arrayDatas];
    let toSend = { transmision: totalArr };
    onSuccess(toSend);
  };
  Promise.all(fetchDataTransmision)
    .then((values) => values.map((res, index) => handlePair(res, index)))
    .catch(console.log('RentingGetOwnOptionsTransmision error!'));
};

export const RentingGetOwnOptionsFuel = async ({ fuelOptions, onSuccess = () => {} }) => {
  const fetchDataFuel = await fuelOptions.map((dataToFetch) => {
    return fetch(API_DEV.API + dataToFetch.endpoint).then((res) => {
      if (res.status === 200) {
        return res.json();
      }
      return Promise.reject();
    });
  });
  let totalArr = [];
  const handlePair = (arrayDatas) => {
    totalArr = [...totalArr, arrayDatas];
    let toSend = { fuel: totalArr };
    onSuccess(toSend);
  };
  Promise.all(fetchDataFuel)
    .then((values) => values.map((res) => handlePair(res)))
    .catch(console.log('RentingGetOwnOptionsFuel error!'));
};

export const RentingGetOwnOptionsColor = async ({ colorOptions, onSuccess = () => {} }) => {
  const fetchDataColor = await colorOptions.map((dataToFetch) => {
    return fetch(API_DEV.API + dataToFetch.endpoint).then((res) => {
      if (res.status === 200) {
        return res.json();
      }
      return Promise.reject();
    });
  });
  let totalArr = [];
  const handlePair = (arrayDatas) => {
    totalArr = [...totalArr, arrayDatas];
    let toSend = { color: totalArr };
    onSuccess(toSend);
  };
  Promise.all(fetchDataColor)
    .then((values) => values.map((res) => handlePair(res)))
    .catch(console.log('RentingGetOwnOptionsColor error!'));
};

export const UpdateDataRentingOffer = ({
  toEdit,
  queryPutData,
  onSuccess = () => {},
  onError = () => {},
}) => {
  const url = API_DEV.API + API_DEV.RENTING_OFFERS + `${toEdit}`;
  const body = queryPutData;
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
      console.log('UpdateDataRentingOffer ==> ', res);
    })
    .catch((err) => {
      onError(err);
      console.log('UpdateDataRentingOffer ERROR', err);
    });
};

export const CreateRentingOffer = ({ queryPutData, onSuccess = () => {}, onError = () => {} }) => {
  //*Find CarProfile by model
  let model = queryPutData.model;
  fetch(API_DEV.API + API_DEV.CARPROFILE + 'bymodel/' + model)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
      return Promise.reject();
    })
    .then((res) => {
      let completData = { ...queryPutData, carProfile: res._id };
      _handleCreateRentingOffer(completData);
    })
    .catch((err) => {
      console.log('CreateRentingOffer Step1 ERROR : ', err);
    });
  //*Find CarProfile by model

  const _handleCreateRentingOffer = (completData) => {
    const url = API_DEV.API + API_DEV.RENTING_OFFERS;
    const body = completData;
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
        _handleUpdatesRentingOfferIds(res);
        // console.log('createRentingOffer RESUL  => ', res);
      })
      .catch((err) => {
        onError(err);
        console.log('CreateRentingoffer Step2 CREATE ERROR', err);
      });
  };

  const _handleUpdatesRentingOfferIds = (rentingOfferNewData) => {
    const { provider, _id, version } = rentingOfferNewData;
    //*GetProviderData
    fetch(API_DEV.API + API_DEV.PROVIDERS + provider)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        return Promise.reject();
      })
      .then((res) => {
        _handleProviderRentings(provider, _id, version, res.rentingoffers);
        // console.log('_handleProviderRentings  => ', provider, _id, version, res.rentingoffers);
      })
      .catch((err) => {
        console.log('GetDataUser ERROR : ', err);
      });
    const _handleProviderRentings = (
      providerId,
      newRentingOfferId,
      version,
      providerRentingOffers
    ) => {
      const resToUpdateRentingOfferProvider = providerRentingOffers?.find(
        (rentingOffer) => rentingOffer === newRentingOfferId
      );
      if (resToUpdateRentingOfferProvider === undefined) {
        let toUpdate = [...providerRentingOffers, newRentingOfferId];
        toUpdate = { rentingoffers: toUpdate };
        const url = API_DEV.API + API_DEV.PROVIDERS + providerId;
        const options = {
          method: 'PUT',
          headers: new Headers({
            Accept: 'application/json',
            'Content-type': 'application/json',
          }),
          mode: 'cors',
          body: JSON.stringify(toUpdate),
        };
        fetch(url, options)
          .then((res) => {
            if (res.status === 200) {
              return res.json();
            }
            return Promise.reject();
          })
          .then(() => {
            _handleVersionRentings(newRentingOfferId, version);
          })
          .catch((err) => {
            console.log('_handleProviderRentings   ERROR!! : ', err);
            onError(err);
          });
      } else {
        //!Pasa al siguiente paso sin actualizar ya que existe la renting offer en el array
        _handleVersionRentings(newRentingOfferId, version);
      }
    };

    const _handleVersionRentings = (newRentingOfferId, version) => {
      //*GetVersion
      fetch(API_DEV.API + API_DEV.VERSION + version)
        .then((res) => {
          if (res.status === 200) {
            return res.json();
          }
          return Promise.reject();
        })
        .then((res) => {
          _handleUpdateRentings(newRentingOfferId, version, res.rentingoffers);
        })
        .catch((err) => {
          console.log('GetDataUser ERROR : ', err);
        });

      const _handleUpdateRentings = (newRentingOfferId, version, versionRentingoffers) => {
        const resToUpdateRentingOfferVersion = versionRentingoffers?.find(
          (rentingOffer) => rentingOffer === newRentingOfferId
        );
        if (resToUpdateRentingOfferVersion === undefined) {
          let toUpdate = [...versionRentingoffers, newRentingOfferId];
          toUpdate = { rentingoffers: toUpdate };
          const url = API_DEV.API + API_DEV.VERSION + version;
          const options = {
            method: 'PUT',
            headers: new Headers({
              Accept: 'application/json',
              'Content-type': 'application/json',
            }),
            mode: 'cors',
            body: JSON.stringify(toUpdate),
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
              console.log('_handleVersionRentings   ERROR!! : ', err);
              onError(err);
            });
        } else {
          onSuccess(version);
        }
      };
    };
  };
};

export const DeleteRentingOffer = ({
  rentingOfferId,
  providerId,
  version,
  onSuccess = () => {},
  onError = () => {},
}) => {
  const url = API_DEV.API + API_DEV.RENTING_OFFERS + rentingOfferId;
  const options = {
    method: 'DELETE',
    headers: new Headers({
      Accept: 'application/json',
      'Content-type': 'application/json',
    }),
    mode: 'cors',
  };
  fetch(url, options)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
      return Promise.reject();
    })
    .then((res) => {
      _handleVersionRentingsDelete();
    })
    .catch((err) => {
      onError(err);
      console.log('DeleteRentingoffer ERROR', err);
    });

  //*delete rentingOffer VErsion
  const _handleVersionRentingsDelete = () => {
    fetch(API_DEV.API + API_DEV.VERSION + version)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        return Promise.reject();
      })
      .then((res) => {
        _handleUpdateRentingsDelete(rentingOfferId, version, res.rentingoffers);
      })
      .catch((err) => {
        console.log('GetDataUser ERROR : ', err);
      });

    const _handleUpdateRentingsDelete = (rentingOfferId, version, versionRentingoffers) => {
      const resToUpdateRentingOfferVersion = versionRentingoffers
        .map((rentingOffer) => rentingOffer)
        .filter((val) => val._id !== rentingOfferId);
      if (resToUpdateRentingOfferVersion === undefined) {
        _handleProviderRentingsDelete();
      } else {
        let toUpdate = versionRentingoffers.filter((value) => value !== rentingOfferId);
        toUpdate = { rentingoffers: toUpdate };
        const url = API_DEV.API + API_DEV.VERSION + version;
        const options = {
          method: 'PUT',
          headers: new Headers({
            Accept: 'application/json',
            'Content-type': 'application/json',
          }),
          mode: 'cors',
          body: JSON.stringify(toUpdate),
        };
        fetch(url, options)
          .then((res) => {
            if (res.status === 200) {
              return res.json();
            }
            return Promise.reject();
          })
          .then((res) => {
            _handleProviderRentingsDelete();
          })
          .catch((err) => {
            console.log('_handleVersionRentings   ERROR!! : ', err);
            onError(err);
          });
      }
    };
  };

  //*delete rentingOffer Provider
  const _handleProviderRentingsDelete = () => {
    fetch(API_DEV.API + API_DEV.PROVIDERS + providerId)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        return Promise.reject();
      })
      .then((res) => {
        _handleRentingsDeleteProvider(rentingOfferId, res.rentingoffers);
      })
      .catch((err) => {
        console.log('GetDataUser ERROR : ', err);
      });

    const _handleRentingsDeleteProvider = (rentingOfferId, providerRentingoffers) => {
      const resToUpdateRentingOfferProvider = providerRentingoffers?.find(
        (rentingOffer) => rentingOffer === rentingOfferId
      );
      if (resToUpdateRentingOfferProvider === undefined) {
        onSuccess(rentingOfferId);
        //!Fin
      } else {
        let toUpdate = providerRentingoffers.filter((value) => value !== rentingOfferId);
        toUpdate = { rentingoffers: toUpdate };
        const url = API_DEV.API + API_DEV.PROVIDERS + providerId;
        const options = {
          method: 'PUT',
          headers: new Headers({
            Accept: 'application/json',
            'Content-type': 'application/json',
          }),
          mode: 'cors',
          body: JSON.stringify(toUpdate),
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
            console.log('_handleRentingsDeleteProvider   ERROR!! : ', err);
            onError(err);
          });
      }
    };
  };
};

export const GetDataUser = ({ toEdit, onSuccess = () => {} }) => {
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
      console.log('GetDataUser ERROR : ', err);
    });
};
export const GetDataProvider = ({ idUser, onSuccess = () => {} }) => {
  const url = API_DEV.API + API_DEV.USERS + idUser;
  fetch(url)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
      return Promise.reject();
    })
    .then((res) => {
      onSuccess(res);
      console.log('GetDataUser ', res);
    })
    .catch((err) => {
      console.log('GetDataUser : ', err);
    });
};

export const UpdateUserProvider = async ({
  userData,
  providerData,
  onSuccess = () => {},
  onError = () => {},
}) => {
  const { _id: idUser, name, email } = userData || {};
  const { _id: idProvider, companyname, email: emailEmpresa, address, phone, web } =
    providerData || {};

  const bodyUser = { name: name, email: email };
  const bodyProvider = {
    companyname: companyname,
    email: emailEmpresa,
    address: address,
    phone: phone,
    web: web,
  };
  const optionsUser = {
    method: 'PUT',
    headers: new Headers({
      Accept: 'application/json',
      'Content-type': 'application/json',
    }),
    mode: 'cors',
    body: JSON.stringify(bodyUser),
  };
  const optionsProvider = {
    method: 'PUT',
    headers: new Headers({
      Accept: 'application/json',
      'Content-type': 'application/json',
    }),
    mode: 'cors',
    body: JSON.stringify(bodyProvider),
  };

  const fetchUser = await fetch(API_DEV.API + API_DEV.USERS + idUser, optionsUser).then((res) => {
    if (res.status === 200) {
      return res.json();
    }
    return Promise.reject();
  });
  const fetchProvider = await fetch(
    API_DEV.API + API_DEV.PROVIDERS + idProvider,
    optionsProvider
  ).then((res) => {
    if (res.status === 200) {
      return res.json();
    }
    return Promise.reject();
  });
  Promise.all([fetchUser, fetchProvider])
    .then((res) => onSuccess(res))
    .catch((res) => onError(res));
};

export const CreateVersion = async ({ versionData, onSuccess = () => {}, onError = () => {} }) => {
  //! Find CarProfile by MODEL
  const { brand, model } = versionData;
  const url = API_DEV.API + API_DEV.CARPROFILE + 'bymodel/' + model;
  fetch(url)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
      return Promise.reject();
    })
    .then((res) => {
      console.log('Find CarProfile By Model  RES: ', res);
      if (res === null) {
        _createCarProfile(brand, model);
      } else {
        _createVersion(res._id, res.version);
      }
    })
    .catch((err) => {
      console.log('Find carProfile by Model   ERROR!! : ', err);
      onError(err);
    });
  //! Find CarProfile by MODEL

  //! Create CarProfile
  const _createCarProfile = (brand, model) => {
    const url = API_DEV.API + API_DEV.CARPROFILE;
    const body = {
      brand: brand,
      model: model,
    };
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
        console.log('_createCarProfile  OK!!', res);
        _createVersion(res._id, res.version);
      })
      .catch((err) => {
        console.log('_createCarProfile  ERROR!! : ', err);
        onError(err);
      });
  };
  //! Create CarProfile

  //! Create Version
  const _createVersion = (carProfileId, carProfileVersions) => {
    const optionsVersion = {
      method: 'POST',
      headers: new Headers({
        Accept: 'application/json',
        'Content-type': 'application/json',
      }),
      mode: 'cors',
      body: JSON.stringify(versionData),
    };

    fetch(API_DEV.API + API_DEV.VERSION, optionsVersion)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        return Promise.reject();
      })
      .then((res) => {
        console.log('CreateVersion   OK!! : ', res);
        const versionId = res._id;
        _updateCarProfileVersion(carProfileId, carProfileVersions, versionId);
      })
      .catch((err) => {
        console.log('CreateVersion   ERROR!! : ', err);
        onError(err);
      });
  };
  //! Create Version

  //! Update Version CarProfile
  const _updateCarProfileVersion = (carProfileId, carProfileVersions, addVersion) => {
    if (carProfileVersions === undefined) {
      const url = API_DEV.API + API_DEV.CARPROFILE + carProfileId;
      let toUpdate = { version: [addVersion] };
      const options = {
        method: 'PUT',
        headers: new Headers({
          Accept: 'application/json',
          'Content-type': 'application/json',
        }),
        mode: 'cors',
        body: JSON.stringify(toUpdate),
      };
      fetch(url, options)
        .then((res) => {
          if (res.status === 200) {
            return res.json();
          }
          return Promise.reject();
        })
        .then((res) => {
          console.log('_updateCarProfileVersion   OK!!  :', res);
          onSuccess(res);
        })
        .catch((err) => {
          console.log('_updateCarProfileVersion   ERROR!! : ', err);
          onError(err);
        });
    } else {
      const resToUpdateVersions = carProfileVersions?.find((version) => version === addVersion);
      if (resToUpdateVersions === undefined) {
        let toUpdate = [...carProfileVersions, addVersion];
        toUpdate = { version: toUpdate };
        const url = API_DEV.API + API_DEV.CARPROFILE + carProfileId;
        const options = {
          method: 'PUT',
          headers: new Headers({
            Accept: 'application/json',
            'Content-type': 'application/json',
          }),
          mode: 'cors',
          body: JSON.stringify(toUpdate),
        };
        fetch(url, options)
          .then((res) => {
            if (res.status === 200) {
              return res.json();
            }
            return Promise.reject();
          })
          .then((res) => {
            console.log('_updateCarProfileVersion   OK!! :', res);
            onSuccess(res);
          })
          .catch((err) => {
            console.log('_updateCarProfileVersion   ERROR!! : ', err);
            onError(err);
          });
      } else {
        onSuccess(carProfileId);
      }
    }
  };
  //! Update Version CarProfile
};

//! Datos Necesarios: userId, rentingOfferId, providerId
export const CreateReservation = ({ queryPutData, onSuccess = () => {}, onError = () => {} }) => {
  const { user: userId, rentingoffer: rentingOfferId, provider: providerId } = queryPutData;

  //* Fetch Create Reservation
  let bodyReservation = {
    user: userId,
    rentingoffer: rentingOfferId,
  };
  const options = {
    method: 'POST',
    headers: new Headers({
      Accept: 'application/json',
      'Content-type': 'application/json',
    }),
    mode: 'cors',
    body: JSON.stringify(bodyReservation),
  };
  fetch(API_DEV.API + API_DEV.RESERVATION, options)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
      return Promise.reject();
    })
    .then((res) => {
      _handleUserReservations(res._id);
      console.log('Nueva reserva creada es el id => : ', res._id);
    })
    .catch((err) => {
      console.log('FETCH CreateReservation ERROR : ', err);
    });
  //*END Fetch Create REservation

  const _handleUserReservations = (newReservationId) => {
    //*Get Array reservations
    fetch(API_DEV.API + API_DEV.USERS + userId)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        return Promise.reject();
      })
      .then((res) => {
        console.log('Array reservation USER  => ', res.reservation);
        _updateUserReservations(res.reservation, newReservationId);
      })
      .catch((err) => {
        console.log('GetDataUser ERROR : ', err);
      });
    const _updateUserReservations = (userReservations, newReservationId) => {
      const resToUpdateUserReservations = userReservations?.find(
        (reservation) => reservation === newReservationId
      );
      if (resToUpdateUserReservations === undefined) {
        let toUpdate = [...userReservations, newReservationId];
        toUpdate = { reservation: toUpdate };
        const url = API_DEV.API + API_DEV.USERS + userId;
        const options = {
          method: 'PUT',
          headers: new Headers({
            Accept: 'application/json',
            'Content-type': 'application/json',
          }),
          mode: 'cors',
          body: JSON.stringify(toUpdate),
        };
        fetch(url, options)
          .then((res) => {
            if (res.status === 200) {
              return res.json();
            }
            return Promise.reject();
          })
          .then(() => {
            _handleProviderReservations(newReservationId, providerId);
          })
          .catch((err) => {
            console.log('_updateUserReservations   ERROR!! : ', err);
            onError(err);
          });
      } else {
        _handleProviderReservations(newReservationId, providerId);
      }
    };

    const _handleProviderReservations = (newReservationId, providerId) => {
      //*GetProvider
      fetch(API_DEV.API + API_DEV.PROVIDERS + providerId)
        .then((res) => {
          if (res.status === 200) {
            return res.json();
          }
          return Promise.reject();
        })
        .then((res) => {
          _handleUpdateProviderReservations(res.reservations, newReservationId);
          console.log('Array Reservations Provider  => ', res.reservations);
        })
        .catch((err) => {
          console.log('_handleProviderReservations ERROR : ', err);
        });

      const _handleUpdateProviderReservations = (providerReservations, newReservationId) => {
        const resToUpdateReservationsProvider = providerReservations?.find(
          (reservation) => reservation === newReservationId
        );
        console.log('resToUpdateReservationsProvider  => ', resToUpdateReservationsProvider);

        if (resToUpdateReservationsProvider === undefined) {
          let toUpdate = [...providerReservations, newReservationId];
          toUpdate = { reservations: toUpdate };
          const url = API_DEV.API + API_DEV.PROVIDERS + providerId;
          const options = {
            method: 'PUT',
            headers: new Headers({
              Accept: 'application/json',
              'Content-type': 'application/json',
            }),
            mode: 'cors',
            body: JSON.stringify(toUpdate),
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
              console.log('_handleUpdateProviderReservations   ERROR!! : ', err);
              onError(err);
            });
        } else {
          onSuccess(userId);
        }
      };
    };
  };
};

export const GetReservationsProvider = ({ dataProviderID, onSuccess = () => {} }) => {
  console.log('dataProviderID  => ', dataProviderID);

  fetch(API_DEV.API + API_DEV.PROVIDERS + '/reservations/' + dataProviderID)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
      return Promise.reject();
    })
    .then((res) => {
      console.log('Array reservation PROVIDER  => ', res.reservations);
      _getReservations(res.reservations);
    })
    .catch((err) => {
      console.log('Array reservation PROVIDER ERROR : ', err);
    });

  const _getReservations = async (reservations) => {
    const fetchDataReservations = await reservations.map((dataToFetch) => {
      return fetch(API_DEV.API + API_DEV.RESERVATION + dataToFetch).then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        return Promise.reject();
      });
    });
    let totalArr = [];
    const handlePair = (arrayDatas) => {
      totalArr = [...totalArr, arrayDatas];
      onSuccess(totalArr);
    };
    Promise.all(fetchDataReservations)
      .then((values) => values.map((res) => handlePair(res)))
      .catch(console.log('fetchDataReservations error!'));
  };
};

export const GetReservationsUser = ({ dataUserID, onSuccess = () => {} }) => {
  console.log('dataProviderID  => ', dataUserID);

  fetch(API_DEV.API + API_DEV.USERS + dataUserID)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
      return Promise.reject();
    })
    .then((res) => {
      console.log('Array reservation USER  => ', res.reservation);
      _getReservations(res.reservation);
    })
    .catch((err) => {
      console.log('Array reservation PROVIDER ERROR : ', err);
    });

  const _getReservations = async (reservations) => {
    const fetchDataReservations = await reservations.map((dataToFetch) => {
      return fetch(API_DEV.API + API_DEV.RESERVATION + dataToFetch).then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        return Promise.reject();
      });
    });
    let totalArr = [];
    const handlePair = (arrayDatas) => {
      totalArr = [...totalArr, arrayDatas];
      console.log('totalArr user TO TABLE : ', totalArr);

      onSuccess(totalArr);
    };
    Promise.all(fetchDataReservations)
      .then((values) => values.map((res) => handlePair(res)))
      .catch(console.log('fetchDataReservations error!'));
  };
};

export const GetReservation = ({ toEdit, onSuccess = () => {} }) => {
  fetch(API_DEV.API + API_DEV.RESERVATION + toEdit)
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
      console.log('GetReservation ERROR!! : ', err);
    });
};

export const DeleteReservation = ({
  reservationId,
  userId,
  providerId,
  onSuccess = () => {},
  onError = () => {},
}) => {
  const options = {
    method: 'DELETE',
    headers: new Headers({
      Accept: 'application/json',
      'Content-type': 'application/json',
    }),
    mode: 'cors',
  };
  fetch(API_DEV.API + API_DEV.RESERVATION + reservationId, options)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
      return Promise.reject();
    })
    .then((res) => {
      _handleUserReservationsDelete();
    })
    .catch((err) => {
      console.log('DELETE Reservation ERROR : ', err);
    });
  const _handleUserReservationsDelete = () => {
    //*Get Array reservations
    fetch(API_DEV.API + API_DEV.USERS + userId)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        return Promise.reject();
      })
      .then((res) => {
        _userReservationsDelete(res.reservation);
      })
      .catch((err) => {
        console.log('GetDataUser ERROR : ', err);
      });
    const _userReservationsDelete = (userReservations) => {
      const resToUpdateUserReservations = userReservations
        .map((reservation) => reservation)
        .filter((val) => val._id !== reservationId);

      if (resToUpdateUserReservations === undefined) {
        _handleProviderReservationsDelete();
      } else {
        let toUpdate = userReservations.filter((value) => value !== reservationId);
        toUpdate = { reservation: toUpdate };
        const url = API_DEV.API + API_DEV.USERS + userId;
        const options = {
          method: 'PUT',
          headers: new Headers({
            Accept: 'application/json',
            'Content-type': 'application/json',
          }),
          mode: 'cors',
          body: JSON.stringify(toUpdate),
        };
        fetch(url, options)
          .then((res) => {
            if (res.status === 200) {
              return res.json();
            }
            return Promise.reject();
          })
          .then((res) => {
            _handleProviderReservationsDelete();
          })
          .catch((err) => {
            console.log('_handleVersionRentings   ERROR!! : ', err);
            onError(err);
          });
      }
    };
    const _handleProviderReservationsDelete = () => {
      //*GetProvider
      fetch(API_DEV.API + API_DEV.PROVIDERS + providerId)
        .then((res) => {
          if (res.status === 200) {
            return res.json();
          }
          return Promise.reject();
        })
        .then((res) => {
          _providerReservationsDelete(res.reservations);
        })
        .catch((err) => {
          console.log('_handleUpdateProviderReservationsDelete ERROR : ', err);
        });

      const _providerReservationsDelete = (providerReservations) => {
        const resToUpdateProviderReservations = providerReservations
          .map((reservation) => reservation)
          .filter((val) => val._id !== reservationId);

        if (resToUpdateProviderReservations === undefined) {
          onSuccess(reservationId);
        } else {
          let toUpdate = providerReservations.filter((value) => value !== reservationId);
          toUpdate = { reservations: toUpdate };
          const url = API_DEV.API + API_DEV.PROVIDERS + providerId;
          const options = {
            method: 'PUT',
            headers: new Headers({
              Accept: 'application/json',
              'Content-type': 'application/json',
            }),
            mode: 'cors',
            body: JSON.stringify(toUpdate),
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
              onError(err);
            });
        }
      };
    };
  };
};
