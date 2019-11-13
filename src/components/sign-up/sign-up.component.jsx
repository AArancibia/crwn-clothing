import React, { Component } from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signUpStart } from "../../redux/user/user.actions";

//import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./sign-up.styles.scss";

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { confirmPassword, password, displayName, email } = this.state;
    const { signUpStart } = this.props;

    if (password !== confirmPassword) {
      alert("Password dont match");
      return;
    }

    signUpStart({ email, password, displayName });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { confirmPassword, password, displayName, email } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with ypour email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            label="DisplayName"
            value={displayName}
            onChange={this.handleChange}
          />
          <FormInput
            type="email"
            name="email"
            label="Email"
            value={email}
            onChange={this.handleChange}
          />
          <FormInput
            type="password"
            name="password"
            label="Password"
            value={password}
            onChange={this.handleChange}
          />
          <FormInput
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            value={confirmPassword}
            onChange={this.handleChange}
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signUpStart: user => dispatch(signUpStart(user))
});
export default connect(null, mapDispatchToProps)(SignUp);
