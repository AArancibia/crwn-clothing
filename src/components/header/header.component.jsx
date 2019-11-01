import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.styles.scss";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUSer } from "../../redux/user/user.selector";

import {
  HeaderContainer,
  LogoContainer,
  OptionLink,
  OptionsContainer
} from "./header.styles";

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/contact">CONTACT</OptionLink>
      {currentUser ? (
        <OptionLink as="div" onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/signin">SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? <CartDropDown /> : null}
  </HeaderContainer>
);

// state root reducer
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUSer,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
