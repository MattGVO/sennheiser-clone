import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import './App.scss';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
    
      </Switch>
    </div>
  );
}

export default withRouter(App);
