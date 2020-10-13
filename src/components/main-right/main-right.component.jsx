import React from 'react';

import MainRightProfile from '../main-right-profile/main-right-profile.component';
import Recommendation from '../recommendation/recommendation.component';
import AddtionalInfoCopyright from '../additional-info-copyright/additional-info-copyright.component';

import './main-right.styles.scss';

class MainRight extends React.Component {
  render() {
    return (
      <div className="main-right">
        <MainRightProfile />
        <Recommendation />
        <AddtionalInfoCopyright />
      </div>
    );
  }
}

export default MainRight;