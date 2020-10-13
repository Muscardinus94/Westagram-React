import React from 'react';

// import './search-result-element.styles.scss';
import './search-result-element.styles.scss';

class SearchResultElement extends React.Component {
  render() {
    const {imgUrl, userId, name, linkUrl} = this.props;
    return (
      <div className="search-id-result-element">
        <a href={linkUrl}>
          <div className="search-profile-container">
            <div className="search-profile-image">
              <img src={imgUrl} alt="" />
            </div>
          </div>
          <div className="info-container">
            <span>{userId}</span>
            <span>{name}</span>
          </div>
        </a>
      </div>
    );
  }
}

export default SearchResultElement;