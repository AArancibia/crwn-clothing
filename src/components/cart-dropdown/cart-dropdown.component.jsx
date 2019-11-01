import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/car-actions";

//import CustomButton from "../custom-button/custom-button.component";
import {
  AddButton,
  CartDropdownContainer,
  CartItems,
  EmptyMessage
} from "./cart-dropdown.styles";
import CartItem from "../cart-item/cart-item.component";

//import "./cart-dropdown.styles.scss";

const CartDropDown = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer>
    <CartItems>
      {cartItems.length ? (
        cartItems.map(({ id, ...cartItem }) => (
          <CartItem key={id} item={cartItem}></CartItem>
        ))
      ) : (
        <EmptyMessage>No hay items seleccionados</EmptyMessage>
      )}
    </CartItems>
    <AddButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </AddButton>
  </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
