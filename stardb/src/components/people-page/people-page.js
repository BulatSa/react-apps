import React, { Component } from "react";
import "./people-page.css";
import ItemList from "../item-list";
import ItemDetails from "../item-details";
import ErrorBoundry from "../error-boundry";
import ErrorIndicator from "../error-indicator/error-indicator";
import SwapiService from "../../services/swapi-services";
import Row from "../row";

export default class PeoplePage extends Component {
  state = {
    selectedItem: null,
    hasError: false,
  };

  swapiService = new SwapiService();

  onItemSelected = (id) => {
    this.setState({
      selectedItem: id,
    });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    const itemList = (
      <ItemList
        onItemSelected={this.onItemSelected}
        getData={this.swapiService.getAllPeople}
      >
        {(item) => {
          return `${item.name} (${item.birthYear})`;
        }}
      </ItemList>
    );

    const itemDetails = (
      <ErrorBoundry>
        <ItemDetails itemId={this.state.selectedItem} />
      </ErrorBoundry>
    );

    return <Row left={itemList} right={itemDetails} />;
  }
}
