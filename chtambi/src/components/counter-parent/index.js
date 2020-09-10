import React, { Component } from "react";
import ReactDOM, { render } from "react-dom";
import Counter from "../counter";

export default class CounterParent extends Component {
  constructor(props) {
    super();

    this.state = {
      count: 2,
    };

    this.increase = this.increase.bind(this);
  }

  increase(e) {
    let { count } = this.state;
    console.log(e);
    if (e.shiftKey) {
      count += 10;
    } else {
      count += 1;
    }
    this.setState({
      count: count,
    });
  }

  render() {
    const { count } = this.state;
    const bgStyle = {
      width: 250,
      height: 100,
      padding: 50,
      borderRadius: 10,
      textAlign: "center",
      backgroundColor: "#ffc53a",
    };

    const btnStyle = {
      width: 30,
      height: 30,
      fontSize: "1em",
      fontWeight: "bold",
      color: "#333",
      lineHeight: "3px",
    };

    return (
      <div style={bgStyle}>
        <Counter display={count} />
        <button style={btnStyle} onClick={this.increase}>
          +
        </button>
      </div>
    );
  }
}
