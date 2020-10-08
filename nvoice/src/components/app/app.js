import React from "react";
import Header from "../header";
import DayList from "../day-list";
import "./app.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Day from "../day/day";

const App = () => {
  return (
    <div className="container">
      <Router>
        <Header title={"Natural Voice"} />
        <Route path="/" exact component={DayList} />
        <Route path="/day/:id" component={Day} />
      </Router>
    </div>
  );
};

export default App;
