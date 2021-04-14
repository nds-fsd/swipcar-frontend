const InitialStore = {
  Step1Data: [
    { carType: '' },
    { carBrand: '' },
    { carModel: '' },
    { carVersion: '' },
    { transmision: '' },
    { fuel: '' },
  ],

  Step2Data: [
    { ecoMark: '' },
    { cvMotor: '' },
    { puertas: '' },
    { emisionMotor: '' },
    { color: '' },
    { cilindradaMotor: '' },
    { consumo: '' },
    { maletero: '' },
    { dimensionesLargo: '' },
    { dimensionesAlto: '' },
    { dimensionesAncho: '' },
  ],

  Step3Data: [],

  Step4Data: [{ tecnologia: '' }, { confort: '' }, { seguridad: '' }, { exterior: '' }],

  Step5Data: [{ kmAnuales: '' }, { mesesRenting: '' }, { rentingPrice: '' }],
};

const StoreReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export { InitialStore };
export default StoreReducer;
