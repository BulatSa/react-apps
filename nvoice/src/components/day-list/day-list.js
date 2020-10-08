import React, { Component } from "react";
import DayListItem from "../day-list-item";
import data from '../../data/data.json';
import "./day-list.scss";

export default class DayList extends Component {
  render() {

    const dayList = data.map((data) => {
      return(
        <DayListItem itemId={data.id} key={data.id}/>
      )
    });

    return (
        <div className="day-list">
          {dayList}
        </div>
    );
  }
}
