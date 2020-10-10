import React from "react";
import { Link } from "react-router-dom";
import "./day-list-item.scss";

const DayListItem = ({ itemId, completedDay}) => {
  let completedClass = null;
  if (completedDay) {
    completedClass = "day-list-item--complete";
  }
  return (
    <Link to={`day-${itemId}`} className={`day-list-item ${completedClass}`}>
      <span className="day-list-item__count">{itemId}</span>
      <span className="day-list-item__name">День</span>
    </Link>
  );
};

export default DayListItem;
