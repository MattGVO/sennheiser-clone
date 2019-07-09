import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import './App.scss';
import Header from './components/Header/Header';
import Headphones from './views/Headphones/Headphones';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" component={Headphones}/>
      </Switch>
    </div>
  );
}

export default withRouter(App);
