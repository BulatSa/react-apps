import React, { Component } from "react";

import LightingCounter from "../lighting-counter";

export default class LightingCounterDisplay extends Component {
  render() {
    const divStyle = {
      width: 250,
      textAlign: "center",
      backgroundColor: "black",
      padding: 20,
      color: "#999",
      borderRadius: 10,
    };
    return (
      <div style={divStyle}>
        <LightingCounter />
      </div>
    );
  }
}
