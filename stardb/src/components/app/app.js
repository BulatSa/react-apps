import React, { Component } from "react";
import "./app.css";

import Header from "../header";
import RandomPlanet from "../random-planet";
import SwapiService from "../../services/swapi-services";
import ErrorBoundry from "../error-boundry";
import Row from "../row";
import ItemDetails, { Record } from "../item-details/item-details";

export default class App extends Component {
  swapiService = new SwapiService();

  render() {
    const {
      getPerson,
      getStarship,
      getPersonImage,
      getStarshipImage,
    } = this.swapiService;

    const personDetails = (
      <ItemDetails itemId={11} getData={getPerson} getImageUrl={getPersonImage}>
        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye Color" />
      </ItemDetails>
    );

    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarship}
        getImageUrl={getStarshipImage}
      >
        <Record field="model" label="Model" />
        <Record field="length" label="Length" />
        <Record field="costInCredits" label="Cost" />
      </ItemDetails>
    );

    return (
      <ErrorBoundry>
        <div className="container">
          <Header />
          <RandomPlanet />

          {/* <PeoplePage /> */}
          <Row left={personDetails} right={starshipDetails} />
        </div>
      </ErrorBoundry>
    );
  }
}
