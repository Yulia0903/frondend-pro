import axios from "axios";

const API_BASE_URL = "https://mockapi.io/api/v1";

const API_ENDPOINTS = {
  TODOS: `${API_BASE_URL}/todos`,
};

export const fetchTodos = async () => {
  const response = await axios.get(API_ENDPOINTS.TODOS);
  return response.data;
};

export const addTodoApi = async (todo) => {
  const response = await axios.post(API_ENDPOINTS.TODOS, todo);
  return response.data;
};

export const deleteTodoApi = async (id) => {
  await axios.delete(`${API_ENDPOINTS.TODOS}/${id}`);
};
