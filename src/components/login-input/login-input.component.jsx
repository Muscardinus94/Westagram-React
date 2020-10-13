import React from 'react';

import './login-input.styles.scss';

class LoginInput extends React.Component {
  render() {
    const {type, placeholder, name, ...otherProps} = this.props;
    return (
      <input type={type} placeholder={placeholder} name={name} {...otherProps} />
    );
  }
}

export default LoginInput;