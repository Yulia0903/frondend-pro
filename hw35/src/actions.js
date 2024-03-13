import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteTodoApi, toggleTodoApi } from "./api";
import { createSlice } from "@reduxjs/toolkit";

export const deleteTodoAsync = createAsyncThunk(
  "todos/deleteTodoAsync",
  async (id) => {
    await deleteTodoApi(id);
    return id;
  }
);

export const toggleTodoAsync = createAsyncThunk(
  "todos/toggleTodoAsync",
  async (id) => {
    const response = await toggleTodoApi(id);
    return response.data;
  }
);

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isDarkMode: false,
  },
  reducers: {
    toggleTheme: (state, action) => {
      state.isDarkMode = action.payload;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
