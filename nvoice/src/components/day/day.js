import React, { Component } from "react";
import dataJSON from "../../data/data.json";
import "./day.scss";

export default class Day extends Component {
  state = {
    completedThisDay: null,
    completedThisDayCounter: null
  };

  render() {
    const { match, onCompleteDay } = this.props;
    console.log(this.props);
    const toggleView = (event) => {
      
      const parent = event.target.parentElement;
      const el = parent.querySelector(".day_part-info");

      el.style.height = el.scrollHeight + "px";

      parent.classList.toggle("open");
      el.style.height = parent.classList.contains("open")
        ? el.scrollHeight + "px"
        : 0;
    };

    const id = +match.params.id;

    const data = dataJSON.filter((data) => {
      return data.id === id;
    })[0];

    const createMarkup = (text) => {
      return { __html: text };
    };

    const MorningHTML = () => {
      return <p dangerouslySetInnerHTML={createMarkup(data.parts.morning)} />;
    };

    const AfternoonHTML = () => {
      return <p dangerouslySetInnerHTML={createMarkup(data.parts.afternoon)} />;
    };

    const EveningHTML = () => {
      return <p dangerouslySetInnerHTML={createMarkup(data.parts.evening)} />;
    };

    return (
      <div className="day">
        <h2 className="day_title">День {id}</h2>
        <div className="day_part" data-part="morning">
          <h3 onClick={onCompleteDay}>Утро</h3>
          <div className="day_part-info">
            <MorningHTML />
          </div>
        </div>

        <div className="day_part" data-part="afternoon">
          <h3 onClick={toggleView}>День</h3>
          <div className="day_part-info">
            <AfternoonHTML />
          </div>
        </div>

        <div className="day_part" data-part="evening">
          <h3 onClick={toggleView}>Вечер</h3>
          <div className="day_part-info">
            <EveningHTML />
          </div>
        </div>
      </div>
    );
  }
}
