import React, { Component } from "react";
import ReactDOM, { render } from "react-dom";
import "./style.css";

export default class Colorizer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: "",
      bgColor: "white",
    };
  }

  colorValue(e) {
    this.setState(() => {
      return {
        color: e.target.value,
      };
    });
  }

  setNewColor(e) {
    this.setState(({ color }) => {
      return {
        bgColor: color,
      };
    });

    e.preventDefault();
  }

  render() {
    const { bgColor } = this.state;
    const squareStyle = {
      backgroundColor: bgColor,
    };

    return (
      <div className="colorArea">
        <div style={squareStyle} className="colorSquare"></div>

        <form onSubmit={this.setNewColor}>
          <input 
            onChange={this.colorValue} 
            placeholder="Set color" 
            ref={
              (el) => {
                this._input = el;
              }
            } 
          />
          <button>ok</button>
        </form>
      </div>
    );
  }
}
