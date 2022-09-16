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
    padding: 2em 2em;
`
const AddTodoContainerButton = styled.input`
    height: 20%;
    background-color: transparent;
    border: 1px solid lightgray;
    color: #000000;
    font-weight: 600;
    &:hover{
        background-color: #b6b6b6;
    }
    margin-bottom: 1em;
    padding: 1em 2em;
`

const IgnoreTodoContainerButton = styled.button`
    height: 20%;
    background-color: transparent;
    border: 1px solid lightgray;
    color: #a00000;
    font-weight: 600;
    &:hover{
        background-color: #b6b6b6;
    }
    margin-bottom: 1em;
    padding: 0.7em 1em;
`

function AddTodo({setAddTodo, setTodos, todos}) {
    const [todoContent, setTodoContent] = useState("");
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setAddTodo(false);
        if (todoContent.length < 3){
            
        }else{
            setTodos([...todos, {"content": todoContent, "isCompleted": false}]);
            await addTodo({"content": todoContent, "isCompleted": false });
        }

    }
    const handleChange = e => {
        setTodoContent(e.target.value);
    }
  return (
    <form onSubmit={e => handleSubmit(e)}>
    <AddTodoContainer>
            
            <AddTodoContainerTitle>Todo</AddTodoContainerTitle>
            <AddTodoContainerInput minLength={3} onChange={e => handleChange(e)}/>
            <AddTodoContainerButton type="submit" value="Ekle" />
            <IgnoreTodoContainerButton onClick={() => setAddTodo(false)}>Vazgeç</IgnoreTodoContainerButton> 

    </AddTodoContainer>
    </form>
  )
}

export default AddTodo