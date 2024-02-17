import { addTodoApi, deleteTodoApi, fetchTodos } from "./api";
import { addTodo, deleteTodo } from "./actions";

export const loadTodosAsync = () => async (dispatch) => {
  const todos = await fetchTodos();
  dispatch(loadTodos(todos));
};

export const addTodoAsync = (todo) => async (dispatch) => {
  const newTodo = await addTodoApi(todo);
  dispatch(addTodo(newTodo));
};

export const deleteTodoAsync = (id) => async (dispatch) => {
  await deleteTodoApi(id);
  dispatch(deleteTodo(id));
};
