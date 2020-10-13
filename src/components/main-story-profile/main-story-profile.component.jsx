import React from 'react';

import './main-story-profile.styles.scss'

class MainStoryProfile extends React.Component {
  render() {
    const {imgUrl, userId} = this.props;
    return (
      <div className="story-element">
        <div className="story-image">
          <div className="story-image-inner-circle">
            <img src={imgUrl}></img>
          </div>
        </div>
        <div className="story-id">
          <span>{userId}</span>
        </div>
      </div>
    );
  }
}

export default MainStoryProfile;