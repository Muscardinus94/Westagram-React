import React from 'react';
import Slider from "react-slick";

import CommentElement from '../comment-element/comment-element.component';

import './article.styles.scss';

class Article extends React.Component {
  constructor() {
    super();
    this.state = {
      heartColor: false,
      likes: Math.floor(Math.random() * 10) + 5,
      addCommentButtonActivate: false,
      comment: '',
      commentList: [],
      deleteText: null,
      commentId: 0,
    }
  }

  enterButtonAddComment = (event) => {
    if(event.key === 'Enter') {
      if(!event.target.value) return;
      event.target.parentNode.parentNode.children[1].click();
    }
  }

  removeComment = (comment) => {
    this.setState({deleteText: comment});
  }

  componentDidUpdate() {
    const {deleteText, commentList} = this.state;
    if (deleteText) {
      this.setState({commentList: commentList.filter((comment) => comment !== deleteText)})
      this.setState({deleteText: null});
    }
  }

  addCommentToFeed = () => {
    const {comment, commentList, commentId} = this.state;
    this.setState({commentList: [...commentList, comment]});
    this.setState({comment: ''});
    this.setState({commentId: commentId + 1});
    this.setState({addCommentButtonActivate: false});
  }

  activateAddCommentButton = (event) => {
    event.preventDefault();
    const {value, name} = event.target;
    console.log(value);
    value ?
    this.setState({addCommentButtonActivate: true})
    :
    this.setState({addCommentButtonActivate: false});
    this.setState({[name]: value});
  }

  articleHeartClick = () => {
    const {heartColor, likes} = this.state;
    if (heartColor) {
      this.setState({heartColor: !heartColor, likes: likes-1});
    }
    else {
      this.setState({heartColor: !heartColor, likes: likes+1});
    }
  }

  render() {
    const articleSettings = {
      arrows: true,
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    const {heartColor, likes, addCommentButtonActivate, commentList, comment, commentId} = this.state;
    return (
      <article>
        <div className="article-header">
          <div className="article-profile-img-container">
            <div className="article-profile-img">
              <img src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/64219646_866712363683753_7365878438877462528_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=lXGRUtCINKEAX8d_W6p&oh=7a160c2460db3c9c9412569366a998d8&oe=5F8EAD70" alt="article-profile" />
            </div>
          </div>
          <div className="article-profile-info-container">
            <div className="article-profile-id">wecode_bootcamp</div>
            <div className="article-profile-name">WeCode - 위코드</div>
            <div className="article-profile-threedots" onClick="clickThreedotsDisplaySubMenu()">
              <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png" alt="article-profile-threedots" />
            </div>
          </div>
        </div>
        <div className="article-image-container">
          <div className="article-image">
            <Slider {...articleSettings}>
              <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/landing/bootcamp/boot_2.jpg" alt="article" />
              <img src="https://media.vlpt.us/images/devmin/post/519de033-a1a0-414c-ba3c-92193ae01d4c/H53A6662.jpg" alt="article" />
              <img src="https://i.ytimg.com/vi/dEapUsHML3s/maxresdefault.jpg" alt="article" />
            </Slider>
          </div>
        </div>
        <div className="article-sub">
          <div className="article-sub-menu">
            <div className="heart">
              {
                !heartColor ?
                <i className="fa fa-heart-o" onClick={this.articleHeartClick}></i>
                :
                <i className="fa fa-heart" onClick={this.articleHeartClick}></i>

              }
            </div>
            <div className="comment">
              <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png" alt="comment" />
            </div>
            <div className="share">
              <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png" alt="share" />
            </div>
            <div className="save">
              <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png" alt="save" />
            </div>
          </div>
          <div className="article-like-info">
            <div className="article-like-profile">
              <div className="article-like-profile-img">
                <img src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/20184707_2475441045927839_6341421179915468800_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=0WQJX1apDRYAX9tsje6&oh=320d7b04d195b54ce64ef31e109a0189&oe=5F8E57AF" alt="article-like-profile" />
              </div>
            </div>
            <div className="article-like-total">
              <span className="like-account">hellobeen</span>님 <span className="other-info">외 {likes}명</span>이 좋아합니다.
            </div>
          </div>
        </div>
        <div className="article-text">
          <span className="account">wecode_bootcamp</span> "위코드는 단순 교육업체가 아닌 개발자 커뮤니티입니다. Wecode에서 배우고 저는 총 5개 회사에서 오퍼를 받았습니다." - Wecode 졸업생 강병진님... <span className="more">더 보기</span><br /><span className="time">54분전</span>
        </div>
        <div className="article-comment">
          <div className="comment-list">
          {
            commentList.map( (comment) => {
              return <CommentElement comment={comment} removeComment={this.removeComment}/>
              })
          }
          {/* <div class="comment-list-child">
            <span class="comment-id">wecode_bootcamp</span>asdfsdafsdf
            <div class="comment-heart">
              <i class="fa fa-heart-o" onclick="toggleHeartColorForComment(this)"></i>
            </div>
            <div class="comment-delete">
              <i class="fa fa-times" onclick="removeComment(this)"></i>
            </div>
          </div>*/}
          </div>
        </div>
          <div className="add-comment">
            <section>
              <input type="text" className="comment-textarea" placeholder="댓글 달기..." name="comment" onChange={this.activateAddCommentButton} value={comment} onKeyPress={this.enterButtonAddComment} />
            </section>
            <input type="submit" className={`add-comment-btn ${addCommentButtonActivate ? "active" : ""}`} value="게시" onClick={this.addCommentToFeed} />
          </div>
      </article>
    );
  }
}

export default Article;