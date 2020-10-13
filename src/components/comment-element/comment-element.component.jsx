import React from 'react';

import './comment-element.styles.scss';

class CommentElement extends React.Component {
  constructor() {
    super();
    this.state = {
      heartColor: false,
    }
  }

  toggleHeartColorForComment = () => {
    const {heartColor} = this.state;
    this.setState({heartColor: !heartColor});
  }

  render() {
    const {comment, removeComment} = this.props;
    const {heartColor} = this.state;
    return (
      <div className="comment-list-child">
        <span className="comment-id">wecode_bootcamp</span>{comment}
        <div className="comment-heart">
          <i className={`${heartColor ? "fa fa-heart" : "fa fa-heart-o"}`} onClick={this.toggleHeartColorForComment}></i>
        </div>
        <div className="comment-delete">
          <i className="fa fa-times" onClick={()=>removeComment(comment)}></i>
        </div>
      </div>
    );
  }
}

export default CommentElement;