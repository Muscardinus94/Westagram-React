import React from 'react';

import EmailPasswordFacebookLogin from '../email-password-facebook-login/email-password-facebook-login.component';

import './login-form.styles.scss';

class LoginForm extends React.Component {
  render() {
    return (
      <div className="login-form">
        <img src="./images/logo_text.png" alt=""/>
        <EmailPasswordFacebookLogin />
      </div>
    );
  }
}

export default LoginForm;