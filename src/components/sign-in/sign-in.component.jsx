import React, { Component } from "react";
import { connect } from "react-redux";
import FormInput from "../form-input/form-input.component";

import {
  googleSignInStart,
  emailSignInStart
} from "../../redux/user/user.actions";

import "./sign-in.styles.scss";
import CustomButton from "../custom-button/custom-button.component";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    const { emailSignInStart } = this.props;
    emailSignInStart({ email, password });
    // try {
    //   await auth.signInWithEmailAndPassword(email, password);
    //   this.setState({ email: "", password: "" });
    // } catch (err) {
    //   console.log(err);
    // }
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { googleSignInStart } = this.props;
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="Email"
            handleChange={this.handleChange}
            type="text"
            name="email"
            value={email}
            required
          />
          <FormInput
            name="password"
            type="password"
            value={password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit" value="Submit Form">
              Sign In
            </CustomButton>
            <CustomButton
              type="button"
              onClick={googleSignInStart}
              isGoogleSignIn
              value="Submit Form"
            >
              Sign In with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapDisptachToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: user => dispatch(emailSignInStart(user))
});

export default connect(
  null,
  mapDisptachToProps
)(SignIn);

//https://crwn-db-d0ec0.firebaseapp.com/__/auth/handler
