import React, { Component } from "react";
import {
  Route,
  BrowserRouter as Router,
  Link,
  withRouter,
} from "react-router-dom";
import "./day-list-item.scss";

const DayListItem = () => {
  return (
    <Link to={'day-1'} className="day-list-item">
      <span className="day-list-item__count">1</span>
      <span className="day-list-item__name">День</span>
    </Link>
  );
};

export default DayListItem;
