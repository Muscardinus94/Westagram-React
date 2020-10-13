import React from 'react';

import PROFILE_DATA from '../main-story/profile-data';

import SearchResultElement from '../search-result-element/search-result-element.component';

import './search.styles.scss';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      searchInput: '',
      searchResult: [],
      hidden: true,
    }
  }

  liveSearchProfile = (event) => {
    const {value} = event.target;
    const searchResult = [];
    if(!value) {
      console.log("Empty");
       this.setState({hidden: true});
       this.setState({searchResult: searchResult});
    } else {
      this.setState({hidden: false});
      let elementCount = 0;
      PROFILE_DATA.forEach((data) => {
        if (data.userId.includes(value) || data.name.includes(value)) {
          let tempArr = {};
          tempArr["imgUrl"] = data.imgUrl;
          tempArr["userId"] = data.userId;
          tempArr["name"] = data.name;
          tempArr["linkUrl"] = data.linkUrl;
          searchResult.push(tempArr);
          this.setState({searchResult: searchResult});
          elementCount++;
        } else this.setState({searchResult: searchResult});
      });
      console.log(elementCount);
    }
  }

  render() {
    const {searchResult, hidden} = this.state;
    console.log(searchResult);
    return (
      <div className="search">
        <input type="text" placeholder="검색" onChange={this.liveSearchProfile} />
        {
          hidden ?
          null
          :
          <div className="search-id-result-container">
          {
            !searchResult.length ?
            <div className="search-id-result-element"><span>검색 결과가 없습니다</span></div>
            :
            searchResult.map(({imgUrl, userId, name, linkUrl}) => <SearchResultElement imgUrl={imgUrl} userId={userId} name={name} linkUrl={linkUrl} />)
          }
          </div>
        }
      </div>
    );
  }
}

export default Search;