import React from 'react';

import './main-right-profile.styles.scss'

class MainRightProfile extends React.Component {
  render() {
    return (
      <div className="profile">
            <a href="https://www.instagram.com/wecode_bootcamp/">
              <div className="profile-img-container">
                <div>
                  <img src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/64219646_866712363683753_7365878438877462528_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=lXGRUtCINKEAX8d_W6p&oh=7a160c2460db3c9c9412569366a998d8&oe=5F8EAD70" alt="profile-img" />
                </div>
              </div>
              <div className="profile-info-container">
                <div className="profile-id">wecode_bootcamp</div>
                <div className="profile-name">WeCode | 위코드</div>
              </div>
            </a>
          </div>
    );
  }
}

export default MainRightProfile;