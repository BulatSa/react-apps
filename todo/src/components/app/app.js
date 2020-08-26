import React from "react";

import AppHeader from "../app-header";
import ItemStatusFilter from "../item-status-filter";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import "./app.css";

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

export default App;
