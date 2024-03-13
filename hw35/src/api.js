export const createTodoApi = async (todoData) => {
  try {
    const response = await fetch("https://example.com/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todoData),
    });

    if (!response.ok) {
      throw new Error("Failed to create todo");
    }

    const createdTodo = await response.json();
    return createdTodo;
  } catch (error) {
    console.error("Error creating todo:", error);
    throw error;
  }
};

export const updateTodoApi = async (id, todoData) => {
  try {
    const response = await fetch(`https://example.com/todos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todoData),
    });

    if (!response.ok) {
      throw new Error("Failed to update todo");
    }

    const updatedTodo = await response.json();
    return updatedTodo;
  } catch (error) {
    console.error("Error updating todo:", error);
    throw error;
  }
};

export const deleteTodoApi = async (id) => {
  try {
    const response = await fetch(`https://example.com/todos/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to delete todo");
    }
  } catch (error) {
    console.error("Error deleting todo:", error);
    throw error;
  }
};

export const fetchTodosApi = async () => {
  try {
    const response = await fetch("https://example.com/todos");

    if (!response.ok) {
      throw new Error("Failed to fetch todos");
    }

    const todos = await response.json();
    return todos;
  } catch (error) {
    console.error("Error fetching todos:", error);
    throw error;
  }
};

export const toggleTodoApi = async (id) => {
  try {
    const response = await fetch(`https://example.com/todos/${id}/toggle`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to toggle todo");
    }

    const toggledTodo = await response.json();
    return toggledTodo;
  } catch (error) {
    console.error("Error toggling todo:", error);
    throw error;
  }
};
