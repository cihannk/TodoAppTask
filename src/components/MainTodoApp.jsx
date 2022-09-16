import React, {useState, useEffect} from 'react'
import { addTodo, deleteTodo, getTodos } from '../api/todoOperations';
import Todo from './Todo';
import Header from './Header';
import styled from "styled-components";
import AddTodo from './AddTodo';


const TodosContainer = styled.div`
    width: 50vw;
    padding: 1em;
`
const AddTodoButtonContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
const AddTodoButton = styled.button`
    color: gray;
    padding: 1em 2em;
    margin-bottom: 1em;
    background-color: transparent;
    border: 1px solid lightgray;
    font-size: 1em;
    font-weight: 600;
    &:hover{
        background-color: lightgrey;
        color: white;
    }
    
`

function MainTodoApp({nightMode, setNightMode, setTodoCount}) {
    const [todos, setTodos] = useState([]);
    const [addTodo, setAddTodo] = useState(false);

    const handleDelete = async (id) => {
        const temp = todos.filter(todo => todo.id !== id);
        setTodos(temp);
        await deleteTodo(id);
    }

    const handleClickAdd = (state) => {
        setAddTodo(state);
    }

    const saveTodosToState = async () =>  {
        const result= await getTodos();
        setTodos(result.data);
        setTodoCount(result.data.length)

    }

    useEffect(()=>{
        saveTodosToState();
    }, []);

  return (
    <TodosContainer>
        <Header setNightMode={setNightMode} nightMode={nightMode}>TODO APP</Header>
        <AddTodoButtonContainer>
            <AddTodoButton onClick={()=> handleClickAdd(true)} >Todo Ekle</AddTodoButton>
        </AddTodoButtonContainer>
        {addTodo && <AddTodo setAddTodo={setAddTodo} setTodos={setTodos} todos={todos}/>}

        {todos && todos.slice(0).reverse().map(todo => <Todo key={todo.id} handleDelete={handleDelete} id={todo.id} todoObj={todo} nightMode={nightMode}/>)}
    </TodosContainer>
  )
}

export default MainTodoApp