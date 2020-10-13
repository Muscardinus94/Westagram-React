import React from 'react';

import LoginForm from '../../components/login-form/login-form.component';

import './login.styles.css';

class Login extends React.Component {
  render() {
    return (
      <div className='login-container'>
        <LoginForm />
      </div>
    );
  }
};

export default Login;