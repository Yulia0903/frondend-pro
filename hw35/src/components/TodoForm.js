import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoAsync } from "../actions";

const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo.trim()) return;
    dispatch(addTodoAsync({ title: todo }));
    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add new todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
