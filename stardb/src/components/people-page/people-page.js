import React, { Component } from "react";
import "./people-page.css";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import ErrorBoundry from "../error-boundry";
import ErrorIndicator from "../error-indicator/error-indicator";
import SwapiService from "../../services/swapi-services";
import Row from "../row";

export default class PeoplePage extends Component {
  state = {
    selectedPerson: null,
    hasError: false,
  };

  swapiService = new SwapiService();

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id,
    });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
      >
        {(item) => {
          return `${item.name} (${item.birthYear})`;
        }}
      </ItemList>
    );

    const personDetails = (
      <ErrorBoundry>
        <PersonDetails personId={this.state.selectedPerson} />
      </ErrorBoundry>
    );

    return <Row left={itemList} right={personDetails} />;
  }
}
