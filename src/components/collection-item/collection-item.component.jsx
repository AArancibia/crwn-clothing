import React from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/car-actions";

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  ItemImage,
  NameContainer,
  PriceContainer,
  AddButton
} from "./collection-item.styles";

//import "./collection-item.styles.scss";

const CollectionItem = ({ item, addItem }) => {
  const { imageUrl } = item;
  return (
    <CollectionItemContainer>
      <ItemImage className="image" imageUrl={imageUrl}></ItemImage>

      <CollectionFooterContainer>
        <NameContainer></NameContainer>
        <PriceContainer></PriceContainer>
      </CollectionFooterContainer>
      <AddButton
        onClick={() => addItem(item)}
        className="custom-button"
        inverted
      >
        ADD TO CART
      </AddButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
