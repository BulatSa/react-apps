import React from "react";
import "./day.scss";

const Day = () => {
  const toggleView = (event) => {
    const parent = event.target.parentElement;
    const el = parent.querySelector(".day_part-info");

    el.style.height = el.scrollHeight + "px";
    //el.scrollHeight = el.scrollHeight;

    parent.classList.toggle("open");
    el.style.height = parent.classList.contains("open")
      ? el.scrollHeight + "px"
      : 0;
  };

  return (
    <div className="day">
      <div className="day_part">
        <h3 onClick={toggleView}>Утро</h3>
        <div className="day_part-info">
          <p>
            Здравствуйте! <br />
            Сегодня Великий День! :) Вы начали системные занятия по возрождению
            и настройке Вашего природного голоса! :)
            <br />
            Именно регулярные занятия по четкой, проверенной системе дают
            по-настоящему волшебные результаты! И скоро Вы в этом убедитесь на
            собственном примере! :)
          </p>
        </div>
      </div>

      <div className="day_part">
        <h3 onClick={toggleView}>День</h3>
        <div className="day_part-info">
          <p>
            Здравствуйте! <br />
            Сегодня Великий День! :) Вы начали системные занятия по возрождению
            и настройке Вашего природного голоса! :)
            <br />
            Именно регулярные занятия по четкой, проверенной системе дают
            по-настоящему волшебные результаты! И скоро Вы в этом убедитесь на
            собственном примере! :)
          </p>
        </div>
      </div>

      <div className="day_part">
        <h3 onClick={toggleView}>Вечер</h3>
        <div className="day_part-info">
          <p>
            Здравствуйте! <br />
            Сегодня Великий День! :) Вы начали системные занятия по возрождению
            и настройке Вашего природного голоса! :)
            <br />
            Именно регулярные занятия по четкой, проверенной системе дают
            по-настоящему волшебные результаты! И скоро Вы в этом убедитесь на
            собственном примере! :)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Day;
