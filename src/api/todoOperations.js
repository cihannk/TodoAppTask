import axios from "./axiosInstance";

export const getTodos = async () =>{
    const todos = await axios.get("/todos");
    return todos;
}

export const getTodoFromId = async (todoId) =>{
    const todo = await axios.get(`todos/${todoId}`);
    return todo;
}

export const addTodo = async (todoObj) =>{
    const todos = await axios.post("/todos", todoObj);
    return todos;
}

export const updateTodo = async (todoId, todoObj) =>{
    const todos = await axios.put(`todos/${todoId}`, todoObj);
    return todos;
}

export const deleteTodo = async (todoId) =>{
    await axios.delete(`todos/${todoId}`);
}






