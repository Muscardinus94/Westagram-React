import React from 'react';

import PersonalProfileSubMenu from '../personal-profile-sub-menu/personal-profile-submenu.component';

import './personal.styles.scss';

class Personal extends React.Component {
  constructor() {
    super();
    this.state = {
      personalProfileSubMenuHidden: true,
    }
  }

  personalProfileSubMenuToggle = () => {
    const {personalProfileSubMenuHidden} = this.state;
    this.setState({personalProfileSubMenuHidden: !personalProfileSubMenuHidden});
  }

  render() {
    const {personalProfileSubMenuHidden} = this.state;
    return (
      <div className="personal">
        <div className="personal-profile">
          <div className="personal-profile-img-container">
            <div onClick={this.personalProfileSubMenuToggle}>
              <img src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/20184707_2475441045927839_6341421179915468800_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=0WQJX1apDRYAX9tsje6&oh=320d7b04d195b54ce64ef31e109a0189&oe=5F8E57AF" alt="personal-profile-im" />
            </div>
          </div>
          {
            !personalProfileSubMenuHidden ?
              <PersonalProfileSubMenu />
              :
              ""
          }
        </div>
        <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" alt="heart" />
        <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png" alt="explore" />
        <img src="https://static.thenounproject.com/png/682477-200.png" alt="home" />
      </div>
    );
  }
}

export default Personal;