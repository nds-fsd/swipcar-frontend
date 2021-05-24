import React from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import Header from '../src/components/header';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { USERS_PAGE, PRODUCTS_PAGE, SERVICES_PAGE } from './routers/routers';
import ProductsPage from './pages/productsPage/productsPage';
import ServicesPage from './pages/servicesPage/servicesPage';
import UsersPage from './pages/usersPage/usersPage';

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
          <Route path={PRODUCTS_PAGE}>
            <ProductsPage />
          </Route>
          <Route path={SERVICES_PAGE}>
            <ServicesPage />
          </Route>
          <Route path={USERS_PAGE}>
            <UsersPage />
          </Route>
        </Switch>
        </div>
      </Router>
  
  );
}

export default App;
