import React from 'react';

import Article from '../article/article.component';

import './feeds.styles.scss';

class Feeds extends React.Component {
  render() {
    return (
      <div className="feeds">
        <Article />
      </div>
    );
  }
}

export default Feeds;