import React from 'react';

import './additional-info-copyright.styles.scss';

class AddtionalInfoCopyright extends React.Component {
  render() {
    return (
      <div className="additional-info-copyright">
        <div className="additional-info">
          <p>
            소개.도움말.홍보 센터.API.채용 정보.<br /> 정보개인정보처리방침.약관.위치인기 계정.해시태그.언어
          </p>
        </div>
        <div className="copyright">
          <p>
            © 2020 INSTAGRAM FROM FACEBOOK
          </p>
        </div>
      </div>
    );
  }
}

export default AddtionalInfoCopyright;