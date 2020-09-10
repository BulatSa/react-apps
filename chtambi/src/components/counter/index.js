import React, { Component } from "react";
import ReactDOM, { render } from "react-dom";

export default class Counter extends Component {
  render() {
    const textStyle = {
      fontSize: 72,
      color: "#333",
      fontWeight: 'bold'
    }
    return(
      <div style={textStyle}>
        {this.props.display}
      </div>
    );
  }
}