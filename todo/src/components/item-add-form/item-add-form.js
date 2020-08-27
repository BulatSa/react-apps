import React, { Component } from "react";
import "./item-add-form.css";

export default class ItemAddForm extends Component {
  render() {
    const { onAdded } = this.props;
    const text = "Lorem ipsum";
    return (
      <div className="item-add-form">
        <button
          className="btn btn-outline-secondary"
          onClick={() => {
            onAdded(text);
          }}
        >
          Add Item
        </button>
      </div>
    );
  }
}
