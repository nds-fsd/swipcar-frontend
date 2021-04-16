const InitialStore = {
  Step1Data: {
    carBrand: 9,
    carModel: '',
    carVersion: '',
    carType: '',
    transmision: '',
    fuel: '',
  },

  Step2Data: {
     ecoMark: '',
    cvMotor: '',
    puertas: '',
    emisionMotor: '',
    color: '',
   cilindradaMotor: '',
    consumo: '',
    maletero: '',
    dimensionesLargo: '',
    dimensionesAlto: '',
    dimensionesAncho: '',
  },

  Step3Data: [],

  Step4Data: [{ tecnologia: '' }, { confort: '' }, { seguridad: '' }, { exterior: '' }],

  Step5Data: [{ kmAnuales: '' }, { mesesRenting: '' }, { rentingPrice: '' }],
};

const types = {
  add:'add to initialState'
}

const StoreReducer = (state, action) => {
  switch (action.type) {
    case types.add:
      console.log('action', action)
    return { ...state, [action.key]: action.data};
    default:
      return state;
  }
};
export { InitialStore, types };
export default StoreReducer;
