import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Login from './pages/login/login.component';
import Main from './pages/main/main.component.jsx';

import './App.css';
import './responsive.css';

class App extends React.Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path='/login' component={Login}/>
          <Route path='/' component={Main}/>
        </Switch>
      </>
    );
 }
}

export default App;
