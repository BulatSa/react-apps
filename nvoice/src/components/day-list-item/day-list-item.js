import React, { Component } from "react";
import {Route, BrowserRouter as Router} from 'react-router-dom';
import "./day-list-item.scss";

export default class DayListItem extends Component {
  render() {
    const {match} = this.props;
    console.log(match);
    return (
      <a href="#" className="day-list-item">
        <span className="day-list-item__count">1</span>
        <span className="day-list-item__name">День</span>
      </a>
    );
  }
  
};
