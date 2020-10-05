import React from "react";
import Header from "../header";
import DayList from "../day-list";
import "./app.scss";

const App = () => {
  return (
    <div className="container">
      <Header />
      <DayList />
    </div>
  );
};

export default App;
