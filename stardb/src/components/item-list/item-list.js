import React, { Component } from "react";
import SwapiService from "../../services/swapi-services";
import Spinner from "../spinner";
import "./item-list.css";

export default class ItemList extends Component {
  swapiService = new SwapiService();

  state = {
    peopleList: null,
  };

  componentDidMount() {
    this.swapiService.getAllPeople().then((peopleList) => {
      this.setState({
        peopleList,
      });
    });
  }

  renderItems(peopleList) {
    return peopleList.map((person) => {
      return (
        <li
          className="list-group-item"
          key={person.id}
          onClick={() => this.props.onItemSelected(person.id)}
        >
          {person.name}
        </li>
      );
    });
  }

  render() {
    const { peopleList } = this.state;

    if (!peopleList) {
      return <Spinner />;
    }
    const items = this.renderItems(peopleList);

    return <ul className="item-list list-group">{items}</ul>;
  }
}
