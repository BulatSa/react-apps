import React from "react";
import ReactDOM from "react-dom";

import AppHeader from "./components/app-header";
import ItemStatusFilter from "./components/item-status-filter";
import SearchPanel from "./components/search-panel";
import TodoList from "./components/todo-list";
import "./index.css";

const App = () => {
  const todoData = [
    { label: `Drink Coffee`, important: false, id: 1 },
    { label: `Be Awesome`, important: true, id: 2 },
    { label: `Watch Cinema`, important: false, id: 3 },
  ];
  return (
    <div className="todo-app">
      <AppHeader todo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList todos={todoData} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById(`root`));
