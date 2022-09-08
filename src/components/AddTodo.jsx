import React, { useState } from 'react';
import styled from 'styled-components';
import {addTodo} from '../api/todoOperations';

const AddTodoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 20%;
    background-color: red;
    padding: 1em;
    border: 1px solid #D9D9D9;
    border-radius: 1em;
    background-color: #e6e6e6;
    margin-bottom: 1em;
`
const AddTodoContainerTitle = styled.span`
    font-size: 1.5em;
    color: #a8a7a7;
    height: 20%;
`
const AddTodoContainerInput = styled.input`
    height: 50%;
    background-color: transparent;
    border-radius: 0.5em;
    margin: 2em 0em;
    font-size: 1em;
    padding: 0em 2em;
`
const AddTodoContainerButton = styled.button`
    height: 20%;
    background-color: transparent;
    border: 1px solid lightgray;
    color: white;
    font-weight: 600;
    &:hover{
        background-color: #b6b6b6;
    }
    margin-bottom: 1em;
`

const IgnoreTodoContainerButton = styled.button`
    height: 20%;
    background-color: transparent;
    border: 1px solid lightgray;
    color: red;
    font-weight: 600;
    &:hover{
        background-color: #b6b6b6;
    }
    margin-bottom: 1em;
`

function AddTodo({setAddTodo, setTodos, todos}) {
    const [todoContent, setTodoContent] = useState("");
    const handleClick = async() =>{
        setAddTodo(false);
        setTodos([...todos, {"content": todoContent, "isCompleted": false}]);
        await addTodo({"content": todoContent, "isCompleted": false });
    }
    const handleChange = e => {
        setTodoContent(e.target.value);
    }
  return (
    <AddTodoContainer>
            <AddTodoContainerTitle>Todo</AddTodoContainerTitle>
            <AddTodoContainerInput onChange={e => handleChange(e)}/>
            <AddTodoContainerButton onClick={()=> handleClick()}>Ekle</AddTodoContainerButton>
            <IgnoreTodoContainerButton onClick={() => setAddTodo(false)}>Vazgeç</IgnoreTodoContainerButton>

    </AddTodoContainer>
  )
}

export default AddTodo