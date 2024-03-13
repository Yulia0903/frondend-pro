import { createReducer } from "@reduxjs/toolkit";
import { addTodo } from "../actions/todoActions";
import { deleteTodo } from "../actions/todoActions";
import { toggleTodo } from "../actions/todoActions";


const initialState = {
  todos: [],
};

const todoReducer = createReducer(initialState, (builder) => {
  builder.addCase(addTodo.fulfilled, (state, action) => {
    state.todos.push(action.payload);
  });
});

const todoReducer = createReducer(initialState, (builder) => {
  builder.addCase(deleteTodo.fulfilled, (state, action) => {
    state.todos = state.todos.filter((todo) => todo.id !== action.payload);
  });
});




const todoReducer = createReducer(initialState, (builder) => {
  builder.addCase(toggleTodo.fulfilled, (state, action) => {
    const toggledTodoIndex = state.todos.findIndex((todo) => todo.id === action.payload.id);
    state.todos[toggledTodoIndex] = action.payload;
  });
});


export default todoReducer;
