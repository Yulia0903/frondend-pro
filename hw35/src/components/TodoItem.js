import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodoAsync } from "../actions";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodoAsync(todo.id));
  };

  return (
    <div>
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.title}
      </span>
      <button onClick={handleToggle}>Toggle</button>
    </div>
  );
};

export default TodoItem;
