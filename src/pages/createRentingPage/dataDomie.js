export const DATADOMIE = {
  //   CarProfileDataEstate: [{ nuevo: true }, { seminuevo: false }, { furgoneta: false }],
  //! "nuevo: true, seminuevo: false, furgoneta: false" en CarProfile no se puede recoger
  //! de esa forma ....???
  CarProfileDataEstate: [
    { _id: 1, label:'Nuevo', name: 'nuevo', isChecked: false },
    { _id: 2, label:'Semi Nuevo',name: 'seminuevo', isChecked: false },
  ],
  Brand: [
    { _id: 1, name: 'Fiat' },
    { _id: 2, name: 'Ford' },
    { _id: 3, name: 'Kia' },
    { _id: 4, name: 'Volkswagen' },
    { _id: 5, name: 'Renault' },
    { _id: 6, name: 'Opel' },
    { _id: 7, name: 'Seat' },
    { _id: 9, name: 'Nissan' },
  ],
  Model: [
    { _id: 1, name: '500 Sport' },
    { _id: 2, name: 'Tipo' },
    { _id: 3, name: '500x' },
    { _id: 4, name: '500e' },
    { _id: 5, name: '500L' },
    { _id: 6, name: 'Panda' },
  ],
  Version: [
    { _id: 1, name: 'Intens Tce' },
    { _id: 2, name: 'Intens TCe Gpf MHEV' },
  ],
  CarType: [
    { _id: 1, name: 'Urbanita' },
    { _id: 2, name: 'Suv' },
    { _id: 3, name: 'Suv Pequeño' },
    { _id: 4, name: 'Compacto' },
    { _id: 5, name: 'Berlina' },
    { _id: 6, name: '7plazas' },
    { _id: 7, name: '4x4' },
    { _id: 8, name: 'Furgonetas' },
  ],
  Transmision: [
    { _id: 1, name: 'Manual' },
    { _id: 2, name: 'Automático' },
  ],
  Fuel: [
    { _id: 1, name: 'Gasolina' },
    { _id: 2, name: 'Diesel' },
    { _id: 3, name: 'Híbrido y Eléctrico' },
  ],
  Puertas: [
    { _id: 1, name: '3' },
    { _id: 2, name: '5' },
    { _id: 3, name: '7' },
  ],
  EcoMark: [
    { _id: 1, name: 'Eco' },
    { _id: 2, name: '0' },
    { _id: 3, name: 'C' },
    { _id: 4, name: 'B' },
    { _id: 5, name: 'Sin Distintivo' },
  ],
  Color: [
    { _id: 1, name: 'Rojo' },
    { _id: 2, name: 'Blanco' },
    { _id: 3, name: 'Azul' },
    { _id: 4, name: 'Gris' },
    { _id: 5, name: 'Naranja' },
    { _id: 6, name: 'Negro' },
  ],
  Googies: [
    {
      _id: 1,
      name: 'Sin Entrada',
      iconlabel: 'piggy-bank',
      isChecked: false,
    },
    {
      _id: 2,
      name: 'Seguro a todo riesgo sin franquicia',
      iconlabel: 'car-crash',
      isChecked: false,
    },
    {
      _id: 3,
      name: 'Asistencia en carretera',
      iconlabel: 'truck-pickup',
      isChecked: false,
    },
    {
      _id: 4,
      name: 'Mantenimiento y revisiones',
      iconlabel: 'air-freshener',
      isChecked: false,
    },
    {
      _id: 5,
      name: 'Averías y reparaciones',
      iconlabel: 'tools',
      isChecked: false,
    },
    {
      _id: 6,
      name: 'Impuestos incluidos',
      iconlabel: 'tools',
      isChecked: false,
    },
    {
      _id: 7,
      name: 'Cambio de neumáticos*',
      iconlabel: 'tools',
      isChecked: false,
    },
    {
      _id: 8,
      name: 'Entrega a domicilio',
      iconlabel: 'tools',
      isChecked: false,
    },
    {
      _id: 9,
      name: 'Coche de pre-entrega contratable',
      iconlabel: 'tools',
      isChecked: false,
    },
  ],
  EquipamientoDestacado: [
    {
      _id: 1,
      name: 'AMG Line',
      iconlabel: 'check',
      isChecked: false,
    },
    {
      _id: 2,
      name: 'Sistema multimedia MBUX',
      iconlabel: 'check',
      isChecked: false,
    },
    {
      _id: 3,
      name: 'Climatización automática Thermotronic',
      iconlabel: 'check',
      isChecked: false,
    },
    {
      _id: 4,
      name: 'Cámara de marcha atrás',
      iconlabel: 'check',
      isChecked: false,
    },
    {
      _id: 5,
      name: 'Apple CarPlay / Android Auto',
      iconlabel: 'check',
      isChecked: false,
    },
    {
      _id: 6,
      name: 'Capó activo para protección de peatones',
      iconlabel: 'check',
      isChecked: false,
    },
    {
      _id: 7,
      name: 'Funcion Start&Stop ISG',
      iconlabel: 'check',
      isChecked: false,
    },
    {
      _id: 8,
      name: 'Aire Acondicionado',
      iconlabel: 'check',
      isChecked: false,
    },
    {
      _id: 9,
      name: 'Bluetooth',
      iconlabel: 'check',
      isChecked: false,
    },
    {
      _id: 10,
      name: 'Asistente de arranque en pendiente HAC',
      iconlabel: 'check',
      isChecked: false,
    },
]
};
export default DATADOMIE;
