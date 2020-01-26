import React from 'react';

import { Switch, Route, BrowserRouter } from 'react-router-dom';

// styles
import './css/App.scss';

// components
import Navigation from './components/Navigation';
import MainContainer from './routers/MainContainer';
import NotFound from './routers/NotFound';
import NewsContainer from './routers/NewsContainer';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/news" component={NewsContainer}></Route>
          <Route exact path="/" component={MainContainer} />
          <Route path="*" component={NotFound}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
