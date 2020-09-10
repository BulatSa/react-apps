import React, { Component } from "react";

export default class LightingCounter extends Component {
  constructor() {
    super();

    this.state = {
      strikes: 0,
    };
  }

  timerTick() {
    setInterval(() => {
      this.setState(() => {
        return {
          strikes: this.state.strikes + 1,
        };
      });
    }, 1000);
  }

  componentDidMount() {
    this.timerTick();
  }

  render() {
    return <h1>{this.state.strikes}</h1>;
  }
}
