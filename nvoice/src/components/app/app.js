import React, { Component } from "react";
import Header from "../header";
import DayList from "../day-list";
import "./app.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Day from "../day/day";

export default class App extends Component {
  state = {
    completeDays: 1,
  };

  onCompleteDay = () => {
    console.log("onCompleteDay");
    //this.setState(() => {
    //  return {
    //    completeDays: ++this.completeDays,
    //  };
    //});
  };

  render() {
    const { completeDays } = this.state;

    return (
      <div className="container">
        <Router>
          <Header title={"Natural Voice"} />
          <Route path="/" exact>
            <DayList
              completeDays={completeDays}
            />
          </Route>
          <Route path="/day-:id" component={Day}/>
        </Router>
      </div>
    );
  }
}
