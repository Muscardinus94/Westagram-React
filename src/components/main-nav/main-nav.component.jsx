import React from 'react';

import MainNavLogo from '../main-nav-logo/main-nav-logo.component';
import Search from '../search/search.component';
import Personal from '../personal/personal.component';

import './main-nav.styles.scss';

class MainNav extends React.Component {
  render() {
    return (
        <nav>
          <div className="wrapper">
            <MainNavLogo />
            <Search />
            <Personal />
          </div>
        </nav>
    );
  }
}

export default MainNav;