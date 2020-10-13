import React from 'react';

import MainNav from '../../components/main-nav/main-nav.component';
import MainBody from '../../components/main-body/main-body.component';
import './main.styles.css';

class Main extends React.Component {
  render() {
    return (
      <div className="main-container">
        <MainNav />
        <MainBody />
      </div>
    );
  }
}

export default Main;