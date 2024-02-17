import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodoAsync, toggleTodoAsync } from "../thunk";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodoAsync(todo.id));
  };

  const handleToggle = () => {
    dispatch(toggleTodoAsync(todo.id));
  };

  return (
    <li>
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        onClick={handleToggle}
      >
        {todo.title}
      </span>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default TodoItem;
