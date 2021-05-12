import React from 'react';
import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import * as Icons from '@fortawesome/free-solid-svg-icons';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/header';
import HomePage from './pages/homePage';
import ParticularesPage from './pages/particularesPage';
import AutonomosPage from './pages/autonomosPage';
import EmpresasPage from './pages/empresasPage';
import NewCarsListPage from './pages/carListPages/newCarsListPage.view';
import UsedCarsListPage from './pages/carListPages/usedCarsListPage.view';
import VanCarsListPage from './pages/carListPages/vanCarsListPage.view';
import CarProfilePage from './pages/carProfilePage';
import CreateRentingPage from './pages/createRentingPage';
import {
  HOME_PAGE,
  PARTICULARES_PAGE,
  AUTONOMOS_PAGE,
  EMPRESAS_PAGE,
  NEW_CARS_LIST_PAGE,
  CAR_PROFILE_PAGE,
  USED_CARS_LIST_PAGE,
  VAN_CARS_LIST_PAGE,
  FORM_PAGE,
  DASHBOARD_PAGE,
} from './routers/routers';
import DashboardPage from './pages/dashboardPage/dashboardPage.view';

function App() {
  const iconList = Object.keys(Icons)
    .filter((key) => key !== 'fas' && key !== 'prefix')
    .map((icon) => Icons[icon]);

  library.add(...iconList);


  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path={DASHBOARD_PAGE}>
            <DashboardPage />
          </Route>
          <Route path={PARTICULARES_PAGE}>
            <ParticularesPage />
          </Route>
          <Route path={AUTONOMOS_PAGE}>
            <AutonomosPage />
          </Route>
          <Route path={EMPRESAS_PAGE}>
            <EmpresasPage />
          </Route>
          <Route path={NEW_CARS_LIST_PAGE}>
            <NewCarsListPage />
          </Route>
          <Route path={USED_CARS_LIST_PAGE}>
            <UsedCarsListPage />
          </Route>
          <Route path={VAN_CARS_LIST_PAGE}>
            <VanCarsListPage />
          </Route>
          <Route path={FORM_PAGE}>
            <CreateRentingPage />
          </Route>
          <Route path={CAR_PROFILE_PAGE} exact>
            <CarProfilePage />
          </Route>
          <Route path={HOME_PAGE}>
            <HomePage />
          </Route>
          <Route exact path="/">
            <Redirect to={HOME_PAGE} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
