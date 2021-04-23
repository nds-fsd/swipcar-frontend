import React from 'react';
import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import * as Icons from '@fortawesome/free-solid-svg-icons';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import HeaderLayout1 from './components/header/headerLayout1/headerLayout1.view';
import HeaderLayout2 from './components/header/headerLayout2/headerLayout2.view';
import HomePage from './pages/homePage';
import ParticularesPage from './pages/particularesPage';
import AutonomosPage from './pages/autonomosPage';
import EmpresasPage from './pages/empresasPage';
import NewCarsListPage from './pages/carListPages/newCarsListPage.view';
import UsedCarsListPage from './pages/carListPages/usedCarsListPage.view';
import VanCarsListPage from './pages/carListPages/vanCarsListPage.view';
import CarProfilePage from './pages/carProfilePage';
import CreateRentingPage from './pages/createRentingPage';
import LoginSigninPage from './pages/loginSigninPages/loginSigninPage';
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
  LOGIN_SIGNIN_PAGE,
} from './routers/routers';

function App() {
  const iconList = Object.keys(Icons)
    .filter((key) => key !== 'fas' && key !== 'prefix')
    .map((icon) => Icons[icon]);

  library.add(...iconList);

  return (
    <Router>
      <div>
        <Switch>
          <Route path={LOGIN_SIGNIN_PAGE}>
            <LoginSigninPage />
          </Route>
          <Route path={PARTICULARES_PAGE}>
            <HeaderLayout1 />
            <ParticularesPage />
          </Route>
          <Route path={AUTONOMOS_PAGE}>
            <HeaderLayout1 />
            <AutonomosPage />
          </Route>
          <Route path={EMPRESAS_PAGE}>
            <HeaderLayout1 />
            <EmpresasPage />
          </Route>
          <Route path={NEW_CARS_LIST_PAGE}>
            <HeaderLayout1 />
            <NewCarsListPage />
          </Route>
          <Route path={USED_CARS_LIST_PAGE}>
            <HeaderLayout1 />
            <UsedCarsListPage />
          </Route>
          <Route path={VAN_CARS_LIST_PAGE}>
            <HeaderLayout1 />
            <VanCarsListPage />
          </Route>
          <Route path={FORM_PAGE}>
            <HeaderLayout1 />
            <CreateRentingPage />
          </Route>
          <Route path={CAR_PROFILE_PAGE} exact>
            <HeaderLayout2 />
            <CarProfilePage />
          </Route>
          <Route path={HOME_PAGE}>
            <HeaderLayout1 />
            <HomePage />
          </Route>
          <Route exact path="/">
            <Redirect to={HOME_PAGE} />
            <HeaderLayout1 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
