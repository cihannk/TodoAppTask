import React, {useState, useEffect} from 'react'
import { deleteTodo, getTodos } from '../api/todoOperations';
import Todo from './Todo';
import Header from './Header';
import styled from "styled-components";


const TodosContainer = styled.div`
    width: 50vw;
    height: 100vh;
    padding: 1em;
`

function MainTodoApp({nightMode, setNightMode}) {
    const [todos, setTodos] = useState([]);

    const handleDelete = async (id) => {
        const temp = todos.filter(todo => todo.id !== id);
        setTodos(temp);
        await deleteTodo(id);
    }

    const saveTodosToState = async () =>  {
        const result= await getTodos();
        setTodos(result.data);

    }

    useEffect(()=>{
        saveTodosToState();
    }, []);

  return (
    <TodosContainer>
        <Header setNightMode={setNightMode} nightMode={nightMode}>TODO APP</Header>
        {todos && todos.map(todo => <Todo key={todo.id} handleDelete={handleDelete} id={todo.id} todoObj={todo} nightMode={nightMode}/>)}
    </TodosContainer>
  )
}

export default MainTodoApp