import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { LIST_CARDS, CARD_PROFILE } from './routers/routers';
// import ListCards from './pages/listCards';

const App = () => {
  
  return (
    <>
      <Router>
        <Route exact path={LIST_CARDS}>
          <ListCards />
        </Route>
      </Router>
    </>
  );
};

export default App;
