import React from "react";
import { withRouter } from "react-router-dom";
//import "./menu-item.styles.scss";
import {
  MenuItemContainer,
  BackgroundImage,
  ContentContainer,
  Subtitle,
  Title
} from "./menu-item.styles";
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <MenuItemContainer
      className={`menu-item ${size}`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <BackgroundImage imageUrl={imageUrl} className="background-image" />
      <ContentContainer>
        <Title>{title}</Title>
        <Subtitle>SHOP NOW</Subtitle>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);
