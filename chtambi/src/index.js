import React, { Component } from "react";
import ReactDOM, { render } from "react-dom";
import "./index.css";
//import LightingCounterDisplay from "./components/lighting-counter-display";
//import Circle from "./components/circle";
//import CoounterParent from "./components/counter-parent";
import Colorizer from "./components/colorizer";

const showCircle = () => {
  const colors = ["red", "green", "blue"];
  const renderData = colors.map((color, i) => {
    //return <Circle key={i + color} bgColor={color} />;
  });

  return renderData;
};

ReactDOM.render(
  <div>
    <Colorizer />
  </div>,
  document.getElementById("root")
);
