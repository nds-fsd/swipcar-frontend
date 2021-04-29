import {
  HOME_PAGE,
  PARTICULARES_PAGE,
  EMPRESAS_PAGE,
  AUTONOMOS_PAGE,
  CARS_LIST_PAGE,
} from '../../../routers/routers';

export const SideBarData = [
  {
    id: '1',
    title: 'Inicio',
    path: HOME_PAGE,
  },
  {
    id: '2',
    title: 'Todos los coches',
    path: CARS_LIST_PAGE,
  },
  {
    id: '3',
    title: 'Furgonetes',
    path: CARS_LIST_PAGE,
  },
  {
    id: '4',
    title: 'Particulares',
    path: PARTICULARES_PAGE,
  },
  {
    id: '5',
    title: 'Autónomos',
    path: AUTONOMOS_PAGE,
  },
  {
    id: '6',
    title: 'Renting para empresas',
    path: EMPRESAS_PAGE,
  },
];
