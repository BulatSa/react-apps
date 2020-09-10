import React, { Component } from "react";

export default class Circle extends Component {

  render() {
    const circleStyle = {
      padding: 10,
      margin: 20,
      display: "inline-block",
      backgroundColor: this.props.bgColor,
      borderRadius: "50%",
      width: 100,
      height: 100,
    };
    return <div style={circleStyle}></div>;
  }
}
