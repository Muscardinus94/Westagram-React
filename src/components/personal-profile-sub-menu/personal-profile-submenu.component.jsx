import React from 'react';

import './personal-profile-submenu.styles.scss';

class PersonalProfileSubMenu extends React.Component {
  render() {
    return (
      <div className="personal-profile-sub-menu">
        <div>
          <div className="icon-container">
            <i className="fa fa-user-o"></i>
          </div>
          <div className="info-container">
            <span>프로필</span>
          </div>
        </div>
        <div>
          <div className="icon-container">
            <i className="fa fa-bookmark-o"></i>
          </div>
          <div className="info-container">
            <span>저장됨</span>
          </div>
        </div>
        <div>
          <div className="icon-container">
            <i className="fa fa-cog"></i>
          </div>
          <div className="info-container">
            <span>설정</span>
          </div>
        </div>
        <div className="personal-profile-sub-menu-logout">
          <span>로그아웃</span>
        </div>
      </div>
    );
  }
}

export default PersonalProfileSubMenu;