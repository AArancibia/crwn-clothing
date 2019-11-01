import React from "react";

import { CustomButtonContainer } from "./custom-buttom.styles";

import "./custom-button.styles.scss";

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
  // <button
  //   className={`${inverted ? "inverted" : ""} ${
  //     isGoogleSignIn ? "google-sign-in" : ""
  //   } custom-button`}
  //   {...otherProps}
  // >
  //   {children}
  // </button>
);

export default CustomButton;
