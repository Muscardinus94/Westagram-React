import React from 'react';
import Slider from "react-slick";

import MainStoryProfile from '../main-story-profile/main-story-profile.component';

import PROFILE_DATA from './profile-data';

import './main-story.styles.scss';

class MainStory extends React.Component{
  constructor() {
    super();
    this.state = {
      profileData: PROFILE_DATA,
    }
  }
  render() {
    const storySettings = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 7,
    slidesToScroll: 3,
    responsive: [{
      breakpoint: 800,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 2
      }
    }]
    }
    return (
      <div className="main-story-container">
          <div className="story-element-container">
            <Slider {...storySettings}>
            {
              this.state.profileData.map(({imgUrl, userId, id}) =>(
                <MainStoryProfile key={id} imgUrl={imgUrl} userId={userId} />
              ))
            }
            </Slider>
          </div>
      </div>
    );
  }
}

export default MainStory;