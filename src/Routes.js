import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { About, Home, More, PageNotFound } from './components/pages';
import { navigationPath } from './services/navigationService';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path={navigationPath.homePage} exact component={Home} />
        <Route path={navigationPath.aboutPage} exact component={About} />
        <Route path={navigationPath.morePage} exact component={More} />
        <Route path="/" component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default Routes;
