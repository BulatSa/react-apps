import React from "react";
import TodoListItem from "./todo-list-item";

const TodoList = ({ todos }) => {

  const elements = todos.map((todo) => {
    const {id, ...todoProps} = todo;
    return (
      <li key={id}>
        <TodoListItem { ...todoProps} />
      </li>
    )
  });

  return (
    <ul>
      {elements}
    </ul>
  );
};

export default TodoList;
