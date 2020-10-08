import React, { Component } from "react";
import DayListItem from "../day-list-item";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import "./day-list.scss";

export default class DayList extends Component {
  render() {
    return (
        <div className="day-list">
          <DayListItem />
        </div>
    );
  }
}
