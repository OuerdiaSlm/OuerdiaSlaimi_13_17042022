import React from 'react';
import './sign-in.css';

function SingIn() {
  return (
    <div className="bg-dark">
        <link rel="stylesheet"href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <form className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
          <label className="label-wrapper">
            Username
          </label>
          <input type="text" className="input-wrapper"/>
          <label className="label-wrapper">
            Password
          </label>
          <input type="password" className="input-wrapper"/>
          <div>
            <input type="checkbox" id="remember-me" />
            <label for="remember-me">Remember me</label>
          </div>
          
          <input type="submit" value="Sign" className="sign-in-button"/>
        </form>
    </div>
  )
}
export default SingIn;
