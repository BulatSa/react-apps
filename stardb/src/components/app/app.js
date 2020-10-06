import React, { Component } from "react";
import "./app.css";

import Header from "../header";
import SwapiService from "../../services/swapi-services";
import ErrorBoundry from "../error-boundry";
import {
  PersonList,
  PlanetList,
  StarshipList,
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
} from "../sw-components";

export default class App extends Component {
  swapiService = new SwapiService();

  render() {
    return (
      <ErrorBoundry>
        <div className="stardb-app">
          <Header />

          <PersonDetails itemId={11} />

          <PersonList/>

          <StarshipList/>

          <PlanetList/>
        </div>
      </ErrorBoundry>
    );
  }
}
