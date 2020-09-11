import React, { Component } from "react";
import "./app.css";

import Header from "../header";
import RandomPlanet from "../random-planet";
import PeoplePage from "../people-page";
import SwapiService from "../../services/swapi-services";

export default class App extends Component {
  swapiService = new SwapiService();

  render() {
    return (
      <div className="container">
        <Header />
        <RandomPlanet />

        <PeoplePage />
      </div>
    );
  }
}
