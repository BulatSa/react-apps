import React from "react";
import dataJSON from "../../data/data.json";
import "./day.scss";

const Day = ({ match }) => {
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
    return {__html: text};
  }
  
  const MorningHTML = () => {
    return <p dangerouslySetInnerHTML={createMarkup(data.parts.morning)} />;
  }

  const AfternoonHTML = () => {
    return <p dangerouslySetInnerHTML={createMarkup(data.parts.afternoon)} />;
  }

  const EveningHTML = () => {
    return <p dangerouslySetInnerHTML={createMarkup(data.parts.evening)} />;
  }

  return (
    <div className="day">
      <h2 className="day_title">День {id}</h2>
      <div className="day_part">
        <h3 onClick={toggleView}>Утро</h3>
        <div className="day_part-info">
          <MorningHTML/>
        </div>
      </div>

      <div className="day_part">
        <h3 onClick={toggleView}>День</h3>
        <div className="day_part-info">
          <AfternoonHTML/>
        </div>
      </div>

      <div className="day_part">
        <h3 onClick={toggleView}>Вечер</h3>
        <div className="day_part-info">
          <EveningHTML/>
        </div>
      </div>
    </div>
  );
};

export default Day;
