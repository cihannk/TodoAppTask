import React, {useState, useEffect} from 'react'
import { getTodos } from '../api/todoOperations';
import Todo from './Todo';
import styled from "styled-components";


const TodosContainer = styled.div`
    width: 50vw;
    height: 100vh;
    padding: 5em;
`


function MainTodoApp() {
    const [todos, setTodos] = useState([]);

    const saveTodosToState = async () =>  {
        const result= await getTodos();
        console.log(result.data);
        setTodos(result.data);

    }

    useEffect(()=>{
        saveTodosToState();
    }, []);

  return (
    <TodosContainer>
        {todos && todos.map(todo => <Todo id={todo.id} todoObj={todo}/>)}
    </TodosContainer>
  )
}

export default MainTodoApp