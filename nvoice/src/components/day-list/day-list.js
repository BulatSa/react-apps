import React, { Component } from "react";
import DayListItem from "../day-list-item";
import data from '../../data/data.json';
import "./day-list.scss";

export default class DayList extends Component {
  render() {
    const {completeDays} = this.props;
    const dayList = data.map((data, index) => {
      let completedDay = false;;
      if (index < completeDays) {
        completedDay = true;
      }
      return(
        <DayListItem itemId={data.id} key={data.id} completedDay={completedDay}/>
      )
    });

    return (
        <div className="day-list" >
          {dayList}
        </div>
    );
  }
}
