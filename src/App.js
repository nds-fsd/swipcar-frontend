import React from 'react';
import './App.css';
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
} from './routers/routers';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
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
          <Route path={FORM_PAGE}></Route>
          <Route path={CAR_PROFILE_PAGE}>
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
