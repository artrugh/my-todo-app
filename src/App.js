import React from 'react';

import { Switch, Route, BrowserRouter } from 'react-router-dom';

// styles
import './css/App.scss';

// routes
import Home from './routers/Home';
import Sign from './routers/Sign';
import Login from './routers/Login';
import User from './routers/User';
import NotFound from './routers/NotFound';
// import NewsContainer from './routers/NewsContainer';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        {/* <Navigation></Navigation> */}
        <Switch>
          <Route exact path = "/" component = {Home}/>
          <Route exact path = "/sign" component = {Sign}/>
          <Route exact path = "/login" component = {Login}/>
          <Route exact path="/user" component={User}/>
          {/* <Route exact path="/" component={MainContainer} /> */}
          <Route path="*" component={NotFound}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
