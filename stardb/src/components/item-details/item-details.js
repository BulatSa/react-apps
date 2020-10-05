import React, { Component } from "react";
import SwapiService from "../../services/swapi-services";
import Spinner from "../spinner";
import "./item-details.css";

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};

export { Record };

export default class ItemDetails extends Component {
  state = {
    item: null,
    loading: true,
    image: null,
  };

  swapiService = new SwapiService();

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props;
    if (!itemId) {
      return;
    }

    this.setState({
      loading: true,
    });

    getData(itemId).then((item) => {
      this.setState({ item, loading: false, image: getImageUrl(item) });
    });
  }

  render() {
    if (!this.state.item) {
      return <span>Select a item from the list</span>;
    }

    const { loading, image, item } = this.state;
    const { id, name, gender, birthYear, eyeColor } = item;

    if (loading) {
      return <Spinner />;
    }

    return (
      <div className="item-details card">
        <img className="item-image" src={image} />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {React.Children.map(this.props.children, (child) => {
              return React.cloneElement(child, {item});
            })}
          </ul>
        </div>
      </div>
    );
  }
}
