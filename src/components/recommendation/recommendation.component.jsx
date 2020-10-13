import React from 'react';

// import './recommendation.styles.css';
import './recommendation.styles.scss';

class Recommendation extends React.Component {
  render() {
    return (
      <div className="recommendation">
        <div className="recommendation-header">
          <span className="header-left">회원님을 위한 추천</span>
          <span className="header-right">모두 보기</span>
        </div>
        <div className="recommendation-info">
          <a href="https://www.instagram.com/jinseyun.go/">
            <div className="recommendation-info-img-container">
              <div>
                <img src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/55961998_2144219755661884_244699173209767936_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=KT2_08Ugdt4AX8CxN-p&oh=98adae7a3d358a449477b5a41c4ada18&oe=5F933BF8" alt="recommendation-info-img" />
              </div>
            </div>
            <div className="recommendation-info-container">
                <div className="recommendation-info-id">jinseyun.go</div>
                <div className="recommendation-info-follow">회원님을 팔로우합니다</div>
                <div className="recommendation-follow">팔로우</div>
            </div>
          </a>
        </div>
        <div className="recommendation-info">
          <a href="https://www.instagram.com/lightyears81/">
            <div className="recommendation-info-img-container">
              <div className="recommendation-info-img">
                <img src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/93214148_225473025179753_2554179714780495872_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=npSCOqbGGCAAX_xkMJ3&oh=781050457100ebad42a136f272a5d4ac&oe=5F9337D1" alt="recommendation-info-img " />
              </div>
            </div>
            <div className="recommendation-info-container">
                <div className="recommendation-info-id">lightyears81</div>
                <div className="recommendation-info-follow">회원님을 팔로우합니다</div>
                <div className="recommendation-follow">팔로우</div>
            </div>
          </a>
        </div>
        <div className="recommendation-info">
          <a href="https://www.instagram.com/onestar_p/">
            <div className="recommendation-info-img-container">
              <div className="recommendation-info-img">
                <img src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/34983547_1909665332404907_5969793680020602880_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=rzR8QvlfhwYAX9dH3ux&oh=623ef3c6309f79b6a26389a8d440285a&oe=5F94F46D" alt="recommendation-info-img" />
              </div>
            </div>
            <div className="recommendation-info-container">
                <div className="recommendation-info-id">onestar_p</div>
                <div className="recommendation-info-follow">회원님을 팔로우합니다</div>
                <div className="recommendation-follow">팔로우</div>
            </div>
          </a>
        </div>
        <div className="recommendation-info">
          <a href="https://www.instagram.com/ssinz7/">
            <div className="recommendation-info-img-container">
              <div className="recommendation-info-img">
                <img src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/13525473_239562676427287_1092224874_a.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=w3vGXPoYWI0AX9L7in_&oh=6728aab4eb4f0ceb3cff8d0a94c6fafb&oe=5F9397CF" alt="recommendation-info-img" />
              </div>
            </div>
            <div className="recommendation-info-container">
                <div className="recommendation-info-id">ssinz7</div>
                <div className="recommendation-info-follow">회원님을 팔로우합니다</div>
                <div className="recommendation-follow">팔로우</div>
            </div>
          </a>
        </div>
        <div className="recommendation-info">
          <a href="https://www.instagram.com/honey_lee32/">
            <div className="recommendation-info-img-container">
              <div className="recommendation-info-img">
                <img src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/67491268_1280683048803873_2961286346074750976_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=JUOei-yO7gEAX_Cf1TO&oh=28ec508f7f124a8188d6375ea86a0d73&oe=5F962196" alt="recommendation-info-img" />
              </div>
            </div>
            <div className="recommendation-info-container">
                <div className="recommendation-info-id">honey_lee32</div>
                <div className="recommendation-info-follow">회원님을 팔로우합니다</div>
                <div className="recommendation-follow">팔로우</div>
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default Recommendation;