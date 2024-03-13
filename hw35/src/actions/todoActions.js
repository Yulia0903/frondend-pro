import { createAsyncThunk } from "@reduxjs/toolkit";
import todoAPI from "../api/todoAPI";

export const addTodo = createAsyncThunk("todos/addTodo", async (todoData) => {
  const response = await todoAPI.addTodo(todoData);
  return response.data;
});

export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (todoId) => {
    await todoAPI.deleteTodo(todoId);
    return todoId;
  }
);

export const toggleTodo = createAsyncThunk(
  "todos/toggleTodo",
  async (todoId) => {
    const response = await todoAPI.toggleTodo(todoId);
    return response.data;
  }
);
