import React, { Component } from "react";
import "./menu-item.styles.scss";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as menuItemActions from "../../store/menuItem/actions";
const MenuItem = ({ title, imageUrl, size }) => {
  // constructor(props) {
  //     super(props);
  //     this.state = {};
  // }
  return (
    <div className={`menu-item ${size}`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};
// export default connect(
//     ({ menuItem }) => ({ ...menuItem }),
//     dispatch => bindActionCreators({ ...menuItemActions }, dispatch)
//   )( menuItem );

export default MenuItem;
