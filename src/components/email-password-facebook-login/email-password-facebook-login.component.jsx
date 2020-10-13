import React from 'react';
import {withRouter} from 'react-router-dom';

import LoginInput from '../login-input/login-input.component';

import './email-password-facebook-login.styles.scss';

class EmailPasswordFacebookLogin extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      password: '',
      loginButtonActivate: false,
    }
  }

  enterButtonLogin = (event) => {
    if(event.key === 'Enter') {
      if(!event.target.value) return;
      event.target.parentNode.children[2].click();
    }
  }

  checkButtonActivation = async (event) => {
    event.preventDefault();
    const {name, value} = event.target;
    await this.setState({[name]: value});
    const {id, password} = this.state;
    (id && password) ?
    this.setState({loginButtonActivate: true})
    :
    this.setState({loginButtonActivate: false});
  }

  checkValidation = (history) => {
    const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    const {id, password} = this.state;
    if(!regExp.test(id)) alert("잘못된 이메일 형식입니다");
    else if(password.length < 5) alert("비밀번호는 5글자 이상입니다");
    else history.push('/main');
  }

  render() {
    const {history} = this.props;
    const {loginButtonActivate} = this.state;
    return (
      <div className="email-and-password">
        <LoginInput type="text" placeholder="전화번호, 사용자 이름 또는 이메일" name="id" onChange={this.checkButtonActivation} onKeyPress={this.enterButtonLogin} />
        <LoginInput type="password" placeholder="비밀번호" name="password" onChange={this.checkButtonActivation} onKeyPress={this.enterButtonLogin} />
        <button className={`${loginButtonActivate ? "active" : "" }`} onClick={()=>{this.checkValidation(history)}}><span>로그인</span></button>
          <div className="orDiv">
            <span className="orSpan">또는</span>
            <div className="facebook">
              <div className="facebook-img-container">
              </div>
              <div className="facebook-login-text">
                <a href="#none">Facebook으로 로그인</a>
              </div>
            </div>
          </div>
          <div className="forget">
          <a href="#none">비밀빈호를 잊으셨나요?</a>
        </div>
      </div>
    );
  }
}

export default withRouter(EmailPasswordFacebookLogin);