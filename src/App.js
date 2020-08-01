import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.scss';

import Home from './pages/Home';
import PastTrials from './pages/PastTrials';
import HowItWorks from './pages/HowItWorks';
import NoMatch from './pages/NoMatch';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/past-trials" component={PastTrials} />
      <Route path="/how-it-works" component={HowItWorks} />
      <Route path="*" component={NoMatch} />
    </Switch>
  );
};

export default App;
