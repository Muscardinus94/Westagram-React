import React from 'react';

import MainRight from '../main-right/main-right.component';
import MainStory from '../main-story/main-story.component';
import Feeds from '../feeds/feeds.component';

import './main-body.styles.scss';

class MainBody extends React.Component {
  render() {
    return (
      <main>
        <MainStory />
        <Feeds />
        <MainRight />
      </main>
    );
  }
}

export default MainBody;