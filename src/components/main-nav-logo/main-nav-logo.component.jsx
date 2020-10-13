import React from 'react';

import './main-nav-logo.styles.scss';

class MainNavLogo extends React.Component {
  render() {
    return (
      <div className="logo">
        <img className="main-logo" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/logo.png" alt="main-logo" />
        <a href="#">
          <img className="text-logo" src="./images/logo_text.png" alt="text-logo" />
        </a>
      </div>
    );
  }
}

export default MainNavLogo;