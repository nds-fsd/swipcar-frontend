import React, { useState, useEffect } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  useLocation,
  withRouter,
} from 'react-router-dom';
import HeaderLayout1 from './components/header/headerLayout1/headerLayout1.view';
import HeaderLayout2 from './components/header/headerLayout2/headerLayout2.view';
import HomePage from './pages/homePage';
import AboutUsPage from './pages/aboutUsPage';
import CarsListPage from './pages/carListPages/carsListPage.view';
import CarProfilePage from './pages/carProfilePage';
import CreateRentingPage from './pages/createRentingPage';
import LoginSigninPage from './pages/loginSigninPages/loginSigninPage';
import DashboardPage from './pages/dashboardPage';
import {
  HOME_PAGE,
  ABOUT_US_PAGE,
  CARS_LIST_PAGE,
  CAR_PROFILE_PAGE,
  FORM_PAGE,
  LOGIN_SIGNIN_PAGE,
  DASHBOARD_PAGE,
} from './routers/routers';
import PrivateRoute from './routers/privateRoute';
import { AuthContextProvider } from './store/authContext';
import Footer from './components/footer';

function App() {
  const [categoryFilter, setCategoryFilter] = useState('');
  const [searchValue, setSearchValue] = useState('');

  const iconList = Object.keys(Icons)
    .filter((key) => key !== 'fas' && key !== 'prefix')
    .map((icon) => Icons[icon]);
  library.add(...iconList);

  function _ScrollToTop(props) {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return props.children;
  }

  const ScrollToTop = withRouter(_ScrollToTop);
  return (
    <AuthContextProvider>
      <Router>
        <div>
          <Switch>
            <Route path={LOGIN_SIGNIN_PAGE}>
              <HeaderLayout1 setCategoryFilter={setCategoryFilter} />
              <LoginSigninPage />
            </Route>

            <PrivateRoute path={DASHBOARD_PAGE}>
              {/* <HeaderLayout2 /> */}
              <DashboardPage />
            </PrivateRoute>

            <Route path={CARS_LIST_PAGE}>
              <ScrollToTop>
                <HeaderLayout1
                  setCategoryFilter={setCategoryFilter}
                  setSearchValue={setSearchValue}
                />
                <CarsListPage categoryFilter={categoryFilter} searchValue={searchValue} />
                <Footer />
              </ScrollToTop>
            </Route>

            <Route path={CAR_PROFILE_PAGE}>
              <HeaderLayout2 setCategoryFilter={setCategoryFilter} />
              <CarProfilePage />
            </Route>
            <Route path={ABOUT_US_PAGE}>
              <HeaderLayout1 setCategoryFilter={setCategoryFilter} />
              <AboutUsPage />
            </Route>
            <Route path={FORM_PAGE}>
              <HeaderLayout1 setCategoryFilter={setCategoryFilter} />
              <CreateRentingPage />
            </Route>
            <Route path={HOME_PAGE}>
              <HeaderLayout1 setCategoryFilter={setCategoryFilter} />
              <HomePage />
              <Footer />
            </Route>
            <Route exact path="/">
              <Redirect to={HOME_PAGE} />
            </Route>
            <Route path="*">
              <HeaderLayout1 setCategoryFilter={setCategoryFilter} />
              <div>404 Not Found</div>
              <Footer />
            </Route>
          </Switch>
        </div>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
